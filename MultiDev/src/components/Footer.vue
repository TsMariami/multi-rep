<script setup>
import useFooter from "../composable/useFooter";


const { useFooteInfo } = useFooter();
</script>

<template>
  <div class=" border bg-black mt-32 mx-auto"></div>
  <div class="flex flex-wrap  p-12 mx-16 py-32 gap-20 2xl:gap-40"> 
    <div class="">
      <router-link to="/">
      <img src="../assets/icons/Group1.svg" alt="logo" />
    </router-link>
    </div>
    <div class="flex flex-col gap-10">
     <h2 class="text-4xl font-medium" v-text="useFooteInfo[0].Description[0].title" />
      <div class="flex flex-col gap-20">
        <div class="flex flex-col gap-4">
          <router-link to="/">
          <p class="text-2xl font-normal" v-text="useFooteInfo[0].Description[0].title1" />
        </router-link>
        <router-link to="/about">
          <p class="text-2xl font-normal" v-text="useFooteInfo[0].Description[0].title2" />
        </router-link>
        </div>
        <p class="text-base font-normal">
          Multidev 2019 - 2024. All rights reserved.
        </p>
      </div>
    </div>
    <div class="flex flex-col gap-10">
      <h2 class="text-4xl font-medium">Get in touch</h2>
      <div class="flex flex-col gap-4">
        <div class="flex gap-2">
          <img src="../assets/icons/phone.svg" alt="phone" />
          <p class="text-2xl">(+995) 551-12-13-14</p>
        </div>
        <div class="flex gap-2">
          <img src="../assets/icons/letter.svg" alt="phone" />
          <p class="text-2xl">multichiatura@gmail.com</p>
        </div>
      </div>
      <router-link to="/contact">
      <button
        class="bg-[#F23A3A] rounded-full text-white w-[60%] text-2xl font-normal py-2 px-2"
      >
        Contact Us
      </button>
    </router-link>
    </div>
    <div class="flex flex-col gap-10">
      <h2 class="text-4xl font-medium">Follow Us</h2>
      <div class="flex gap-9">
        <a href="#">
        <img src="../assets/icons/facebook.svg" alt="" />
      </a>
      <a href="#">
        <img src="../assets/icons/insta.svg" alt="" />
      </a>
      <a href="#">
        <img src="../assets/icons/linkedin.svg" alt="" />
      </a>
      </div>
    </div>
  </div>
</template>