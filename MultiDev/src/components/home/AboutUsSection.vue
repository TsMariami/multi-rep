<script setup>
import useHomePage from "../../composable/useHomePage.js"
const { aboutUs } = useHomePage()
</script>

<template>
    <div class="flex flex-col text-white gap-y-8 w-[42%]">
        <h4 class="text-[36px] font-normal py-10">Whats great about us?</h4>
        <div v-for="(item, index) in aboutUs" :key="index" class="gap-y-3">
            <div class="flex gap-x-2">
                <img src="/src/assets/icons/check-icon.svg" alt="" class="h-5 m-3">
                <h5 class="text-3xl font-normal">{{ item.title }}</h5>
            </div>

            <p class="font-normal text-2xl">{{ item.description }}</p>
        </div>
    </div>
    <img src="/src/assets/imgs/Screenshot 2024-03-30 175550 1.png" alt="">
</template>