export default (state={},action) => {

    switch (action.type) {
        case 'INPUT_CHANGE':
            return {...state,input:action.payload}
        default:
            return state;    
    }

}


