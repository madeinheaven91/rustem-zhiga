<script setup lang="ts">
import Navbar from '@/widgets/navbar'
import Footer from '@/widgets/footer'
</script>

<template>
    <header class="p-7 w-full flex gap-20 justify-between align-middle z-50">
        <RouterLink to="/" class="oswald-700 text-2xl"> РУСТЕМ ЖИГА </RouterLink>
        <Navbar selected="contacts" />
        <div class="flex gap-5 w-fit justify-center align-middle">
            <a href="https://www.youtube.com/@rustikzhiga/videos" target="_blank"><img src="@/assets/svg/youtube.svg"
                    class="invert size-6"></a>
            <img src="@/assets/svg/whatsapp.svg" class="invert size-6">
            <img src="@/assets/svg/vk.svg" class="invert size-6">
        </div>
    </header>
    <main class="h-screen px-30 light-gradient-first">
        <div class="flex gap-5 justify-between pt-10">
            <div class="text-xl">
                <h1 class="text-4xl">Организация концертов</h1>
                <p class="mt-5">Концертное агенство ООО "Бебра"</p>
                <p>427001, г. Казань, ул. Большая Малая, 50/1, офис 505</p>
                <p class="mt-5">Рабочий телефон: +7 (987) 654-3210</p>
                <p>Факс: +7 (123) 456-7890</p>
                <p class="mt-5">Рабочая почта:
                    <a class="link" href="mailto:rustemzhiga@mail.ru">rustemzhiga@mail.ru</a>
                </p>
            </div>
            <img src="@/assets/rustem3.jpg" class="w-[50%] border-4">
        </div>
    </main>
    <Footer />
</template>

<style scoped>
main {
    color: black;
}

.link {
    @apply relative z-1;
    padding-inline: 5px;
    text-decoration: underline #ff5050 2px;
}

.link::after {
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

.link:hover::after {
    left: 0;
    right: auto;
    width: 100%;
}
</style>
