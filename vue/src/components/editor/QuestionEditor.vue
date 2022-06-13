<template>
<div class="flex items-center justify-between">
  <h3 class="text-lg font-bold">
    {{ index + 1}}. {{ model.question }}
  </h3>
  <div class="flex items-center">
    <button type="button" @click="addQuestion()"
    class="flex items-center text-xs py-1 px-3 mr-2 rounded-sm text-white bg-gray-600 hover:bg-gray-700">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      Add
    </button>

    <button type="button" @click="deleteQuestion()"
    class="flex items-center text-xs py-1 px-3 rounded border border-transparent text-red-500 hover:border-red-500">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
        <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
      Delete
    </button>
  </div>
</div>
  <div class="grid gap-3 grid-cols-12">

  </div>
</template>

<script setup>
import {ref} from "vue";

const props = defineProps({
  question: Object,
  index: Number,
});

const emit = defineEmits(['change', 'addQuestion', 'deleteQuestion']);

const model = ref(JSON.parse((JSON.stringify(props.question))));

</script>

<style scoped>

</style>
