<template>
  <Transition name="modal">
    <div
      v-if="show"
      class="fixed z-10 top-0 left-0 w-full h-full bg-black/30 table transition ease-in-out"
    >
      <div class="table-cell align-middle">
        <div
          class="w-96 mx-auto py-10 px-14 bg-gray-50 rounded-md shadow-lg transition ease-in-out"
        >
          <div class="flex items-center justify-between mb-8">
            <h2 class="text-xl font-bold text-indigo-900">
              <slot name="header">{{ Register ? 'Registrar' : 'Login' }}</slot>
            </h2>
            <button class="text-red-600" @click="$emit('close')">
              <XIcon class="w-6 h-6" />
            </button>
          </div>

          <div class="my-2">
            <form
              @submit.prevent="PostRegister"
              class="w-full bg-gray-50 rounded-lg flex flex-col items-center"
            >
              <label for="username" class="sr-only"> Usuário: </label>
              <input
                v-if="Register"
                type="text"
                id="username"
                name="username"
                placeholder="Usuário"
                v-model="registerPostRequest.username"
                class="w-full p-2 mb-4 bg-slate-50 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              />

              <label for="email" class="sr-only"> Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                v-model="registerPostRequest.email"
                class="w-full p-2 mb-4 bg-slate-50 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              />

              <label for="password" class="sr-only"> Senha: </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Senha"
                v-model="registerPostRequest.password"
                class="w-full p-2 mb-4 bg-slate-50 rounded border-2 border-slate-200 focus:border-slate-600 focus:outline-none"
              />

              <button
                type="submit"
                class="bg-teal-500 text-white/90 rounded-full px-5 py-2 my-2 text-md uppercase font-bold hover:brightness-90 transition-all"
              >
                {{ Register ? 'Registrar' : 'Login' }}
              </button>
            </form>
          </div>

          <div class="text-center">
            <slot name="footer">
              <a
                v-if="!Register"
                class="text-sm font-light hover:underline text-indigo-600 hover:text-indigo-900 cursor-pointer"
              >
                Registre-se
              </a>
              <a
                v-else
                class="text-sm font-light hover:underline text-indigo-600 hover:text-indigo-900 cursor-pointer"
              >
                Fazer Login
              </a>
            </slot>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script>
import { XIcon } from '@heroicons/vue/outline';
import axios from 'axios';

export default {
  props: {
    show: Boolean,
    Register: Boolean,
  },
  components: {
    XIcon,
  },
  data() {
    return {
      registerPostRequest: {
        username: '',
        email: '',
        password: '',
      },
    };
  },
  methods: {
    async PostRegister() {
      try {
        axios.post('auth/register', this.registerPostRequest).then((res) => {
          console.log(res);
        });
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style scoped>
.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
