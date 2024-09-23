<!-- DefaultLayout.vue -->
<template>
    <AppProvider :i18n="locales">
        <slot />
    </AppProvider>
</template>

<script setup>
import locales from '@ownego/polaris-vue/dist/locales/en.json'; // Import the localization file
</script>
