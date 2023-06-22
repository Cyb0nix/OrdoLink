<script setup>
 import HeaderHome from '../components/HeaderHome.vue'; 
 import FooterHome from '../components/FooterHome.vue';
</script>

<template>
  <main class="h-full bg-white">
    <HeaderHome />

    <!-- ##################### section 1 ##################### -->
    <section>
      <div
        class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
      >
        <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div
            class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
          >
            <img
              alt="Party"
              src="https://s2.qwant.com/thumbr/474x315/c/0/04a89980d4155554aa1d572df061f347e7c06495921fed19256629e1d16730/th.jpg?u=https%3A%2F%2Ftse.mm.bing.net%2Fth%3Fid%3DOIP.-RzD5cIKco_CxqL0hlA-dAHaE7%26pid%3DApi&q=0&b=1&p=0&a=0"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div class="lg:py-24">
            <h2 class="text-3xl font-bold sm:text-4xl text-sky-500">La fin des ordonnances papier</h2>

            <p class="mt-4 text-gray-600">
              Votre solution en ligne pour la création rapide et facile d'ordonnances médicales. 
              Simplifiez votre pratique médicale en générant des ordonnances sécurisées en quelques clics. 
              Que vous soyez médecin généraliste, spécialiste ou pharmacien, notre plateforme vous permet de créer des ordonnances personnalisées, de les envoyer électroniquement aux pharmacies et de les partager avec vos patients en toute simplicité.
            </p>
          </div>
        </div>
      </div>
    </section>
    

    <!-- ##################### section 2 ##################### -->
    
    <section class="bg-gray-900 text-white flex flex-col items-center justify-center" id="AboutUs">
      <div class="max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div class="max-w-xl">
          <h2 class="text-3xl font-bold sm:text-4xl">What makes us special</h2>

          <p class="mt-4 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
            dolores iure fugit totam iste obcaecati. Consequatur ipsa quod ipsum
            sequi culpa delectus, cumque id tenetur quibusdam, quos fuga minima.
          </p>
        </div>

        <div
          class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
        >
          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

              <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                cumque tempore est ab possimus quisquam reiciendis tempora animi!
                Quaerat, saepe?
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

              <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                cumque tempore est ab possimus quisquam reiciendis tempora animi!
                Quaerat, saepe?
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

              <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                cumque tempore est ab possimus quisquam reiciendis tempora animi!
                Quaerat, saepe?
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

              <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                cumque tempore est ab possimus quisquam reiciendis tempora animi!
                Quaerat, saepe?
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

              <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                cumque tempore est ab possimus quisquam reiciendis tempora animi!
                Quaerat, saepe?
              </p>
            </div>
          </div>

          <div class="flex items-start gap-4">
            <span class="shrink-0 rounded-lg bg-gray-800 p-4">
              <svg
                class="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                ></path>
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                ></path>
              </svg>
            </span>

            <div>
              <h2 class="text-lg font-bold">Lorem, ipsum dolor.</h2>

              <p class="mt-1 text-sm text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                cumque tempore est ab possimus quisquam reiciendis tempora animi!
                Quaerat, saepe?
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ##################### section 3 ##################### -->
    
    <div class=" flex flex-col items-left justify-center">
      <h1 class="text-3xl font-bold font-poppins text-sky-500 lg:mx-72 lg:mt-12 sm:mx-12 sm:mt-8 mb-4">
        FAQ
      </h1>
    </div>
    <div class="space-y-4 lg:mx-72 lg:mb-12 sm:mx-12 sm:mb-8">
      <details class="group [&_summary::-webkit-details-marker]:hidden" open>
        <summary
          class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-sky-100 p-4 text-gray-900"
        >
          <h2 class="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </h2>

          <svg
            class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p class="mt-4 px-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>

      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-sky-100 p-4 text-gray-900"
        >
          <h2 class="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </h2>

          <svg
            class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p class="mt-4 px-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>

      <details class="group [&_summary::-webkit-details-marker]:hidden" open>
        <summary
          class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-sky-100 p-4 text-gray-900"
        >
          <h2 class="font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing?
          </h2>

          <svg
            class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </summary>

        <p class="mt-4 px-4 leading-relaxed text-gray-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
          molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
          voluptate dicta quo officiis explicabo consequuntur distinctio corporis
          earum similique!
        </p>
      </details>
    </div>

    <FooterHome />
  </main>
</template>

