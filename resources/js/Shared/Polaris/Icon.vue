<template>
    <span v-html="source" class="Polaris-Icon"></span>
</template>

<script>
export default {
    props: {
        source: {
            type: String,
            required: true
        }
    }
}
</script>
