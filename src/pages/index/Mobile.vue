<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useWindowSize } from '@vueuse/core'
import Sidebar from '@/widgets/sidebar';
import Title from '@/widgets/title';
import Footer from '@/widgets/footer'

const { height } = useWindowSize()

const imgHeight = ref("")
const imgWidth = ref("")
onMounted(() => {
    let img = document.getElementById("image")
    let scale: number = parseFloat((height.value / (img?.clientHeight as number)).toPrecision(2))
    imgHeight.value = `${img?.clientHeight as number * scale}px`
    imgWidth.value = `${img?.clientWidth as number * scale}px`
})

</script>
<template>
    <div class="relative overflow-hidden h-screen w-screen">
        <Sidebar />
        <img id="image" src="@/assets/musician.png">
        <Title class="pt-80" />
    </div>
    <Footer />
</template>

<style lang="css" scoped>
#image {
    @apply absolute;
    width: v-bind(imgWidth);
    max-width: v-bind(imgWidth);
    height: v-bind(imgHeight);
    max-height: v-bind(imgHeight);
    animation: fade 4s ease forwards, parallax 60s forwards;
    transform: translateX(-500px);
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
