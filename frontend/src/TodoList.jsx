import { useEffect, useState } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:8080/api/todos';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const fetchTodos = async () => {
        const res = await axios.get(API_URL);
        setTodos(res.data);
    };

    const deleteTodo = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        setTodos(todos.filter(todo => todo.id !== id));
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div className="container">
            <h2>Todo一覧</h2>
            <ul>
                {todos.map(todo => (
                    <li key={todo.id}>
                        {todo.title}
                        <button onClick={() => deleteTodo(todo.id)} style={{ marginLeft: 10, backgroundColor: "red" }}>
                            削除
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
