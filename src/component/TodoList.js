import { useState } from "react";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = ({todo, onUpdate, onDelete}) => {
    const [search, setSearch] = useState("");
    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    };
    const getSearchResult = () => {
        return search === ""
        ? todo
        : todo.filter((it) => it.content.toLowerCase().includes(search.toLowerCase()));
    };
    return (
        <div className="TodoList">
            <h4>Todo List ✅</h4>
            <input 
            value={search}
            onChange={onChangeSearch}
            className="searchbar" 
            placeholder="Enter the search text.">    
            </input>
            <div className="list_wrapper">
                {getSearchResult().map((it) => (
                    <TodoItem key={it.id} 
                    {...it} 
                    onUpdate={onUpdate}
                    onDelete={onDelete} /> //리스트의 각 컴포넌트에 key로 할 일 아이템의 id를 전달
                ))}
            </div>
        </div>
    );
};
export default TodoList;