<script setup lang="ts">
import Sidebar from '@/widgets/sidebar';
import Footer from '@/widgets/footer'
</script>

<template>
    <Sidebar selected="contacts" />
    <header class="p-4">
        <RouterLink to="/" class="oswald-500 text-xl">РУСТЕМ ЖИГА</RouterLink>
    </header>
    <main class="h-screen px-15">
        <div class="flex gap-5 flex-col justify-between pt-10">
            <div>
                <h1 class="text-4xl">Организация концертов</h1>
                <p class="mt-5">Концертное агенство ООО "Бебра"</p>
                <p>427001, г. Казань, ул. Большая Малая, 50/1, офис 505</p>
                <p class="mt-5">Рабочий телефон: +7 (987) 654-3210</p>
                <p>Факс: +7 (123) 456-7890</p>
                <p class="mt-5">Рабочая почта:
                    <a class="link" href="mailto:rustemzhiga@mail.ru">rustemzhiga@mail.ru</a>
                </p>
            </div>
            <img src="@/assets/rustem3.jpg" class="w-full border-4 mt-10">
        </div>
    </main>
    <Footer />
</template>

<style scoped>
header {
    background: #000;
}

main {
    background: linear-gradient(167deg, #FFFBEB 50%, #F8EEDF 50%);
}

main * {
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
