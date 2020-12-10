import React from 'react'
import { useRecoilState } from 'recoil'
import { todoListSelector } from '../store/list/selector'
const List = (): JSX.Element => {
    const [lists, setlistTodo] = useRecoilState(todoListSelector)

    const clickDeleteBtn = (i: number) => (e: React.MouseEvent<HTMLButtonElement>): void => {
        const list: string[] = [...lists]
        list.splice(i, 1)
        setlistTodo(list)
        return
    }

    return (
        <>
            <ul>
                {lists.map((f, i) => (
                    <>
                        <li key={i}>
                            {f}
                            <button className="ml-2 text-gray-400" onClick={clickDeleteBtn(i)}>
                                x
                            </button>
                        </li>
                    </>
                ))}
            </ul>
        </>
    )
}

export default List
