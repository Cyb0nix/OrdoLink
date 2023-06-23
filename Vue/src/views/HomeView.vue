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
          <h2 class="text-3xl font-bold sm:text-4xl">Qu'est ce qui nous rend spécial !</h2>

          <p class="mt-4 text-gray-300">
            Voici les fonctionnalités principales qui montre que notre site web est LE site de numérisation d'ordonnance n°1 sur le marché !
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
              <h2 class="text-lg font-bold">Facilité d'utilisation et gain de temps </h2>

              <p class="mt-1 text-sm text-gray-300">
                Notre plateforme a été conçue pour simplifier le processus de création d'ordonnances médicales. Grâce à notre interface conviviale et intuitive, vous pouvez générer rapidement des ordonnances personnalisées en quelques clics, vous permettant ainsi de gagner du temps précieux dans votre pratique médicale.
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
              <h2 class="text-lg font-bold">Ordonnances sécurisées et conformes</h2>

              <p class="mt-1 text-sm text-gray-300">
                Nous accordons une grande importance à la sécurité et à la conformité des ordonnances médicales. Nos prescriptions sont générées de manière sécurisée et respectent les réglementations et les normes de confidentialité en vigueur. Vous pouvez avoir l'assurance que vos ordonnances sont sécurisées et conformes aux exigences légales.
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
              <h2 class="text-lg font-bold">Intégration transparente avec les pharmacies</h2>

              <p class="mt-1 text-sm text-gray-300">
                Notre plateforme facilite l'envoi électronique des ordonnances aux pharmacies de votre choix. Vous pouvez sélectionner la pharmacie préférée de votre patient et envoyer directement les détails de la prescription. Cela permet une communication fluide et efficace entre vous, le médecin, et la pharmacie, garantissant une gestion pratique et rapide des médicaments.
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
              <h2 class="text-lg font-bold">Partage facile avec les patients</h2>

              <p class="mt-1 text-sm text-gray-300">
                Vous pouvez partager les ordonnances directement avec vos patients de manière simple et sécurisée. Notre plateforme offre des fonctionnalités de partage intégrées, vous permettant de communiquer facilement les détails de la prescription à vos patients. Ils peuvent recevoir les informations de l'ordonnance et des notifications pour les rappeler de prendre leurs médicaments.
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
              <h2 class="text-lg font-bold">Notifications et suivi des médicaments</h2>

              <p class="mt-1 text-sm text-gray-300">
                Notre plateforme offre des fonctionnalités de notification pour les patients, ce qui les aide à suivre leur traitement de manière plus précise. Les patients recevront des rappels pour prendre leurs médicaments aux heures appropriées, ce qui favorise l'observance thérapeutique et améliore les résultats de santé.
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
              <h2 class="text-lg font-bold">Personnalisation avancée des ordonnances</h2>

              <p class="mt-1 text-sm text-gray-300">
                Notre plateforme vous permet de personnaliser les ordonnances selon les besoins spécifiques de vos patients. Vous pouvez ajouter des instructions personnalisées, ajuster les dosages et les durées de traitement, et spécifier les médicaments génériques ou de marque. Cela vous donne un contrôle total sur le contenu des ordonnances pour répondre aux besoins individuels de chaque patient.
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
            Comment puis-je créer une ordonnance médicale sur votre plateforme ?
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
          Notre plateforme simplifie le processus de création d'ordonnances médicales. Il vous suffit de vous connecter avec vos identifiants que l'admin vous aura donné si vous êtes un médecin, puis de suivre les étapes simples pour générer une ordonnance personnalisée. Vous pourrez spécifier les médicaments, les dosages et les instructions appropriées. Une fois terminée, vous pouvez l'envoyer électroniquement à la pharmacie choisie et la partager avec votre patient.
        </p>
      </details>

      <details class="group [&_summary::-webkit-details-marker]:hidden">
        <summary
          class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-sky-100 p-4 text-gray-900"
        >
          <h2 class="font-medium">
            Est-ce que mes ordonnances générées sur votre plateforme sont sécurisées ?
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
          Oui, la sécurité de vos ordonnances médicales est notre priorité. Notre plateforme utilise des protocoles de sécurité avancés pour protéger vos données sensibles. Toutes les informations médicales et les détails des prescriptions sont cryptés et stockés de manière sécurisée. De plus, nous nous conformons aux réglementations et normes de confidentialité en vigueur pour garantir la protection de vos données.
        </p>
      </details>

      <details class="group [&_summary::-webkit-details-marker]:hidden" open>
        <summary
          class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-sky-100 p-4 text-gray-900"
        >
          <h2 class="font-medium">
            Est-ce que mes patients peuvent recevoir des notifications pour les médicaments à prendre ?
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
          Oui, notre plateforme offre la fonctionnalité de notification pour les patients. Une fois que vous avez créé une ordonnance et partagé les détails avec votre patient, celui-ci recevra des notifications pour lui rappeler de prendre les médicaments prescrits aux heures appropriées. Cela facilite la prise en charge des traitements et aide à améliorer l'observance thérapeutique.
        </p>
      </details>
    </div>

    <FooterHome />
  </main>
</template>

