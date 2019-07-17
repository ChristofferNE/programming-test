import userapi from '../apis/userapi'

export function fetchUsers() {
    return async function(dispatch) {
        const response = await userapi.get("/users")

        dispatch({
            type: "FETCH_USERS",
            payload: response.data
        })
    }
}

export function addUser(userObject) {
    return async function(dispatch) {
        const response = await userapi.post("/users", userObject)

        dispatch({
            type: "ADD_USER",
            payload: response.data
        })
    }
}