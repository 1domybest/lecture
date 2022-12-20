const login = (data) => {
    return { // action
        type: 'LOG_IN',
        data
    }
}

const logOut = () => {
    return { // action
        type: 'LOG_OUT'
    }
}


module.exports = {login, logOut}
