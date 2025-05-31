<script setup lang="ts">
import { reactive } from 'vue';

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
    <nav class="flex gap-10 justify-center align-middle oswald-500 text-lg">
        <RouterLink to="/news" class="tab" :class="newsSelected" data-text="Новости">Новости</RouterLink>
        <RouterLink to="/art" class="tab" :class="artSelected" data-text="Творчество">Творчество</RouterLink>
        <RouterLink to="/bio" class="tab" :class="bioSelected" data-text="Биография">Биография</RouterLink>
        <RouterLink to="/contacts" class="tab" :class="contactsSelected" data-text="Контакты">Контакты</RouterLink>
    </nav>
</template>

<style scoped>
.tab {
    position: relative;
    padding: 0 10px 0 10px;
}

.tab::after {
    content: "";
    position: absolute;
    background-color: #ff5050;
    height: 100%;
    width: 0;
    right: 0;
    bottom: 0px;
    z-index: -1;
    transition: all 0.3s ease;
}

.tab:hover::after {
    left: 0;
    right: auto;
    width: 100%;
}

.tab::before {
    content: attr(data-text);
    position: absolute;
    left: 10px;
    top: 0;
    width: 0;
    height: 100%;
    color: black;
    overflow: hidden;
    white-space: nowrap;
    transition: width 0.9s ease;
}

.tab:hover::before {
    width: 100%;
}

.selected::after {
    content: "";
    position: absolute;
    background-color: #ff5050;
    height: 100%;
    bottom: 0px;
    z-index: -1;
    width: 100%;

}

.selected::before {
    position: absolute;
    left: 10px;
    width: 100%;
    height: 100%;
    color: black;
    overflow: hidden;
    white-space: nowrap;
}
</style>
