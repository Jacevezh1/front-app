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

        console.log(res);

        const token = res.data.data;

        dispacth({
            type: "REGISTRO_EXITOSO",
            payload: token
        })
    }


    const loginUser = async (form) => {

        const res = await axiosClient.post("users/login", form);

        console.log(res);

        const token = res.data.data;

        dispacth({
            type: "LOGIN_EXITOSO",
            payload: token
        })
    }


    const verifyingToken = async () => {

        const token = localStorage.getItem("token")

        if(token){
            axiosClient.defaults.headers.common["x-auth-token"] = token
        } else {
            delete axiosClient.defaults.headers.common["x-auth-token"]
        }

        try {
            
            const res = await axiosClient.get("users/verifytoken")

            const userData = res.data.data;

            dispacth({
                type: "GET_DATA_USER",
                payload: userData
            })


        } catch (error) {

            console.log(error);
            
        }
    }

    const logoutUser = async () => {

        dispacth({
            type: "LOGOUT_USUARIO"
        })

    }






    // 4. RETURN 
    return (
        <UserContext.Provider 
        value={{
            currentUser: globalState.currentUser,
            authStatus: globalState.authStatus,
            registerUser,
            loginUser,
            verifyingToken,
            logoutUser
        }}
        >
            {props.children}
        </UserContext.Provider>
    )




}


export default UserState;