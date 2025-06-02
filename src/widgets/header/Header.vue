<script setup lang="ts">
import Sidebar from '@/widgets/sidebar';

const props = defineProps<{
    selected?: string
}>()
</script>

<template>
    <Sidebar :selected="props.selected" />
    <header class="p-2">
        <RouterLink to="/" class="oswald-500 text-xl">РУСТЕМ ЖИГА</RouterLink>
    </header>
</template>
