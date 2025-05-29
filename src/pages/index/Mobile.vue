<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Sidebar from '@/widgets/sidebar/Sidebar.vue';

const width = ref("");
onMounted(() => {
    let img = document.getElementById("image")
    width.value = img?.clientHeight as number + "px";
})

</script>

<template>
    <div class="relative overflow-hidden h-screen w-screen">
        <Sidebar />
        <img id="image" class="h-screen" src="@/assets/rustem.jpg">
        <div class="pt-80 title">
            <div class="w-50 h-px bg-white" />
            <span class="text-6xl great-vibes mt-5">Рустем Жига</span>
            <span class="text-2xl caveat-400">Музыка для души</span>
        </div>
    </div>
    <footer class="p-2 text-gray-300 text-center">Сделано студией канал шопенгауэра</footer>
</template>

<style lang="css" scoped>
#image {
    @apply absolute;
    width: v-bind(width);
    max-width: v-bind(width);
    animation: images 60s;
    transform: translateX(-100px);
    filter: brightness(0.8);
}

@keyframes images {
    0% {}

    100% {
        scale: 130%;
    }
}

.overlay {
    background: rgba(255, 255, 255, 1);
    background: radial-gradient(circle, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.9) 50%, rgba(0, 0, 0, 1) 100%);
}

.image {
    @apply absolute w-max h-max;
}

.image img {
    @apply relative h-screen w-auto object-contain -z-1;
    /* transform: translateX(-100px); */
}

.title {
    @apply flex flex-col items-center;
}

.title * {
    @apply z-10;
}
</style>
