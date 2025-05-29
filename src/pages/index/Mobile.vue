<script setup lang="ts">
import { onMounted } from 'vue';
import Sidebar from '@/widgets/sidebar/Sidebar.vue';

onMounted(() => {

})

</script>

<template>
    <div class="wrapper h-screen w-screen">
        <Sidebar />
        <div class="pt-80 title">
            <div class="w-50 h-px bg-white" />
            <span class="text-6xl great-vibes mt-5">Рустем Жига</span>
            <span class="text-2xl text-gray-200 caveat-400">Музыка для души</span>
        </div>
    </div>
    <footer class="h-12 text-white">madeinheaven91</footer>
</template>

<style lang="css" scoped>
.wrapper {
    background-image: url(@/assets/rustem.jpg);
    background-repeat: no-repeat;
    background-size: 100vh;
        animation: images 30s ease-in-out infinite;
}

@keyframes images {
    0% {
        background-position-x: -100px;
    }
    50% {
        background-position-x: -50px;
    }
    100% {
        background-position-x: -100px;
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
