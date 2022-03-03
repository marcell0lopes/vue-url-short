<template>
  <div class="container">
    <form
      @submit.prevent="PostData"
      class="w-4/5 max-w-screen-md bg-gray-50 p-10 lg:p-30 shadow-lg rounded-lg flex flex-col items-center"
    >
      <h1
        class="mb-10 font-bold text-4xl tracking-tight text-teal-700 uppercase"
      >
        Encurte seus links!
      </h1>
      <div class="flex flex-col sm:flex-row items-center w-full">
        <label for="originalUrl" class="text-2xl mr-4 font-bold text-indigo-900"
          >URL:</label
        >
        <input
          type="text"
          name="originalUrl"
          id="originalUrl"
          v-model="urlPostRequest.originalUrl"
          class="p-3 mb-4 w-full bg-slate-50 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
        />
      </div>

      <div
        class="flex flex-col sm:flex-row items-center justify-between w-full"
      >
        <label for="urlTitle" class="text-lg font-normal text-indigo-900"
          >Título:</label
        >
        <input
          type="text"
          name="urlTitle"
          id="urlTitle"
          placeholder="(opcional)"
          v-model="urlPostRequest.urlTitle"
          class="p-3 mx-4 w-full bg-slate-50 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
        />
        <button
          type="submit"
          class="bg-teal-500 text-white/90 rounded-full px-5 py-2 my-2 text-xl uppercase font-bold hover:brightness-90 transition-all"
        >
          Encurtar
        </button>
      </div>
    </form>
    <!-- Resposta da API com o link encurtado! -->
    <div
      v-if="shortUrl"
      class="mt-6 w-4/5 max-w-screen-md bg-gray-100 p-10 lg:p-30 shadow-sm rounded-lg text-center"
    >
      <h1 class="text-xl mb-4 text-teal-900 font-bold">Seu novo link:</h1>
      <a
        :href="shortUrl"
        ref="shortLink"
        class="underline text-teal-700 text-3xl cursor-pointer"
        >{{ this.shortUrl }}</a
      >
      <button v-on:click="copyUrl">
        <i
          class="fa-solid fa-copy bg-teal-700 text-white/90 px-3 py-2 rounded-lg text-lg hover:brightness-90 hover:shadow-sm transition-all"
        />
      </button>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'urlForm',

  data() {
    return {
      shortUrl: null,
      urlPostRequest: {
        originalUrl: '',
      },
    };
  },
  methods: {
    PostData() {
      axios
        .post('http://localhost:3333/api/short', this.urlPostRequest)
        .then((res) => {
          const response = res.data;
          this.shortUrl = response.shortUrl;
        });
    },

    copyUrl() {
      navigator.clipboard.writeText(this.shortUrl);
    },
  },
};
</script>
