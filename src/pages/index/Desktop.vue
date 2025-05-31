<script setup lang="ts">
import { onMounted, ref } from 'vue';
import Title from '@/widgets/title';
import Footer from '@/widgets/footer'

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
            <div class="flex gap-10 justify-center align-middle oswald-500 text-lg">
                <RouterLink to="/news" class="tab">Новости</RouterLink>
                <RouterLink to="/art" class="tab">Творчество</RouterLink>
                <RouterLink to="/bio" class="tab">Биография</RouterLink>
                <RouterLink to="/contacts" class="tab">Контакты</RouterLink>
            </div>
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
.v-enter-active,
.v-leave-active {
    transition: all 0.5s ease;
}

.v-enter-from,
.v-leave-to {
    width: 0;
}

.v-enter-to,
.v-leave-from {
    width: 100%;
}


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

/* TODO: need a cool hover animation */
.tab:hover {
    text-decoration: underline;
}
</style>
