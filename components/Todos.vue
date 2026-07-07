<script setup lang="ts">
import { ref } from "vue";
import Button from "./Button.vue";

interface TodoItem {
    id: number;
    text: string;
    completed: boolean;
}

const newTodoText = ref("");
const todos = ref<TodoItem[]>([]);

const addTodo = () => {
    if (!newTodoText.value.trim()) return;

    todos.value.push({
        id: Date.now(),
        text: newTodoText.value.trim(),
        completed: false,
    });

    newTodoText.value = "";
};

const removeTodo = (id: number) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
};
</script>

<template>
    <div
        class="max-w-md mt-4 mx-auto p-6 rounded-lg shadow-md dark:text-white/80"
    >
        <h1 class="text-2xl font-bold mb-4 text-center">待辦事項</h1>

        <div class="flex gap-2 mb-6">
            <input
                v-model="newTodoText"
                type="text"
                placeholder="加入提醒事項..."
                class="flex-1 px-3 border py-2 border-main rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-transparent"
            />
            <button
                @click="addTodo"
                class="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
                + 新增
            </button>
        </div>

        <ul v-if="todos.length > 0" class="space-y-3">
            <li
                v-for="todo in todos"
                :key="todo.id"
                class="flex items-center justify-between border border-main rounded-lg p-4 !ml-0"
            >
                <label
                    class="flex items-center gap-3 cursor-pointer select-none flex-1 px-4"
                >
                    <input
                        type="checkbox"
                        v-model="todo.completed"
                        class="w-5 h-5 rounded focus:ring-blue-500"
                    />
                    <span
                        :class="{
                            'line-through text-gray-400': todo.completed,
                        }"
                    >
                        {{ todo.text }}
                    </span>
                </label>
            </li>
        </ul>

        <p v-else class="text-center opacity-30% text-sm">
            已經沒事到得內卷了嗎？
        </p>
    </div>
</template>
