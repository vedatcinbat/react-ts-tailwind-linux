import React, { useState } from 'react'

// Todo Interface
interface Todo {
    todoId: number;
    todoContent: string;
    isCompleted: boolean;
}

const Todo: React.FC = () => {
    
    const [todos, setTodos] = useState<Todo[]>([]);
    const [todoInput, setTodoInput] = useState<string>('');
    const [nextId, setNextId] = useState<number>(1);

    const handleAddInput = () => {
        if(todoInput.trim() === '') {
            alert('Please type something');
            return;
        }

        const newTodoItem: Todo = {
            todoId: nextId,
            todoContent: todoInput,
            isCompleted: false
        };

        setTodos((prev) => [...prev, newTodoItem]);
        setNextId(nextId + 1);
        setTodoInput('');
    };

    const handleTodoComplete = (todoId: number) => {
        const updatedTodos = todos.map((todo) => 
            todo.todoId === todoId 
                ? { ...todo, isCompleted: !todo.isCompleted } 
                : todo
        );
        setTodos(updatedTodos);
    };

  return (
    <div className="w-full h-[100vh] bg-sky-300 flex justify-center items-center">
        <div className="todoContainer flex flex-col items-center w-[30rem] min-h-[40rem] bg-sky-800 p-3 rounded-lg">
            <div className="header bg-violet-500 h-full w-full rounded-lg p-4 text-center">
                Todo List
            </div>
            <div className="todoInput flex justify-evenly items-center gap-2 w-full h-full rounded-lg bg-violet-500 mt-2 p-2">
                <input 
                    onChange={(e) => setTodoInput(e.target.value)}
                    value={todoInput}
                    className="bg-gray-400 p-2 w-full h-full rounded-lg" 
                    type="text" 
                    placeholder='Learn React' 
                />
                <button 
                    onClick={handleAddInput}
                    className="ml-2 bg-sky-300 p-3 rounded-lg">Add</button>
            </div>
            <div className="todoItems w-full h-full">
                {todos.map((todo) => (
                    <div key={todo.todoId} className="w-full bg-violet-500 mt-2 p-4 flex justify-between">
                        <div className={`w-full bg-gray-400 p-4 rounded-lg ${todo.isCompleted ? 'line-through text-gray-500' : ''}`}>
                            {todo.todoContent}
                        </div>
                        <input
                            className="w-full"
                            onChange={() => handleTodoComplete(todo.todoId)} 
                            checked={todo.isCompleted}
                            type="checkbox" 
                        />
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Todo;
