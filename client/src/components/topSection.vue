<template>
  <section class="w-screen h-screen bg-gray-100">
    <h2
      class="py-8 text-4xl text-center font-bold tracking-tighter text-indigo-800"
    >
      Top 100 URLs
      <small class="text-base tracking-normal text-gray-600">(por click)</small>
    </h2>

    <div class="container mx-auto bg-indigo-900 p-4 rounded-lg shadow-lg">
      <table class="table-auto w-full bg-white/80">
        <thead
          class="text-left text-gray-500 bg-white/90 font-bold text-lg rounded-lg"
        >
          <th class="p-4">Clicks</th>
          <th>Título</th>
          <th>Link</th>
        </thead>
        <tbody class="text-lg font-bold">
          <tr class="border-solid border-b-2 border-indigo-800">
            <td class="p-4 text-indigo-500">0</td>
            <td class="text-indigo-900">Meu Link</td>
            <td>
              <a class="underline text-indigo-500 font-normal"
                >www.oi.com/8379128</a
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
export default {
  name: 'topUrls',
  data() {
    return {
      top100links: [
        {
          name: 'oi',
          clicks: 2,
        },
        {
          name: 'tchau',
          clicks: 666,
        },
      ],
    };
  },
};
</script>
