import userapi from '../apis/userapi'

export function fetchUsers() {
    return async function(dispatch) {
        const response = await userapi.get("/users")
        
        console.log("HELLO" + response);

        dispatch({
            type: "FETCH_USERS",
            payload: ["ETT", "TVÅ", "TRE"]
        })
    }
}