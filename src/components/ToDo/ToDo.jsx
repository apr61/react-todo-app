import './todo.css'
import { ReactComponent as Cross } from '../../assets/icons/icon-cross.svg';

function ToDo({ todo, onClickMarkAsCompleted, onRemove}) {
    console.log(todo);
    return (
        <div className="todo" key={todo.id}>
            <div className="round">
                <input type="checkbox" defaultChecked={todo.completed} disabled={todo.completed} onClick={() => onClickMarkAsCompleted(todo.id)} id={todo.id} />
                <label htmlFor={todo.id}></label>
            </div>

            <p className={todo.completed ? 'completed-item' : 'todo-name'}>{todo.title}</p>
            <div className="delete" onRemove={onRemove}>
                <Cross />
            </div>
        </div>
    )

}

export default ToDo;