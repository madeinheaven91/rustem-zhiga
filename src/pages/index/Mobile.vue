<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Sidebar from '@/widgets/sidebar';
import Title from '@/widgets/title';
import Footer from '@/widgets/footer'

const width = ref("")
onMounted(() => {
    let img = document.getElementById("image")
    width.value = img?.clientHeight as number + "px"
})

</script>

<template>
    <div class="relative overflow-hidden h-screen w-screen">
        <Sidebar />
        <img id="image" class="h-screen" src="@/assets/rustem.jpg">
        <Title class="pt-80" />
    </div>
    <Footer />
</template>

<style lang="css" scoped>
#image {
    @apply absolute;
    width: v-bind(width);
    max-width: v-bind(width);
    animation: fade 4s ease forwards, parallax 60s forwards;
    transform: translateX(-100px);
    filter: brightness(0.8);
}

@keyframes parallax {
    to {
        scale: 130%;
    }
}

@keyframes fade {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}
</style>
