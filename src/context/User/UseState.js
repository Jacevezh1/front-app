import { useReducer } from "react";
import UserReducer from './UserReducer';
import UserContext from './UserContext';
import axiosClient from './../../config/axios'


const UserState = (props) => {


    // 1. INITIAL STATE
    const initialState = {
        currentUser: {
            name: "",
            nickname: "",
            email: "",
            password: "",
            admin: ""
        },
        authStatus: false
    }


    // 2. CONFIG OF REDUCER
    const [globalState, dispacth] = useReducer(UserReducer, initialState)


    // 3. FUNCTIONS
    const registerUser = async (form) => {

        const res = await axiosClient.post("users/create", form)

        console.log(form);

        const token = res.data.data;

        dispacth({
            type: "REGISTRO_EXITOSO",
            payload: token
        })
    }



    // 4. RETURN 
    return (
        <UserContext.Provider 
        value={{
            currentUser: globalState.currentUser,
            authStatus: globalState.authStatus,
            registerUser
        }}
        >
            {props.children}
        </UserContext.Provider>
    )




}


export default UserState;