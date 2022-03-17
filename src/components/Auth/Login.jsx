import React, {useState, useContext} from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../../context/User/UserContext'
import logo from './../../images/logo.png'

export default function Login() {


  const ctx = useContext(UserContext)

  const { loginUser } = ctx

    // 1. Estado Local
  const [logUser, setLogUser] = useState({
    email: "",
    password: ""
  })


  const handleChange = (e) => {
		e.preventDefault()

		setLogUser({
			...logUser,
			[e.target.name]: e.target.value
		})

	}


	const handleSubmit = (e) => {
		
		e.preventDefault()

		loginUser(logUser)

	}


    return (
      
        <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-md">
            <img class="mx-auto h-12 w-auto" src={logo} alt="Workflow"/>
            <h2 class="mt-6 text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600">
            Sign in to your account
            </h2>
        </div>

        <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
            <form onSubmit={(e) => { handleSubmit(e) }} class="space-y-6" action="#" method="POST">
                <div>
                <label for="email" class="block text-sm font-medium text-gray-700">
                    Email address
                </label>
                <div class="mt-1">
                    <input onChange={(evt) => { handleChange(evt) }} id="email" name="email" type="email" autocomplete="email" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                </div>

                <div>
                <label for="password" class="block text-sm font-medium text-gray-700">
                    Password
                </label>
                <div class="mt-1">
                    <input onChange={(evt) => { handleChange(evt) }} id="password" name="password" type="password" autocomplete="current-password" required class="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"/>
                </div>
                </div>

                <div class="flex items-center justify-between">
                <div class="flex items-center">
                    <input id="remember-me" name="remember-me" type="checkbox" class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"/>
                    <label for="remember-me" class="ml-2 block text-sm text-gray-900">
                    Remember me
                    </label>
                </div>

                <div class="text-sm">
                    <Link to="#" class="font-medium text-green-600 hover:text-sky-600">
                    Forgot your password?
                    </Link>
                </div>
                </div>

                <div>
                <button type="submit" class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm shadow-sm text-sm font-medium text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500">
                    Sign in
                </button>
                </div>
            </form>
            </div>
        </div>
        </div>

    )
}