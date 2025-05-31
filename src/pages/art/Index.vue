<script setup lang="ts">
import Desktop from './Desktop.vue';
import Mobile from './Mobile.vue';
import Tablet from './Tablet.vue';
import { computed } from 'vue';
import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
const isMobile = computed(() => width.value < 640);
const isTablet = computed(() => width.value >= 640 && width.value < 1024);
const isDesktop = computed(() => width.value >= 1024);
</script>

<template>
    <Mobile v-if="isMobile" />
    <Tablet v-if="isTablet" />
    <Desktop v-if="isDesktop" />
</template>
