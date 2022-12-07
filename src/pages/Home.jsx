import { useState } from 'react'
import ToDo from '../components/ToDo/ToDo';
import Header from '../components/header/Header';
import CheckBox from '../components/checkbox/CheckBox';
import Button from '../utils/buttons/Button';
import data from '../data/static';
import './home.css'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'

let globalId = data.length;

function Home() {
    const [todos, setTodos] = useState(data);
    const [task, setTask] = useState('');
    const [currentFilter, setCurrentFilter] = useState(0);

    function addTodo(e) {
        e.preventDefault();
        const newTodo = {
            'id': ++globalId,
            'title': task,
            'completed': false
        }
        setTask('')
        setTodos(prevTodos => [...prevTodos, newTodo])
    }

    function deleteTodo(itemId) {
        setTodos(oldTodos => oldTodos.filter(todo => todo.id !== itemId));
    }

    function markAsCompleted(itemId) {
        setTodos(oldTodos => oldTodos.map(todo => {
            if (todo.id === itemId) {
                todo.completed = true;
            }
            return todo;
        }))
    }

    let leftTodos = todos.filter(todo => !todo.completed).length;

    function clearAllCompleted() {
        setTodos(oldTodos => oldTodos.filter(todo => !todo.completed));
    }

    function filteredTodos() {
        if (currentFilter === 1) {
            // active results
            return todos.filter(todo => !todo.completed)
        } else if (currentFilter === 2) {
            return todos.filter(todo => todo.completed)
        }
        return todos;
    }

    function activeTodos() {
        setCurrentFilter(1);
        filteredTodos();
    }

    function completedTodos() {
        setCurrentFilter(2);
        filteredTodos();
    }
    function allTodos() {
        setCurrentFilter(0);
        filteredTodos();
    }

    const onDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return

        const orderedTodos = todos;
        const [reorderd] = orderedTodos.splice(source.index, 1);
        orderedTodos.splice(destination.index, 0, reorderd);

        return setTodos(orderedTodos);
    }

    return (
        <>
            <Header />
            <main>
                <section className="input-fields">
                    <CheckBox id='checkbox' />
                    <form onSubmit={addTodo}>
                        <input type="text" value={task}
                            onChange={(e) => setTask(e.target.value)}
                            placeholder='Create a new todo...' />
                    </form>
                </section>
                <DragDropContext onDragEnd={onDragEnd}>
                    <section className="all-todos">
                        <Droppable droppableId='todos'>
                            {(provided) => (
                                <div ref={provided.innerRef} {...provided.droppableProps}>
                                    {filteredTodos().map((todo, index) => (
                                        <ToDo index={index} todo={todo} onClickMarkAsCompleted={markAsCompleted} onRemove={deleteTodo} key={todo.id} />
                                    ))}
                                    {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    </section>
                </DragDropContext>
                <section className="options">
                    <p>{leftTodos} Items left</p>
                    <div className="menu menu-desktop">
                        <Button title={'All'} handleFunction={allTodos} active={currentFilter === 0} />
                        <Button title={'Active'} handleFunction={activeTodos} active={currentFilter === 1} />
                        <Button title={'Completed'} handleFunction={completedTodos} active={currentFilter === 2} />
                    </div>
                    <Button title={'Clear all completed'} handleFunction={clearAllCompleted} />
                </section>
                <section className='all-todos'>
                    <div className="menu menu-mobile">
                        <Button title={'All'} handleFunction={allTodos} active={currentFilter === 0} />
                        <Button title={'Active'} handleFunction={activeTodos} active={currentFilter === 1} />
                        <Button title={'Completed'} handleFunction={completedTodos} active={currentFilter === 2} />
                    </div>
                </section>
            </main>
            <footer>
                <p className="announcement">
                    Drag and drop to reorder list
                </p>
            </footer>
        </>
    )
}

export default Home;