<script setup>
import { onMounted } from "vue";
import { initFlowbite } from "flowbite";
import accordion from "./HeaderComp/Accordion.vue"

// initialize components based on data attribute selectors
onMounted(() => {
  initFlowbite();
});
</script>

<template>
  <nav class="bg-[#FFFFFF] border-b border-[#D8D8D8] py-2">
    <div class="flex flex-wrap items-center justify-between mx-16 p-12">
      <router-link to="/">
      <img src="../assets/icons/logo.svg" alt="" />
    </router-link>
      <div class="w-full md:block md:w-auto" id="navbar-dropdown">
        <ul
          class="flex flex-col gap-20 font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700"
        >
        <router-link to="/" class="py-2 text-2xl px-3 rounded md:bg-transparent md:p-0 text-black" active-class="active-link">
            <li class="pt-3">Home</li>
          </router-link>
          <li class="pt-3">
            <button
              id="dropdownNavbarLink"
              data-dropdown-toggle="dropdownNavbar"
              class="flex  pt-3 items-center justify-between text-2xl w-full py-2 px-3 text-black rounded md:border-0 md:p-0 md:w-auto"
            >
              Services
              <svg
                class="w-2.5 h-2.5 ms-2.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
                
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            <!-- Dropdown menu -->
            <div
              id="dropdownNavbar"
              class="z-10 absolute font-normal -translate-x-[40%] translate-y-[31%] bg-[white] divide-y  divide-[#D8D8D8]  shadow px-10 py-10 border-x border-b border-[#D8D8D8] hidden"
            >
            <ul class="py-2 text-sm text-gray-700 dark:text-gray-400" aria-labelledby="dropdownLargeButton">
                <img class="pb-10" src="../assets/icons/services.svg" alt="">
              </ul>
              <div class="py-1 ">
                <accordion />
              </div>
            </div>
          </li>
          <router-link to="/about" class="py-2 text-2xl px-3 rounded md:bg-transparent md:p-0 text-black" active-class="active-link">
            <li class="pt-3">About Us</li>
          </router-link>
        <router-link to="/contact">
          <li>
            <button
              class="bg-[#F23A3A] text-white py-[10px] px-[30px] text-2xl rounded-full"
            >
              Contact Us
            </button>
          </li>
                  </router-link>
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.active-link {
  color: #F23A3A;
}
</style>