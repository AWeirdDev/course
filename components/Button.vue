<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
    hovered: {
        default: false,
    },
});

const hovered = ref(props.hovered);
</script>

<template>
    <button
        border="~ main rounded-md"
        p="2"
        outline="!none"
        hover:bg="gray-400 opacity-20"
        :bg="hovered ? 'gray-400 opacity-20' : ''"
    >
        <slot />
    </button>
</template>
