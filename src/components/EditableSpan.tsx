import React, {ChangeEvent, KeyboardEvent, useState} from 'react';

type PropsType = {
    title: string
    changeTitle:(title: string)=>void

}

const EditableSpan: React.FC<PropsType> = (props) => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>(props.title)
    let [errors, setErrors] = useState<null | string>(null)
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            onBlurHandler();
        }
    }
    const onBlurHandler=()=>{
        setEditMode(false)
        upDate()
    }
    const upDate = () => {
        const trimTitle = title.trim()
        if (trimTitle) {
            setTitle(trimTitle)
            props.changeTitle(trimTitle)

        } else {
            setErrors("Error")
        }
        setTitle(trimTitle)
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setErrors(null)
    }
    return (<span>{
            editMode
            ? <input
            value={title}
            onBlur={onBlurHandler}
            autoFocus onChange={onChangeHandler}
            className={errors ? 'error' : ''}
            onKeyPress={onKeyPressHandler}
        />
            : <span onDoubleClick={() => setEditMode(true)}>{props.title}</span>
        }
            {errors && <div>{errors}</div>}
        </span>

    );
};

export default EditableSpan;