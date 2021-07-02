import React, {ChangeEvent, KeyboardEvent, useState} from 'react'

type PropsType = {

    addItem: (title: string) => void
}

export const AddItemForm: React.FC<PropsType> = (props) => {
    let [title, setTitle] = useState("")
    let [errors, setErrors] = useState<null | string>(null)


    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
        setErrors(null)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addItem();
        }
    }


    const addItem = () => {
        const trimTitle = title.trim()
        if (trimTitle) {
            props.addItem(trimTitle)

        } else {
            setErrors("Error")
        }
        setTitle(trimTitle)
    }
    return (
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={errors ? 'error' : ''}
            />
            <button onClick={addItem}>+</button>
            {errors && <div>{errors}</div>}
        </div>



)


}