<script setup lang="ts">
import { ref } from 'vue';


const isOn = ref(false);
</script>

<template>
    <img src="@/assets/menu.svg" class="m-2 absolute negative size-12 z-10" @click="() => { isOn = true }">
    <Transition>
        <div v-if='isOn' @click='() => { isOn = false }' class="wrapper absolute v-screen w-screen z-40">
            <div v-if='isOn' @click.stop class="slider relative z-50 w-[50%] h-screen bg-black p-10 flex flex-col gap-3">
                <div class="text-2xl">Новости</div>
                <div class="text-2xl">Творчество</div>
                <div class="text-2xl">Контакты</div>
            </div>
        </div>
    </Transition>
</template>

<style scoped>
.negative {
    filter: invert(1);
}

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
