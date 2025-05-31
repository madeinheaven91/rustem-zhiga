<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { ref, useTemplateRef } from 'vue';
import { RouterLink } from 'vue-router';

const isOn = ref(false);
const target = useTemplateRef<HTMLElement>('sidebar')
onClickOutside(target, _ => { isOn.value = false })
</script>

<template>
    <img src="@/assets/svg/menu.svg" class="m-2 absolute invert size-12 z-10" @click="() => { isOn = true }">
    <Transition>
        <div v-if='isOn' class="wrapper absolute v-screen w-screen z-20">
            <div v-if='isOn' ref="sidebar"
                class="slider relative text-2xl md:textl-6xl z-30 w-max h-screen bg-black p-10 flex flex-col gap-3">
                <RouterLink to="/news">Новости</RouterLink>
                <RouterLink to="/art">Творчество</RouterLink>
                <RouterLink to="/bio">Биография</RouterLink>
                <RouterLink to="/contacts">Контакты</RouterLink>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.wrapper {
    background: rgba(0, 0, 0, 0.7);
}

.v-enter-active {
    transition: all 0.3s ease;
}

.v-leave-active {
    transition: all 0.3s ease;
}

.v-enter-from,
.v-leave-to {
    background-color: rgba(0, 0, 0, 0);
}

.v-enter-active .slider {
    transition: all 0.5s ease-in-out;
    opacity: 1;
}

.v-leave-active .slider {
    transition: all 0.5s ease-in-out;
    opacity: 1;
}

.v-enter-from .slider,
.v-leave-to .slider {
    transform: translateX(-300px);
    opacity: 1;
}
</style>
