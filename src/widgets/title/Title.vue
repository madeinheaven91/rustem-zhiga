<script setup lang="ts">
import { onMounted, ref } from 'vue';

const mounted = ref(false);
onMounted(() => {
    setTimeout(() => {
        mounted.value = true
    }, 500);

})
</script>

<template>
    <div class="title">
        <div v-if="mounted" class="unfold w-50 md:w-80 h-px bg-white" />
        <span v-if="mounted" class="fade-slide text-6xl md:text-7xl great-vibes mt-5">Рустем Жига</span>
    </div>
</template>

<style scoped>
.unfold {
    animation-delay: 500ms;
    animation: unfold 2.5s ease forwards;
}

@keyframes unfold {
    from {
        width: 0;
    }
}

.fade-slide {
    animation-delay: 500ms;
    animation: fade-slide 2.5s ease forwards;
}

@keyframes fade-slide {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
}

.title {
    @apply flex flex-col items-center;
}

.title * {
    @apply z-10;
}
</style>
