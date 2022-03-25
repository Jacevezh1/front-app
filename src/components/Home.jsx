import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';

import btcblock from './../images/btcblock.jpg'
import logo from './../images/logo.png' 


const Home = () => {
  return (


    <>  


        <div class="bg-white">
          <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span class="block text-5xl font-extrabold">Welcome To The <p className='text-5xl my-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600'>Coindaap Blog</p></span>
              
            </h2>
            <div class="mt-8 flex justify-center">
              <div class="inline-flex rounded-md shadow">
                <Link to={'/login'} class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"> Comienza ya </Link>
              </div>
              <div class="ml-3 inline-flex">
                <Link to={'/posts'} class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-400 to-green-500 hover:from-pink-500 hover:to-yellow-500"> Aprende más </Link>
              </div>
            </div>
          </div>
        </div>

        <div class="relative bg-white py-16 sm:py-24">
          <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:gap-24 lg:items-start">
            <div class="relative sm:py-16 lg:py-0">
              <div aria-hidden="true" class="hidden sm:block lg:absolute lg:inset-y-0 lg:right-0 lg:w-screen">
                <div class="absolute inset-y-0 right-1/2 w-full bg-gradient-to-r from-blue-400 to-green-500 rounded-r-3xl lg:right-72"></div>
                <svg class="absolute top-8 left-1/2 -ml-3 lg:-right-8 lg:left-auto lg:top-12" width="404" height="392" fill="none" viewBox="0 0 404 392">
                  <defs>
                    <pattern id="02f20b47-fd69-4224-a62a-4c9de5c763f7" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <rect x="0" y="0" width="4" height="4" class="text-gray-200" fill="currentColor" />
                    </pattern>
                  </defs>
                  <rect width="404" height="392" fill="url(#02f20b47-fd69-4224-a62a-4c9de5c763f7)" />
                </svg>
              </div>
              <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0 lg:max-w-none lg:py-20">
                
                <div class="relative pt-64 pb-10 rounded-2xl shadow-xl overflow-hidden">
                  <img class="absolute inset-0 h-full w-full object-cover" src={btcblock} alt=""/>
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 mix-blend-multiply"></div>
                  <div class="absolute inset-0 bg-gradient-to-t from-blue-600 via-green-600 opacity-20"></div>
                  <div class="relative px-8">
                    <div>
                      <img class="h-12" src={logo} alt="Workcation"/>
                    </div>
                    <blockquote class="mt-8">
                      <div class="relative text-lg font-medium text-white md:flex-grow">
                        <p class="relative"> "Creo que Internet será una de las principales fuerzas para reducir el papel del gobierno. Lo único que falta, pero que pronto se desarrollará es un efectivo electrónico confiable”.</p>
                      </div>

                      <footer class="mt-4">
                        <p class="text-base font-semibold text-white">Milton Friedman</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              
              <div class="pt-12 sm:pt-16 lg:pt-20">
                <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">Entiende de una vez por todas la tecnología que está revolucionando al mundo entero.</h2>
                <div class="mt-6 text-gray-500 space-y-6">
                <p class="text-lg">Nuestra misión es educar al mundo sobre el potencial que ofrece la tecnología blockchain y criptomonedas. En este sitio web, podrás encontrar más de 280 artículos que abarcan temas desde seguridad informática hasta economía.</p>
                <p class="text-lg">Tu principal guía con todo lo relacionado con las criptos. Sin importar que seas un principiante que intenta comprender cómo funciona la minería o un experto que busca desarrollar una estrategia de trading, todo lo tenemos cubierto.</p>
                </div>
              </div>

             
              <div class="mt-10">
                <dl class="grid grid-cols-2 gap-x-4 gap-y-8">
                  <div class="border-t-2 border-gray-100 pt-6">
                    <dt class="text-base font-medium text-gray-500">Founded</dt>
                    <dd class="text-3xl font-extrabold tracking-tight text-gray-900">2021</dd>
                  </div>

                  <div class="border-t-2 border-gray-100 pt-6">
                    <dt class="text-base font-medium text-gray-500">Employees</dt>
                    <dd class="text-3xl font-extrabold tracking-tight text-gray-900">5</dd>
                  </div>

                  
                </dl>
                <div class="mt-10">
                  <Link to='/about'>
                     <p href="#" class="text-base font-medium text-sky-700"> Aprende más sobre como estamos cambiando el mundo  <span aria-hidden="true">&rarr;</span> </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="relative">
          <div class="absolute left-0 right-0 h-1/2 bg-warm-gray-50" aria-hidden="true"></div>
          <div class="relative max-w-md mx-auto px-4 sm:max-w-3xl sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="py-10 px-6 bg-gradient-to-l from-sky-800 to-cyan-700 rounded-3xl sm:py-16 sm:px-12 lg:py-20 lg:px-20 lg:flex lg:items-center">
              <div class="lg:w-0 lg:flex-1">
                <h2 class="text-3xl font-extrabold tracking-tight text-white">Suscribete a nuestro newsletter</h2>
                <p class="mt-4 max-w-3xl text-lg text-cyan-100">Obtén lo más reciente del mundo cripto en tu correo electrónico cada semana.</p>
              </div>
              <div class="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form class="sm:flex">
                  <label for="email-address" class="sr-only">Email address</label>
                  <input id="email-address" name="email-address" type="email" autocomplete="email" required class="w-full border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white rounded-md" placeholder="Introduce correo electrónico"/>
                  <button type="submit" class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-green-400 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">Notificarme</button>
                </form>
                <p class="mt-3 text-sm text-cyan-100">
                  He leído y estoy de acuerdo con los Términos de servicio. 
                  <a href="#" class="text-white font-medium underline"> Politica de privacidad </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      
     
      
    </>
  )
}

export default Home;