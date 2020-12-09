import { atom } from 'recoil';
import * as list from '../../store_type/atom_type/list';

const listDotoState = atom({
    key: list.GET_TODOLIST,
    default: ['todo1', 'todo2'],
});

export { listDotoState };
