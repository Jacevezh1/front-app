import React from 'react'

const Contact = () => {
  return (
    <>  
        <div class="bg-warm-gray-50">
          <div class="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div class="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <h2 class="text-3xl font-extrabold text-warm-gray-900">Frequently asked questions</h2>
                <p class="mt-4 text-lg text-warm-gray-500">Can’t find the answer you’re looking for? Reach out to our <a href="#" class="font-medium text-cyan-700 hover:text-cyan-600">customer support</a> team.</p>
              </div>
              <div class="mt-12 lg:mt-0 lg:col-span-2">
                <dl class="space-y-12">
                  <div>
                    <dt class="text-lg font-medium text-warm-gray-900">How do you make holy water?</dt>
                    <dd class="mt-2 text-base text-warm-gray-500">You boil the hell out of it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                  </div>

                  <div>
                    <dt class="text-lg font-medium text-warm-gray-900">What&#039;s the best thing about Switzerland?</dt>
                    <dd class="mt-2 text-base text-warm-gray-500">I don&#039;t know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                  </div>

                  <div>
                    <dt class="text-lg font-medium text-warm-gray-900">What do you call someone with no body and no nose?</dt>
                    <dd class="mt-2 text-base text-warm-gray-500">Nobody knows. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                  </div>

                  <div>
                    <dt class="text-lg font-medium text-warm-gray-900">Why do you never see elephants hiding in trees?</dt>
                    <dd class="mt-2 text-base text-warm-gray-500">Because they&#039;re so good at it. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat.</dd>
                  </div>
                </dl>
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

export default Contact