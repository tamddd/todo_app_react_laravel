import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'

import TodoList from './TodoList'
import AddTodo from './AddTodo'

function App() {

  return (
    <Router>
      <div style={{ padding: 20 }}>
        <h1>Todo App</h1>
        <nav>
          <Link to="/" style={{ marginRight: 10 }}>Todo一覧</Link>
          <Link to="/add">Todo追加</Link>
        </nav>
        <hr />
        <Routes>
          <Route path="/" element={<TodoList />} />
          <Route path="/add" element={<AddTodo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App
