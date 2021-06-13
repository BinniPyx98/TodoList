import React, {ChangeEvent,KeyboardEvent, useState} from "react";

type PropsTypeInput={
    addTask:(title:string)=>void
}






export const Input=(props:PropsTypeInput)=>{
    let [title,setTitle]=useState('')

    const onKeyPressHandler=(event:KeyboardEvent<HTMLInputElement>)=>{
        if (event.key==='Enter'){
            onClickHandler()
        }
    }

    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{

        setTitle(event.currentTarget.value)
    }

    const onClickHandler=()=>{
        props.addTask(title)
        setTitle('')
    }


    return(
        <div>
        <input onChange={onChangeHandler} value={title} onKeyPress={onKeyPressHandler}></input>
        <button onClick={onClickHandler}>+</button>
        </div>
    )
}