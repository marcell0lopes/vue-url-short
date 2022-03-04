<template>
  <div
    class="absolute top-2 right-0 sm:right-5 sm:top-5 bg-yellow-500 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
    role="alert"
    aria-live="assertive"
    aria-atomic="true"
    data-mdb-autohide="false"
  >
    <div
      class="bg-yellow-500 flex justify-between items-center py-2 px-3 bg-clip-padding border-b border-yellow-400 rounded-t-lg"
    >
      <p class="font-bold text-white text-lg flex items-center">
        <i class="fa-solid fa-circle-exclamation text-xl mr-2" />ALERTA
      </p>
      <div class="flex items-center">
        <button
          type="button"
          class="fa fa-close text-white text-xl"
          data-mdb-dismiss="toast"
          aria-label="Close"
          @click="$emit('close')"
        />
      </div>
    </div>
    <div class="p-3 bg-yellow-800 rounded-b-lg break-words text-white text-lg">
      {{ alertMessage }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    alertMessage: String,
  },
  name: 'ToastAlert',
};
</script>
