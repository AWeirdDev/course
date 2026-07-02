<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
    url: {
        default: "https://google.com",
    },
});

const url = ref(props.url);
</script>

<template>
    <div class="border-0.5 border-solid border-gray-200 rounded-lg bg-white">
        <div class="p-2">
            <div class="flex flex-row items-center gap-1">
                <div class="w-2 h-2 bg-red-500 rounded-full"></div>
                <div class="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div class="w-2 h-2 bg-green-500 rounded-full"></div>
            </div>
        </div>

        <div
            class="text-xs px-4 h-8 border-y-0.5 border-solid border-y-gray-200 flex flex-items items-center"
        >
            <div class="flex flex-items items-center gap-2 text-[12px]">
                <lucide-arrow-left />
                <lucide-arrow-right />
                <lucide-rotate-ccw />
            </div>

            <div
                class="ml-4 w-full bg-gray-100 px-2 py-1 rounded-md flex flex-items items-center gap-2"
            >
                <lucide-lock-keyhole class="text-[10px]" />
                {{ url }}
            </div>
        </div>

        <div class="frame-area relative">
            <div class="absolute h-0.5 bg-blue loader"></div>
            <div>
                <slot />
            </div>
        </div>
    </div>
</template>

<style>
@keyframes fade-in {
    from {
        opacity: 0%;
        scale: 98%;
        filter: blur(5px);
    }

    to {
        opacity: 100%;
        scale: 100%;
        filter: blur(0px);
    }
}

.frame-area {
    animation: 250ms fade-in forwards;
}

@keyframes loader-in {
    from {
        opacity: 100%;
        width: 12px;
    }
    to {
        opacity: 0%;
        width: 100%;
    }
}

.loader {
    animation: 500ms loader-in forwards;
}
</style>
