<script setup>
 import HeaderHome from '../components/HeaderHome.vue'; 
 import FooterHome from '../components/FooterHome.vue';
</script>

<template>
  <main class="h-screen bg-white">
    <HeaderHome />

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
              src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="absolute inset-0 h-full w-full object-cover"
            />
          </div>

          <div class="lg:py-24">
            <h2 class="text-3xl font-bold sm:text-4xl text-sky-500">Grow your audience</h2>

            <p class="mt-4 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut qui hic
              atque tenetur quis eius quos ea neque sunt, accusantium soluta minus
              veniam tempora deserunt? Molestiae eius quidem quam repellat.
            </p>

            <a
              href="#"
              class="mt-8 inline-block rounded bg-indigo-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-yellow-400"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </section>

    <div class="space-y-4 lg:mx-72 lg:my-12 sm:mx-12 sm:my-6">
      <details class="group [&_summary::-webkit-details-marker]:hidden" open>
        <summary
          class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-slate-100 p-4 text-gray-900"
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
          class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-slate-100 p-4 text-gray-900"
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

