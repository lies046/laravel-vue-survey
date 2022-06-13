<template>
<div class="flex items-center justify-between">
  <h3 class="text-lg font-bold">
    {{ index + 1}}. {{ model.question }}
  </h3>
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
