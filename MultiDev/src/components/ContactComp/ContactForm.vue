<script setup>
import LeftSide from '../../components/ContactComp/LeftSide.vue'
</script>

<template>

  <div
    class="flex justify-center mx-auto md:w-[55%]  my-16 border-[1px] border-[#000000] rounded-[20px]"
  >
    <div class="w-full">
      <form  action="">
        <div class="flex flex-col px-4 py-4 md:py-16 md:px-14 gap-16">
          <h2 class="text-xl md:text-3xl lg:text-5xl font-medium">
            Let’s <span class="text-[#F23A3A]">discuss</span> your project
          </h2>
          <input
            class="w-[90%] md:w-[70%] md:h-[56x] border-[0px] border-b-[1px] border-[#49454F] focus:ring-0 focus:border-[#49454F]"
            type="email"
            placeholder="Email"
          />
          <input
            class="w-[90%] md:w-[70%] md:h-[56px] border-[0px] border-b-[1px] border-[#49454F] focus:ring-0 focus:border-[#49454F]"
            type="text"
            placeholder="Subject"
          />
          <div class="sm:col-span-2">
            <textarea
              id="message"
              class="w-[90%] md:w-[70%] md:h-[200px] block p-2.5 text-base bg-white border-[0px] border-b-[1px] border-[#49454F] focus:ring-0 focus:border-[#49454F]"
              placeholder="Message"
              style="resize: none;"
            ></textarea>
          </div>
          <button
            type="submit"
            class="w-[90%] md:w-[70%] md:h-[56px] rounded-full text-lg md:text-2xl font-normal text-white bg-[#F23A3A]"
          >
            Send
          </button>
        </div>
      </form>
    </div>
    <div
      class="bg-[#E8E4E4] py-16 lg:block hidden border-l-[1px] w-[50%]  border-[#000000] rounded-r-[20px]">
      <LeftSide />
  </div>
  </div>
  <div class="block lg:hidden bg-[#E8E4E4] border-[1px] border-[#000000] rounded-r-[20px] py-16" >
  <LeftSide />
</div>
</template>