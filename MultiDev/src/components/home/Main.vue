<script setup>
 import {ref} from 'vue'
 const services =  ref([
    {
        icon: 'src/assets/imgs/Group 4.png',
        title: 'Full-Stack Development',
        description: "From front-end to back-end, we've got your development needs covered. Let's build something amazing together.",
    },
    {
        icon: 'src/assets/imgs/Group (1).png',
        title: 'Design',
        description: "Elevate your digital presence with our expert design services. From sleek interfaces to captivating user experiences, we craft designs that inspire and engage. Let's create something extraordinary."
    },  
    {
        icon: 'src/assets/imgs/two-databases-svgrepo-com 1.png',
        title: 'Data Bases Management',
        description: "Streamline your data with our comprehensive database management solutions. From organization to optimization, we ensure your data works for you. Let's make managing data effortless."
    },  
    {
        icon: 'src/assets/imgs/Group 5.png',
        title: 'Mobile Development',
        description: "ransform your ideas into powerful mobile experiences with our expert development services. From concept to launch, we bring your app vision to life across platforms. Let's create mobile magic together."
    },  
    {
        icon: 'src/assets/imgs/devops_1_.png',
        title: 'DevOps',
        description: "Empower your development process with our cutting-edge DevOps solutions. From seamless integration to continuous deployment, we optimize your workflow for efficiency and scalability. Let's streamline your operations for success."
    },  
    {
        icon: 'src/assets/imgs/Group (2).png',
        title: 'Cloud Computing',
        description: "Unlock the potential of the cloud with our tailored computing solutions. From migration to optimization, we empower your business with scalable, secure, and flexible cloud infrastructure. Let's elevate your operations to new heights in the digital sky."
    },
 ])

 const aboutUs = ref([
    {
        title: 'work with proffesional',
        description: 'we have proffesional team that will guid you through all proceses of your choesing'
    },
    {
        title: 'Quality at an affordable price',
        description: 'Our company is committed to delivering products that offer big value at a small price, making quality accessible to all'
    },
    {
        title: 'Transparency',
        description: "We believe in transparency every step of the way, from pricing and policies to communication and feedback, so you can trust that you're always in the know"
    },
    {
        title: 'Innovation',
        description: 'With a focus on innovation, we continuously evolve to bring you the latest advancements in technology, design, and functionality'
    },
 ])
 
</script>

<template>
    <div class="flex py-24 px-40">
        <div class="flex flex-col gap-y-8">
            <h3 class="text-3xl font-medium">Secure Your Software Service</h3>
            <h2 class="text-8xl font-medium w-[65%] text-[#F23A3A]">Handled By Professionals</h2>
            <p class="text-2xl font-medium">From Concept to Code, We're Your Complete Digital Solution!</p>
            <div class="my-12">
                <p class="flex flex-row gap-x-5 text-2xl font-medium ">To Schedule Our Services<span class="text-[#F23A3A]">Contact Us</span></p>
            </div>
        </div>
        <img src="/src/assets/imgs/Rectangle 4.png" alt="">
    </div>
    <div class=" flex flex-col gap-y-24 mx-40">
        <div class="flex justify-between">
            <h2 class="text-3xl font-medium">Empowering you with <span class="text-[#F23A3A]">exceptional</span>  services.</h2>
            <span class="text-3xl font-medium"> See More</span>
        </div>
        <div class="grid grid-cols-3 gap-y-8 gap-x-10">
            <div v-for="(item, index) in services" :key="index" class="flex flex-col gap-y-2  ">
                <div><img :src="item.icon" alt=""></div>
                <h4 class="text-3xl font-medium">{{ item.title }}</h4>
                <p class=" font-medium text-xl">{{ item.description }}</p>
            </div>
        </div>

    </div>
        <div class="bg-[#CB2424] flex gap-x-24 pl-44 py-24">
            <div class="flex flex-col text-white gap-y-8 w-[42%]">
                <h4 class="text-[36px] font-normal py-10">Whats great about us?</h4>
                <div v-for="(item, index) in aboutUs" :key="index" class="gap-y-3">
                    <div class="flex gap-x-2">
                    <img src="/src/assets/imgs/Vector (12).png" alt="" class="h-5 m-3">
                    <h5 class="text-3xl font-normal">{{ item.title }}</h5>    
                    </div>
                    
                    <p class="font-normal text-2xl">{{ item.description }}</p>
                </div>
            </div>
            <img src="/src/assets/imgs/Screenshot 2024-03-30 175550 1.png" alt="">
        </div>
</template>