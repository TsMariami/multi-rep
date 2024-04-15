<script setup>
import useAboutPage from "../../composable/useAboutUs.js"
const { services } = useAboutPage()
</script>
<template>
    <div class="py-24 gap-y-44">
        <div v-for="(item, index) in services" :key="index" class="px-44 flex gap-x-24 flex-row-reverse">
            <img :src="item.img" alt="">
            <div>
                <h3 class=" text-[#F23A3A] text-2xl font-medium">{{ item.title }}</h3>
                <p class="text-medium  w-[55%]">{{ item.description }}</p>
            </div>
        </div>
    </div>
</template>