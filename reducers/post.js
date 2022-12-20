const initialState = [];

const postReducer = (preVState = initialState, action) => {
    const {type, data} = action;
    switch (type) {
        case 'ADD_POST' :
            return [...preVState, action.data];
        default :
            return preVState;
    }
};

module.exports = postReducer
