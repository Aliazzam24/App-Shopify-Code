<script setup>
defineProps({
    value: {
        type: String,
    },
});
</script>

<template>
    <span v-if="value" v-html="value"></span>
    <span v-else><slot /></span>
</template>

