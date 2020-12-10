import React, { useState } from 'react'
import List from '../components/list'
import { useSetRecoilState } from 'recoil'
import { todoListSelector } from '../store/list/selector'
const Dashboard = (): JSX.Element => {
    const [text, setText] = useState<string>('')
    const setTodoListSelector = useSetRecoilState(todoListSelector)

    const addTodoList = (): void => {
        setTodoListSelector((todoList) => [...todoList, text])
    }

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value)
        return
    }

    console.log('dashboard')

    return (
        <>
            <List />
            <input
                type="text"
                value={text}
                onChange={onChangeInput}
                className=" mt-1 mr-5 border-gray-300 focus:ring-indigo-500 focus:border-indigo-500 shadow-sm sm:text-sm rounded-md"
            ></input>
            <button onClick={(): void => addTodoList()}>submit</button>
        </>
    )
}

export default Dashboard
