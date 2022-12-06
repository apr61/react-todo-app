import { useState, useEffect } from 'react'
import data from '../data/static';
import ToDo from '../components/ToDo/ToDo';
import Header from '../components/header/Header';
import CheckBox from '../components/checkbox/CheckBox';
import './home.css'

let globalId = data.length;

function Home() {
    const [todos, setTodos] = useState(data);
    const [task, setTask] = useState('');
    const [completedItems, setCompletedItems] = useState(0);

    function addTodo(e) {
        e.preventDefault();
        const newTodo = {
            'id': globalId++,
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

    useEffect(() => {
        setCompletedItems(todos.filter(todo => todo.completed).length)
    }, [todos])

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
                <section className="all-todos">
                    {todos.map(todo => {
                        return <ToDo todo={todo} onClickMarkAsCompleted={markAsCompleted} onRemove={deleteTodo} />
                    })}

                    <div className="options">
                        <p>{todos.length - completedItems} Items left</p>
                        <div className="menu menu-desktop">
                            <p >All</p>
                            <p >Active</p>
                            <p >Completed</p>
                        </div>
                        <button>Clear Completed</button>
                    </div>
                </section>
                <section className='all-todos'>
                    <div className="menu menu-mobile">
                        <p>All</p>
                        <p>Active</p>
                        <p>Completed</p>
                    </div>
                </section>
                <section>
                    <p className="announcement">
                        Drag and drop to reorder list
                    </p>
                </section>
            </main>
        </>
    )
}

export default Home;