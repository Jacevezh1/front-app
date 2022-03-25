import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './../../context/User/UserContext'
import notefuture from './../../images/notefuture.jpg';


export default function Register() {

    const ctx = useContext(UserContext)

	const {
		registerUser
	} = ctx 


	const [newUser, setNewUser] = useState({
		name: "",
		email: "",
		password: "",
		confirmpassword: ""
	})

	const handleChange = (e) => {
		e.preventDefault()

		setNewUser({
			...newUser,
			[e.target.name]: e.target.value
		})

	}

	const handleSubmit = (e) => {
		
		e.preventDefault()

		registerUser(newUser)  

	}
    
    
    
    return (


      <div class="min-h-full flex">
        <div class="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="mx-auto w-full max-w-sm lg:w-96">
            <div>
                
                <h2 class="mt-6 text-3xl font-extrabold text-gray-900 flex items-center justify-center text-transparent text-center bg-clip-text bg-gradient-to-br from-blue-500 to-green-600">
                    Crea una nueva cuenta
                </h2>
            </div>

            <div class="mt-8">
                <div>
                <div>
                    <p class="text-sm font-medium text-gray-700 flex items-center justify-center">
                    <Link to="/login">
                      <button type="button" class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-cyan-500 shadow-lg shadow-cyan-500/50">
                        O inicia sesión
                      </button>
                    </Link>
                    </p>
                </div>

                <div class="mt-6 relative">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                    <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center text-sm">
                    </div>
                </div>
                </div>

                <div class="mt-6">
                <form onSubmit={(event) => { handleSubmit(event) }} class="space-y-6">
                    <div>
                    <label for="name" class="block text-sm font-medium text-gray-700">
                        Nombre
                    </label>
                    <div class="mt-1">
                        <input onChange={(event) => { handleChange(event)}} id="name" name="name" type="text" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                    </div>

                    <div>
                    <label for="email" class="block text-sm font-medium text-gray-700">
                        Correo electrónico
                    </label>
                    <div class="mt-1">
                        <input onChange={(event) => { handleChange(event)}} id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                    </div>

                    <div class="space-y-1">
                    <label for="password" class="block text-sm font-medium text-gray-700">
                        Contraseña
                    </label>
                    <div class="mt-1">
                        <input onChange={(event) => { handleChange(event)}} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                    </div>

                    <div class="space-y-1">
                    <label for="password" class="block text-sm font-medium text-gray-700">
                        Confirmar contraseña
                    </label>
                    <div class="mt-1">
                        <input onChange={(event) => { handleChange(event)}} id="confirmarpassword" name="confirmpassword" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                    </div>
                    </div>

                    <div class="flex items-center justify-between">
                        <div class="text-sm">
                            <Link to="#" class="font-medium text-red-600 hover:text-green-600">
                            Olvidaste tu contraseña?
                            </Link>
                        </div>
                    </div>

                    <div>
                    <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                        Registrate
                    </button>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </div>
        <div class="hidden lg:block relative w-0 flex-1">
            <img class="absolute inset-0 h-full w-full object-cover" src={notefuture} alt=""/>
        </div>
     </div>

    )
}
