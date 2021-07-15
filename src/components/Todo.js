import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index';
import "./todo.css";
const Todo = () => {

  const [inputData, setInputData] = useState("");
  const list = useSelector((state) => state.reducer.list)
  console.log("list get",list);
  const dispatch = useDispatch();
    return( 
        <>
          <div className="main-div">
            <div className="child-div">
                <figure>
                <figcaption>Add your list here! ✌</figcaption>
                </figure>

                <div className="addItems">
                <input type="text" placeholder="Add items..." value={inputData} onChange={(event) => setInputData(event.target.value)}></input>
                <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), setInputData(""))}></i>
                </div>
                <div className="showItems">
                  {
                    list.map(lm => {
                      return (
                        <div className="eachItem" key={lm.id}>
                          <h3>{lm.data}</h3>
                          <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(deleteTodo(lm))}></i>
                        </div>
                        )
                    })
                  }
                </div>
                <div className="showItems">
                  <button className="btn effect04" data-sm-link-text="Remove All" onClick={() => dispatch(removeTodo())}><span>Check List</span></button>
                </div>
            </div>
          </div>  
        </> 
    )
}
 
export default Todo;