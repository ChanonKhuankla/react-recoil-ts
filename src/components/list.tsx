import React from 'react';
import { useRecoilValue } from 'recoil';
import { todoListSelector } from '../store/list/selector';
const List = (): JSX.Element => {
    const listTodo = useRecoilValue(todoListSelector);
    return (
        <>
            <ul>
                {listTodo.map((f, i) => (
                    <>
                        <li key={i}>
                            {f} <button>delete</button>
                        </li>
                    </>
                ))}
            </ul>
        </>
    );
};

export default List;
