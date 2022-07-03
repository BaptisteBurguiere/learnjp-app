<template>
  <div class="bg-dark-back h-[100vh] w-[100vw] p-4 lg:pt-10 text-dark-main-font flex flex-col items-center">
    <header class="w-full max-w-[1024px]">
      <h1 class="text-2xl font-poppins font-bold lg:text-3xl">Apprendre le japonais</h1>
      <div class="flex items-center">
        <h2 class="text-2xl mt-1 ml-3 mr-2 font-notojp lg:text-3xl">日本語の学習</h2>
        <div class="h-[0.125rem] bg-dark-accent flex-grow"/>
      </div>
    </header>
    
    <div class="flex flex-col text-center flex-grow justify-evenly items-center my-10 w-[80%] max-w-[1024px]">
      <RouterLink to="/" class="text-4xl lg:text-5xl font-poppins font-bold bg-dark-secondary-back p-10 rounded-[1.25rem] max-w-[700px] w-full hover:brightness-110 hover:scale-110 focus:brightness-110 focus:scale-110 focus:outline-none transition ease-in-out">Kanji</RouterLink>
      <RouterLink to="/" class="text-4xl lg:text-5xl font-poppins font-bold bg-dark-secondary-back p-10 rounded-[1.25rem] max-w-[700px] w-full hover:brightness-110 hover:scale-110 focus:brightness-110 focus:scale-110 focus:outline-none transition ease-in-out">Exressions</RouterLink>
      <RouterLink to="/" class="text-4xl lg:text-5xl font-poppins font-bold bg-dark-secondary-back p-10 rounded-[1.25rem] max-w-[700px] w-full hover:brightness-110 hover:scale-110 focus:brightness-110 focus:scale-110 focus:outline-none transition ease-in-out">Custom</RouterLink>
    </div>
    
  </div>
  <RouterView />
</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'
</script>

<style>

</style>