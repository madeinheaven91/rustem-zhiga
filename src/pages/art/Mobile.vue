<script setup lang="ts">
import Header from '@/widgets/header';
import Footer from '@/widgets/footer'
</script>

<template>
    <Header selected="art" />
    <main>
        <section class="p-10 dark-gradient-first flex flex-col items-center">
            <img src="@/assets/cover1.png" class="w-[80%] border-8 border-double">
            <h3 class="mt-5 text-lg font-bold tracking-wider">Лучший альбом в мире</h3>
            <h3 class="text-gray-400 text-sm text-center">Жемчужина творчества Рустема Жиги</h3>
        </section>
        <section class="p-10 dark-gradient-second flex flex-col items-center">
            <img src="@/assets/cover2.jpg" class="w-[80%] border-8 border-double">
            <h3 class="mt-5 text-lg font-bold tracking-wider text-center">Еще один лучший альбом в мире</h3>
            <h3 class="text-gray-400 text-sm text-center">Арт-проект для своих пацанов</h3>
        </section>
        <section class="p-10 pb-10 dark-gradient-first flex flex-col items-center">
            <img src="@/assets/cover3.jpg" class="w-[80%] border-8 border-double">
            <h3 class="mt-5 text-lg font-bold tracking-wider">Артхаус проект</h3>
            <h3 class="text-gray-400 text-sm text-center">Поймут лишь немногие</h3>
        </section>
    </main>
    <Footer />
</template>

<style scoped>
</style>
