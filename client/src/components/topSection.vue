<template>
  <section id="top" class="w-screen h-screen bg-gray-100">
    <h2
      class="py-8 text-4xl text-center font-bold tracking-tighter text-indigo-800"
    >
      Top 100 URLs
      <small class="text-base tracking-normal text-gray-600">(por click)</small>
    </h2>

    <div class="max-w-4xl mx-auto bg-indigo-900 p-4 shadow-lg">
      <table class="table-auto w-full">
        <thead
          class="text-left text-white bg-white/50 font-bold text-xs sm:text-sm"
        >
          <th class="p-4">Clicks</th>
          <th>Título</th>
          <th>Link</th>
          <th>Favorito</th>
        </thead>

        <tbody class="text-xs sm:text-md font-bold bg-white/95">
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
            data-testid="topLink"
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
            <td>
              <button
                v-if="link.isFavorite"
                @click="handleFavoriteClick(link.urlId)"
              >
                <StarIconSolid class="w-5 h-5" />
              </button>
              <button v-else @click="handleFavoriteClick(link.urlId)">
                <StarIcon class="w-5 h-5" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { StarIcon } from "@heroicons/vue/outline";
import { StarIcon as StarIconSolid } from "@heroicons/vue/solid";

export default {
  name: "topUrls",
  components: {
    StarIcon,
    StarIconSolid,
  },
  data() {
    return {
      isLoading: true,
      top100links: [],
    };
  },
  methods: {
    handleFavoriteClick(id) {
      const urlId = id;
      axios.post(`api/favorite/${urlId}`).then((res) => {
        const data = res.data;
        console.log(this.top100links, data);
        const urlIndex = this.top100links.findIndex(
          (item) => item.urlId === id
        );
        this.top100links[urlIndex] = data;
      });
    },
  },

  async created() {
    await axios.get("api/top").then((res) => {
      this.top100links = res.data;
      this.isLoading = false;
    });
  },
};
</script>
