<script setup lang="ts">
import Navbar from '@/widgets/navbar'
</script>

<template>
    <header class="fixed p-7 w-full flex gap-20 justify-between align-middle z-50">
        <RouterLink to="/" class="oswald-700 text-2xl"> РУСТЕМ ЖИГА </RouterLink>
        <Navbar selected="bio"/>
        <div class="flex gap-5 w-fit justify-center align-middle">
            <a href="https://www.youtube.com/@rustikzhiga/videos" target="_blank"><img src="@/assets/svg/youtube.svg"
                    class="invert size-6"></a>
            <img src="@/assets/svg/whatsapp.svg" class="invert size-6">
            <img src="@/assets/svg/vk.svg" class="invert size-6">
        </div>
    </header>
</template>
