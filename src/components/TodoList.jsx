import React, { useState } from "react";
const TodoList = () => {
    const [inputList, setInPutList] = useState("");

    const [item, setItem] = useState([]);

    const ItemEvent = (event) => {
        setInPutList(event.target.value);
    };
    const ListOfItem = () => {
        setItem((oldItem) => {
            return [...oldItem, inputList];
        });
    }
    return (
        <>
            <div className="mainDiv">
                <div className="innerDiv">
                    <br />
                    <h1>ToDoList</h1>
                    <br />
                    <input type="text" name="" placeholder="Add Item" onChange={ItemEvent} />
                    <button onClick={ListOfItem}>+</button>
                    <ol>
                        {/* <li>{itemList}</li> */}
                        {item.map((itemval) => { return <li>{itemval}</li>; })}
                    </ol>
                </div>
            </div>
        </>

    );
}
export default TodoList;