<script setup>
import { onMounted } from 'vue'
import { initFlowbite } from 'flowbite'
import useHeader from "../../composable/useHeader";

onMounted(() => {

  const buttons = document.querySelectorAll('[data-accordion-target]');

  buttons.forEach(button => {
    const image = button.querySelector('svg');
    const text = button.querySelector('span');

    function rotateImage(expanded) {
      if (expanded === "true") {
        image.style.transform = "rotate(90deg) ";
        image.style.color = "black",
        text.style.color = "black"; 
      } else {
        image.style.transform = "rotate(180deg) ";
        image.style.color = "#F23A3A",
        text.style.color = "#F23A3A"; 
      }
    }

    button.addEventListener('click', function() {
      const expanded = button.getAttribute('aria-expanded');
      rotateImage(expanded);
    });
  });
});

const { HeaderInfo } = useHeader();
// initialize components based on data attribute selectors
onMounted(() => {
    initFlowbite();
})
</script>


<template>

<div id="accordion-open" data-accordion="open">
  <h2 id="accordion-collapse-heading-1">
    <button type="button" class="flex items-center black mybg w-full p-5 pl-0 pb-2 font-medium rtl:text-right gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="false" aria-controls="accordion-collapse-body-1">
  <span>Front-End Development</span>
  <svg  class="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
</button>
  </h2>
  <div id="accordion-collapse-body-1" class="hidden" aria-labelledby="accordion-collapse-heading-1">
    <div class=" pl-0 pb-2 pt-2 ml-5">
      <p class="mb-2 text-xs flex gap-2 font-medium	"><img src="../../assets/icons/react.svg" alt="">{{ HeaderInfo[0].FrontEnd[0].title }}</p>
      <p class="mb-2 text-xs flex gap-2 font-medium	"><img src="../../assets/icons/angular.svg" alt="">{{ HeaderInfo[0].FrontEnd[0].title1 }}</p>
      <p class="mb-2 text-xs flex gap-2 font-medium	"><img src="../../assets/icons/vue.svg" alt="">{{ HeaderInfo[0].FrontEnd[0].title2 }}</p>
      <a href="#"> <p class="mb-2 text-xs  text-[#F23A3A]">See All</p> </a>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-2">
    <button type="button" class="flex items-center  black pb-2 mybg w-full p-5 pt-3 pl-0 font-medium rtl:text-right  gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
      <span>Back-End Development</span>
      <svg  class="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
    <div class="p-5 pb-2 pt-2 ml-5">
      <p class="mb-2 text-xs flex gap-2 font-medium	"><img src="../../assets/icons/spring.svg" alt="">{{ HeaderInfo[0].BackEnd[0].title }}</p>
      <p class="mb-2 text-xs flex gap-2 font-medium	"><img src="../../assets/icons/laravel.svg" alt="">{{ HeaderInfo[0].BackEnd[0].title1 }}</p>
      <p class="mb-2 text-xs flex gap-2 font-medium	"><img src="../../assets/icons/django.svg" alt="">{{ HeaderInfo[0].BackEnd[0].title2 }}</p>
      <p class="mb-2 text-xs flex gap-2 font-medium	"><img src="../../assets/icons/express.svg" alt="">{{ HeaderInfo[0].BackEnd[0].title3 }}</p>
      <a href="#"> <p class="mb-2 text-xs  text-[#F23A3A]">See All</p> </a>
    </div>
  </div>
  <h2 id="accordion-collapse-heading-3">
    <button type="button" class="flex items-center  black mybg pb-2 w-full p-5 pt-3 pl-0 font-medium rtl:text-right  gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
      <span>Design</span>
  <svg  class="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 pt-2 pb-2">
      
    </div>
  </div>

  <h2 id="accordion-collapse-heading-4">
    <button type="button" class="flex items-center  black mybg pb-2 w-full p-5 pt-3 pl-0 font-medium rtl:text-right  gap-3" data-accordion-target="#accordion-collapse-body-4" aria-expanded="false" aria-controls="accordion-collapse-body-4">
      <span>Mobile Developmen</span>
  <svg  class="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 pt-2 pb-2">
      
    </div>
  </div>

  <h2 id="accordion-collapse-heading-5">
    <button type="button" class="flex items-center  black mybg pb-2 w-full p-5 pt-3 pl-0 font-medium rtl:text-right  gap-3" data-accordion-target="#accordion-collapse-body-5" aria-expanded="false" aria-controls="accordion-collapse-body-5">
      <span>DevOps</span>
  <svg  class="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 pt-2 pb-2">
      
    </div>
  </div>
  <h2 id="accordion-collapse-heading-6">
    <button type="button" class="flex items-center  black mybg pb-2 w-full p-5 pt-3 pl-0 font-medium rtl:text-right  gap-3" data-accordion-target="#accordion-collapse-body-6" aria-expanded="false" aria-controls="accordion-collapse-body-6">
      <span>Cloud Computing</span>
  <svg  class="w-3 h-3 rotate-90 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
      </svg>
    </button>
  </h2>
  <div id="accordion-collapse-body-6" class="hidden" aria-labelledby="accordion-collapse-heading-3">
    <div class="p-5 pt-2 pb-2">
      
    </div>
  </div>
</div>

</template>
<style scoped>
.black {
    color: black !important;
}
.mybg {
    background-color: transparent !important;
}

</style>