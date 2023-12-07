export default function reducer(state = {}, action) {
    switch(action.type) {
        case 'init':
            return action.value;
        case 'add': 
            const dataAdd = [...state.post, {value: action.value}];
            return {
                ...state,
                post: dataAdd
            }
        case 'remove': 
            const dataRemove = [...state.post];
            dataRemove.splice(action.index, 1);
            return { 
                ...state,
                post: dataRemove
            }
        case 'update':
            const dataUpdate = [...state.post];
            dataUpdate[action.index] = {value: action.value};
            return {
                ...state,
                post: dataUpdate
            }
        default: return state;
    }
}