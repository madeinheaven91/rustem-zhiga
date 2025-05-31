<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Title from '@/widgets/title';
import Footer from '@/widgets/footer'
import Navbar from '@/widgets/navbar'

const width = ref("")
onMounted(() => {
    let img = document.getElementById("image")
    width.value = img?.clientHeight as number + "px"
})
// FIXME: fix the fucking image
</script>

<template>
    <div class="relative overflow-hidden h-screen w-screen">
        <img id="image" class="w-screen" src="@/assets/rustem2.jpg">
        <header class="relative p-7 flex gap-20 justify-between align-middle z-50">
            <RouterLink to="/" class="oswald-700 text-2xl"> РУСТЕМ ЖИГА </RouterLink>
            <Navbar />
            <div class="flex gap-5 w-fit justify-center align-middle">
                <a href="https://www.youtube.com/@rustikzhiga/videos" target="_blank"><img
                        src="@/assets/svg/youtube.svg" class="invert size-6"></a>
                <img src="@/assets/svg/whatsapp.svg" class="invert size-6">
                <img src="@/assets/svg/vk.svg" class="invert size-6">
            </div>
        </header>
        <Title class="mt-60" />
    </div>
    <Footer />
</template>

<style lang="css" scoped>
#image {
    @apply absolute;
    /* width: v-bind(width); */
    /* max-width: v-bind(width); */
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
