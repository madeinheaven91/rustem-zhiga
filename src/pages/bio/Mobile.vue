<script setup lang="ts">
import Sidebar from '@/widgets/sidebar';
import Footer from '@/widgets/footer'
</script>

<template>
    <Sidebar selected="bio" />
    <header class="p-4">
        <RouterLink to="/" class="oswald-500 text-xl">РУСТЕМ ЖИГА</RouterLink>
    </header>
    <main>
        <section class="px-10 light-gradient-first">
            <h1 class="pt-5 text-4xl">В начале была бебра...</h1>
            <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.</p>
            <p class="mt-3">Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.</p>
            <p class="mt-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section class="px-10 light-gradient-second">
            <h1 class="pt-5 text-4xl">Затем была бебра...</h1>
            <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.</p>
            <p class="mt-3">Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.</p>
            <p class="mt-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section class="px-10 light-gradient-first">
            <h1 class="pt-5 text-4xl">Лихие бебры...</h1>
            <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.</p>
            <p class="mt-3">Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.</p>
            <p class="mt-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section class="px-10 transition-gradient py-5">
            <img src="@/assets/rustem3.jpg" class="w-full border-4 mt-10">
        </section>
        <section class="px-10 dark-gradient-first">
            <h1 class="pt-5 text-4xl">Конец бебры...</h1>
            <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.</p>
            <p class="mt-3">Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.</p>
            <p class="mt-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</p>
        </section>
        <section class="px-10 dark-gradient-second pb-5">
            <h1 class="pt-5 text-4xl">Новая бебра...?</h1>
            <p class="mt-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.</p>
            <p class="mt-3">Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi
                ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur.</p>
            <p class="mt-3">Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.</p>
        </section>
    </main>
    <Footer />
</template>

<style scoped>
header {
    background: #000;
}

.light-gradient-first {
    background: linear-gradient(167deg, #FFFBEB 50%, #F8EEDF 50%);
}

.light-gradient-second {
    background: linear-gradient(167deg, #F8EEDF 50%, #FFFBEB 50%);
}

.dark-gradient-first * {
    color: white;
}
.dark-gradient-second * {
    color: white;
}

.transition-gradient {
    background: linear-gradient(167deg, #F8EEDF 50%, #111111 50%)
}

.dark-gradient-first {
    background: linear-gradient(167deg, #111111 50%, #1a1515 50%)
}

.dark-gradient-second {
    background: linear-gradient(167deg, #1a1515 50%, #111111  50%)
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
