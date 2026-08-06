<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
    emoji: {
        default: "",
    },
});

const emoji = ref(props.emoji);
</script>

<template>
    <img :src="'https://aweirddev.github.io/emojis/google/' + emoji + '.png'" />
</template>
