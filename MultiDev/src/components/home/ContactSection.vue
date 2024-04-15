<script setup>
import useHomePage from "../../composable/useHomePage.js"
const { contactUs } = useHomePage()
</script>
<template>
    <h4 class=" font-semibold text-4xl">How does our <span class="text-[#F23A3A] ">service</span> work?</h4>
    <div class="flex gap-x-20 py-20">
        <img src="/src/assets/imgs/Screenshot 2024-03-30 174303 1.png" alt="">
        <div>
            <div class="flex flex-row">
                <div v-for="(item, index) in contactUs" :key="index">
                    <img :src="item.icon" alt="">
                    <span>{{ item.title }}</span>
                    <img :src="item.arrow" alt="">
                </div>
            </div>
            <hr>
            <p></p>
        </div>
    </div>
</template>