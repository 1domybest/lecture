const initialState = {
    isLoggingIn: true,
    data: null
};

const userReducer = (preVState = initialState, action) => {
    const {type, data} = action;
    switch (type) {
        case 'LOG_IN' :
            return {
                ...preVState,
                data: action.data,
            }
        case 'LOG_OUT' :
            return {
                ...preVState,
                data: null,
            }
        default :
            return preVState;
    }
};

module.exports = userReducer
