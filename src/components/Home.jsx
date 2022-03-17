import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';





const Home = () => {
  return (


    <>  


        <div class="bg-white">
          <div class="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
            <h2 class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              <span class="block text-5xl font-extrabold">Welcome To The <p className='text-5xl my-2 font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600'>Coindapp Blog</p></span>
              
            </h2>
            <div class="mt-8 flex justify-center">
              <div class="inline-flex rounded-md shadow">
                <Link to={'/login'} class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"> Get started </Link>
              </div>
              <div class="ml-3 inline-flex">
                <Link to={'/posts'} class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-400 to-green-500 hover:from-pink-500 hover:to-yellow-500"> Learn more </Link>
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
                  <img class="absolute inset-0 h-full w-full object-cover" src="https://images.unsplash.com/photo-1521510895919-46920266ddb3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&fp-x=0.5&fp-y=0.6&fp-z=3&width=1440&height=1440&sat=-100" alt=""/>
                  <div class="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-500 mix-blend-multiply"></div>
                  <div class="absolute inset-0 bg-gradient-to-t from-blue-600 via-green-600 opacity-20"></div>
                  <div class="relative px-8">
                    <div>
                      <img class="h-12" src="https://tailwindui.com/img/logos/workcation.svg?color=white" alt="Workcation"/>
                    </div>
                    <blockquote class="mt-8">
                      <div class="relative text-lg font-medium text-white md:flex-grow">
                        <svg class="absolute top-0 left-0 transform -translate-x-3 -translate-y-2 h-8 w-8 text-cyan-400" fill="currentColor" viewBox="0 0 32 32" aria-hidden="true">
                          <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                        </svg>
                        <p class="relative">Tincidunt integer commodo, cursus etiam aliquam neque, et. Consectetur pretium in volutpat, diam. Montes, magna cursus nulla feugiat dignissim id lobortis amet.</p>
                      </div>

                      <footer class="mt-4">
                        <p class="text-base font-semibold text-cyan-400">Sarah Williams, CEO at Workcation</p>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>

            <div class="relative mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-0">
              
              <div class="pt-12 sm:pt-16 lg:pt-20">
                <h2 class="text-3xl text-gray-900 font-extrabold tracking-tight sm:text-4xl">On a mission to empower teams</h2>
                <div class="mt-6 text-gray-500 space-y-6">
                  <p class="text-lg">Sagittis scelerisque nulla cursus in enim consectetur quam. Dictum urna sed consectetur neque tristique pellentesque. Blandit amet, sed aenean erat arcu morbi. Cursus faucibus nunc nisl netus morbi vel porttitor vitae ut. Amet vitae fames senectus vitae.</p>
                  <p class="text-base leading-7">Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna. Sollicitudin tristique eros erat odio sed vitae, consequat turpis elementum. Lorem nibh vel, eget pretium arcu vitae. Eros eu viverra donec ut volutpat donec laoreet quam urna.</p>
                  <p class="text-base leading-7">Rhoncus nisl, libero egestas diam fermentum dui. At quis tincidunt vel ultricies. Vulputate aliquet velit faucibus semper. Pellentesque in venenatis vestibulum consectetur nibh id. In id ut tempus egestas. Enim sit aliquam nec, a. Morbi enim fermentum lacus in. Viverra.</p>
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

                  <div class="border-t-2 border-gray-100 pt-6">
                    <dt class="text-base font-medium text-gray-500">Beta Users</dt>
                    <dd class="text-3xl font-extrabold tracking-tight text-gray-900">521</dd>
                  </div>

                  <div class="border-t-2 border-gray-100 pt-6">
                    <dt class="text-base font-medium text-gray-500">Raised</dt>
                    <dd class="text-3xl font-extrabold tracking-tight text-gray-900">$25M</dd>
                  </div>
                </dl>
                <div class="mt-10">
                  <a href="#" class="text-base font-medium text-sky-700"> Learn more about how we're changing the world <span aria-hidden="true">&rarr;</span> </a>
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
                <h2 class="text-3xl font-extrabold tracking-tight text-white">Sign up for our newsletter</h2>
                <p class="mt-4 max-w-3xl text-lg text-cyan-100">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem cupidatat commodo. Elit sunt amet fugiat.</p>
              </div>
              <div class="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
                <form class="sm:flex">
                  <label for="email-address" class="sr-only">Email address</label>
                  <input id="email-address" name="email-address" type="email" autocomplete="email" required class="w-full border-white px-5 py-3 placeholder-warm-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-white rounded-md" placeholder="Enter your email"/>
                  <button type="submit" class="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-green-400 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-cyan-700 focus:ring-green-400 sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0">Notify me</button>
                </form>
                <p class="mt-3 text-sm text-cyan-100">
                  We care about the protection of your data. Read our
                  <a href="#" class="text-white font-medium underline"> Privacy Policy. </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      
     
      
    </>
  )
}

export default Home;