<script setup></script>

<template>
  <div
    class="flex w-[50%] mx-auto my-16 border-[1px] border-[#000000] rounded-[20px]"
  >
    <div class="">
      <form action="">
        <div class="flex flex-col px-4 py-4 md:py-16 md:px-16 gap-16">
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
      class="bg-[#E8E4E4] border-l-[1px] border-[#000000] rounded-r-[20px]"
    ></div>
  </div>
</template>