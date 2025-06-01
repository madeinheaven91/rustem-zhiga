<script setup lang="ts">
import { onClickOutside } from '@vueuse/core';
import { reactive, ref, useTemplateRef } from 'vue';
import { RouterLink } from 'vue-router';

const isOn = ref(false);
const target = useTemplateRef<HTMLElement>('sidebar')
onClickOutside(target, _ => { isOn.value = false })

const props = defineProps<{
    selected?: string
}>()
const newsSelected = reactive({
    selected: props.selected === "news"
})
const artSelected = reactive({
    selected: props.selected === "art"
})
const bioSelected = reactive({
    selected: props.selected === "bio"
})
const contactsSelected = reactive({
    selected: props.selected === "contacts"
})
</script>

<template>
    <img src="@/assets/svg/menu.svg" class="m-2 absolute invert size-12 z-10 right-0" @click="() => { isOn = true }">
    <Transition>
        <div v-if='isOn' class="wrapper absolute v-screen w-screen z-20 flex justify-end">
            <div v-if='isOn' ref="sidebar"
                class="slider relative text-2xl md:textl-6xl oswald-500 z-30 w-max h-screen bg-black p-10 flex flex-col gap-3">
                <RouterLink to="/news" class="tab" :class="newsSelected" data-text="Новости">Новости</RouterLink>
                <RouterLink to="/art" class="tab" :class="artSelected" data-text="Творчество">Творчество</RouterLink>
                <RouterLink to="/bio" class="tab" :class="bioSelected" data-text="Биография">Биография</RouterLink>
                <RouterLink to="/contacts" class="tab" :class="contactsSelected" data-text="Контакты">Контакты
                </RouterLink>
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
    transform: translateX(300px);
    opacity: 1;
}

.tab {
    position: relative;
    padding: 0 10px 0 10px;
}

.selected {
    color: black;
}

.selected::after {
    content: "";
    position: absolute;
    background-color: #ff5050;
    height: 100%;
    bottom: 0px;
    left: 0;
    z-index: -1;
    width: 100%;

}
</style>
