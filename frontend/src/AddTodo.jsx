import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// APIのURL
const API_URL = 'http://localhost:8080/api/todos';

function AddTodo() {
    const [title, setTitle] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const addTodo = async () => {
        if (!title.trim()) {
            setError('タイトルを入力してください');
            return;
        }

        try {
            // APIにPOSTリクエストを送り、新しいTodoを追加
            await axios.post(API_URL, { title });
            // 追加成功したらトップページ（Todo一覧）に遷移
            navigate('/');
        } catch (err) {
            console.error(err);
            setError('追加に失敗しました');
        }
    };

    return (
        <div className="container">
            <h2>Todo追加</h2>
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="タイトルを入力"
            />
            <button onClick={addTodo}>追加</button>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
}

export default AddTodo;
