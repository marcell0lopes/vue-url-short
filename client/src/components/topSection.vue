<template>
  <section class="w-screen h-screen bg-gray-100">
    <h2
      class="py-8 text-4xl text-center font-bold tracking-tighter text-indigo-800"
    >
      Top 100 URLs
      <small class="text-base tracking-normal text-gray-600">(por click)</small>
    </h2>

    <div
      class="container max-w-4xl mx-auto bg-indigo-900 p-4 rounded-lg shadow-lg"
    >
      <table class="table-auto w-full bg-white/80">
        <thead
          class="text-left text-gray-500 bg-white/90 font-bold text-sm rounded-lg"
        >
          <th class="p-4">Clicks</th>
          <th>Título</th>
          <th>Link</th>
        </thead>

        <tbody class="text-md font-bold">
          <tr v-if="isLoading" class="bg-indigo-900 py-10 w-full">
            <td></td>
            <td class="flex flex-col items-center justify-center col-span-3">
              <h4 class="text-lg text-white/95 mt-4">
                Carregando os 100 links mais acessados...
              </h4>
              <div
                class="w-full pt-10 pb-20 relative flex items-center justify-center"
              >
                <iframe
                  src="https://giphy.com/embed/pf4xLNTrRFnYxJLYid"
                  width="50px"
                  height="50px"
                  frameBorder="0"
                  class="absolute"
                />
              </div>
            </td>
            <td></td>
          </tr>

          <tr
            v-else
            v-for="link in top100links"
            :key="link._id"
            class="border-solid border-b-2 border-indigo-800"
          >
            <td class="p-4 text-indigo-800">{{ link.clicks }}</td>
            <td class="text-indigo-900">{{ link.urlTitle }}</td>
            <td>
              <a
                :href="link.shortUrl"
                class="text-teal-700 font-normal cursor-pointer hover:text-teal-900 underline transition-all"
              >
                {{ link.shortUrl }}
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import axios from 'axios';

export default {
  name: 'topUrls',
  data() {
    return {
      isLoading: true,
      top100links: [],
    };
  },
  async created() {
    await axios.get('http://localhost:3333/api/top').then((res) => {
      this.top100links = res.data;
      this.isLoading = false;
    });
  },
};
</script>
