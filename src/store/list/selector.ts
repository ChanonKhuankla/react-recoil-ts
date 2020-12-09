import { selector } from 'recoil';
import { SET_TODOLIST } from '../../store_type/selector_type/list';
import { listDotoState } from './atom';

const todoListSelector = selector<string[]>({
    key: SET_TODOLIST,
    get: ({ get }) => {
        return get(listDotoState);
    },
    set: ({ set }, newValue) => set(listDotoState, newValue),
});

export { todoListSelector };
