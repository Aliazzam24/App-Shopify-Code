<script setup>
defineProps({
    value: {
        type: String,
    },
});
</script>

<template>

    <div class="Polaris-Labelled__HelpText">
         <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--break Polaris-Text--subdued">
              <span v-if="value" v-html="value"></span>
              <span v-else><slot /></span>
         </span>
    </div>

</template>

