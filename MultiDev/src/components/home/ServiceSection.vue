<script setup>
import useHomePage from "../../composable/useHomePage.js"
const { services } = useHomePage()
</script>
<template>
    <div class="flex justify-between">
        <h2 class="text-3xl font-medium">Empowering you with <span class="text-[#F23A3A]">exceptional</span>
            services.</h2>
        <span class="text-3xl font-medium"> See More</span>
    </div>
    <div class="grid grid-cols-3 gap-y-8 gap-x-10">
        <div v-for="(item, index) in services" :key="index" class="flex flex-col gap-y-2  ">
            <div><img :src="item.icon" alt=""></div>
            <h4 class="text-3xl font-medium">{{ item.title }}</h4>
            <p class=" font-medium text-xl">{{ item.description }}</p>
        </div>
    </div>
</template>