<template>
  <section
    class="bg-gradient-to-tr from-indigo-900 to-indigo-500 w-screen h-screen flex flex-col items-center justify-around"
  >
    <h1 class="text-xl text-center text-white/95 font-light">
      encurte seus links com
      <div class="flex items-center justify-center">
        <SwitchHorizontalIcon class="w-10 h-10 mt-4 mr-2 text-teal-500" />
        <span class="text-6xl mt-2 font-bold text-white/95">
          Short<span class="italic font-normal text-2xl text-white/90"
            >.vue</span
          >
        </span>
      </div>
    </h1>
    <slot />

    <p class="text-white text-xs tracking-wider">
      <a class="underline hover:font-bold cursor-pointer">Cadastre-se</a> para
      acessar mais informações sobre seus links encurtados!
    </p>
  </section>
</template>

<script>
import { SwitchHorizontalIcon } from '@heroicons/vue/outline';

export default {
  name: 'mainSection',
  components: { SwitchHorizontalIcon },
};
</script>
