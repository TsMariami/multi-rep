<script setup>
import MainLayout from '../../Layouts/mainLayout.vue'
import Main from "../../components/home/Main.vue"
import ServiceSection from "../../components/home/ServiceSection.vue"
import AboutUsSection from "../../components/home/AboutUsSection.vue"
import ContactSection from "../../components/home/ContactSection.vue"
</script>

<template>
  <MainLayout>
    <div class="bg-[#FAFAFA]">
      <div class=" flex flex-row py-24 px-40">
        <Main />
      </div>
      <div class="flex flex-col gap-y-24 my-10 mx-40">
        <ServiceSection/>
      </div>
      <div class="bg-[#CB2424] flex gap-x-24 pl-44 py-24">
        <AboutUsSection/>
      </div>
      <div class="px-44 pt-24">
        <ContactSection/>
      </div>
    </div>
  </MainLayout>
</template>
