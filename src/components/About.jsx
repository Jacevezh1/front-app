import React from 'react'
import bitcoinmaceta from './../images/bitcoin-maceta.jpg'


const About = () => {
  return (
    <>
       <div class="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl">
          <div>
            <div class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center">
               <p class="mt-2 my-8 text-3xl leading-8  text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-800 font-extrabold tracking-tight text-center sm:text-4xl">Construyendo Web3 Juntos</p>
            </div>
          </div>
          <div class="relative">
            <div class="relative md:bg-white md:p-6 my-4">
              <div class="lg:grid lg:grid-cols-2 lg:gap-6">
                <div class="prose prose-indigo prose-lg text-gray-500 lg:max-w-none">
                  <p>Esta plataforma surge de la necesidad de compartir y expandir conocimiento referente a lo que se conoce como Web3 o a lo que otros conocen como una nueva fase del internet, que sin duda alguna llega para quedarse.</p>
                  <br />
                  <p>El ecosistema que envuelve a todo lo que concierne a Web3 crece de forma exponencial dia a dia, y es por ello que toda persona que busque adentrarse en este maravilloso ecosistema, requiere consumir informacion confiable de forma constante para mantenerse al tanto de las grandes innovaciones que este ecosistema nos ofrece.</p>
                  <br />
                  <p>Web3 se conforma y aloja un entorno intangible que no un tiene nucleo de poder centralizado como en los sistemas tradicionales, es por ello que algunos de los algunos pilares de este ecosistema son la colaboracion entre pares, la igualdad unos frente a otros, la libertad, y es por esto que el acceso a informacion confiable se vuelve una necesidad vital para que el ecosistema crezca de forma segura.</p>
                </div>
                <div class="mt-6 prose prose-indigo prose-lg text-gray-500 lg:mt-0">
                  <img className='rounded rounded-xl' src={bitcoinmaceta} alt="" />
                </div>
               
              </div>
            </div>
          </div>
        </div>
      </div>


      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="lg:grid lg:grid-cols-2 lg:gap-8">
            <h2 class="max-w-md mx-auto text-3xl font-extrabold text-center lg:max-w-xl lg:text-left text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-green-600">Referentes en educacion dentro del ecosistema cripto el LATAM</h2>
            <div class="flow-root self-center mt-8 lg:mt-0">
              <div class="-mt-4 -ml-8 flex flex-wrap justify-between lg:-ml-4">
                <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                  <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-indigo-900.svg" alt="Workcation"/>
                </div>
                <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                  <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-indigo-900.svg" alt="Tuple"/>
                </div>
                <div class="mt-4 ml-8 flex flex-grow flex-shrink-0 justify-center lg:flex-grow-0 lg:ml-4">
                  <img class="h-12" src="https://tailwindui.com/img/logos/level-logo-indigo-900.svg" alt="Level"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>



    </>
  )
}

export default About