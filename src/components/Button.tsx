import React from "react"

type PropsTypeButton={
    callBack:()=>void
    buttonName:string
}

export const Button=(props:PropsTypeButton)=>{

    const onClickHendler=()=>{
        props.callBack()
    }

    return(
        <button onClick={onClickHendler}>{props.buttonName}</button>
    )
}