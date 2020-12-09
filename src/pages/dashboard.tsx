import React, { CSSProperties, useState } from 'react';
import List from '../components/list';
import { useSetRecoilState } from 'recoil';
import { todoListSelector } from '../store/list/selector';
const Dashboard = (): JSX.Element => {
    const [text, setText] = useState<string>('');
    const setTodoListSelector = useSetRecoilState(todoListSelector);
    const cssStlye: CSSProperties = {
        marginLeft: '5px',
    };

    const addTodoList = (): void => {
        console.log('click ja');
        console.log('text', text);
        setTodoListSelector((todoList) => [...todoList, text]);
    };

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value);
        return;
    };
    return (
        <>
            <List />
            <input type="text" value={text} style={cssStlye} onChange={onChangeInput} />
            <button onClick={(): void => addTodoList()}>submit</button>
        </>
    );
};

export default Dashboard;
