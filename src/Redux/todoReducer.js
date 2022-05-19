const initialState = {
    data : [
        {
        id: 341564354002,
        name: "Complete the todo list application",
        status:false,
        deadline:"2022-03-21, 11:59 "
        }
    ]
}


export const todoReducer = (state = initialState, action) => {
    switch(action.type)
    {
        case "ADD" : 
                    return {
                        ...state,
                        data : [...state.data,action.payload]
                    }

        default: return state
    }
}