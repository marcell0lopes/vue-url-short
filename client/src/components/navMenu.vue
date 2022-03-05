<template>
  <Disclosure as="nav" class="bg-gray-100" v-slot="{ open }">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="sr-only">Open main menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
        <div
          class="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start"
        >
          <div class="flex-shrink-0 flex items-center">
            <SwitchHorizontalIcon class="w-5 h-5 text-teal-500" />
            <h2 class="hidden lg:block text-xl ml-2 font-bold text-indigo-900">
              Short<span class="font-normal italic text-base">.vue</span>
            </h2>
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <a
                v-for="item in navigation"
                :key="item.name"
                :href="item.href"
                :class="[
                  item.current
                    ? 'bg-indigo-900 text-white'
                    : 'text-gray-600 hover:bg-teal-700 hover:text-white',
                  'px-3 py-2 rounded-md text-sm font-medium scroll-smooth',
                ]"
                :aria-current="item.current ? 'page' : undefined"
                >{{ item.name }}</a
              >
            </div>
          </div>
        </div>
        <div
          class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0"
        >
          <p class="mx-3 text-indigo-900 hidden sm:block">
            Bem vindo, <strong class="text-indigo-600">Usuário!</strong>
          </p>
          <button
            type="button"
            class="bg-indigo-800 p-1 rounded-full text-gray-300 hover:text-white/95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white"
          >
            <span class="sr-only">See Account</span>
            <UserIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <DisclosureButton
          v-for="item in navigation"
          :key="item.name"
          as="a"
          :href="item.href"
          :class="[
            item.current
              ? 'bg-gray-900 text-white'
              : 'text-gray-300 hover:bg-gray-700 hover:text-white',
            'block px-3 py-2 rounded-md text-base font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
          >{{ item.name }}</DisclosureButton
        >
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue';
import {
  UserIcon,
  MenuIcon,
  XIcon,
  SwitchHorizontalIcon,
} from '@heroicons/vue/outline';

const navigation = [
  { name: 'Home', href: '#', current: true },
  { name: 'Top 100', href: '#top', current: false },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    UserIcon,
    MenuIcon,
    XIcon,
    SwitchHorizontalIcon,
  },
  setup() {
    return {
      navigation,
    };
  },
};
</script>
