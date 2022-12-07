import './todo.css'
import Cross from '../../assets/icons/icon-cross.svg';
import CheckBox from '../checkbox/CheckBox';
import { Draggable } from 'react-beautiful-dnd';

function ToDo({ index, todo, onClickMarkAsCompleted, onRemove }) {
    return (
        <Draggable draggableId={todo.id.toString()} index={index}>
            {(provided) => (
                <div className="todo" key={todo.id} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                    <CheckBox key={todo.id} checked={todo.completed} disabled={todo.completed} onCheckedMarkAsCompleted={() => onClickMarkAsCompleted(todo.id)} id={todo.id} />

                    <p className={todo.completed ? 'completed-item' : 'todo-name'}>{todo.title}</p>
                    <div className="delete" onClick={() => onRemove(todo.id)}>
                        <img src={Cross} alt="Delete Button" />
                    </div>
                </div>
            )}
        </Draggable>
    )

}

export default ToDo;