<template>
  <header class="w-full bg-white border-b border-color-gray-500 z-50">
    <div ref="headerRef" class="top-header container mx-auto py-2 bg-white">
      <div class="w-full flex justify-between items-center">
        <ul class="flex justify-start items-center w-full">
          <li class="md:mr-4 mr-0 ml-4 lg:ml-0">
            <RouterLink to="/">
              <div class="py-2">💻 <span class="text-sm font-semibold">Devlog</span></div>
            </RouterLink>
          </li>
          <li class="mx-2 text-sm">
            <div class="relative w-full">
              <input class="py-2 pl-4 pr-8 border rounded" type="search" placeholder="search" />
              <button class="absolute right-0 top-0 py-2 rounded px-2">
                <SearchIcon class="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </li>
        </ul>

        <ul class="hidden md:flex justify-end items-center w-full">
          <li class="mx-2">
            <RouterLink class="text-sm font-semibold text-gray-600" to="/tags">Tags</RouterLink>
          </li>
        </ul>

        <button class="mr-2 block md:hidden cursor-pointer p-2 hover:bg-gray-100 focus:bg-gray-100 rounded">
          <MenuIcon class="text-gray-500 h-6 w-6" />
        </button>
      </div>
    </div>
  </header>
</template>

<style>
.top-header {
  z-index: 666 !important;
}
</style>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { SearchIcon, MenuIcon } from '@heroicons/vue/outline';

const { t } = useI18n();
</script>