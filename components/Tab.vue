<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";
import { useSlideContext } from "@slidev/client";

const props = defineProps({
    label: {
        default: "",
    },
    clicks: {
        default: 0,
    },
});

const label = ref(props.label);
const clicks = ref(props.clicks);

const { $clicks, $nav } = useSlideContext();
</script>

<template>
    <Button
        class="px-4"
        @click="$nav.go($nav.currentSlideNo, clicks)"
        :hovered="$clicks == clicks"
        :key="$clicks"
    >
        {{ label }}
    </Button>
</template>
