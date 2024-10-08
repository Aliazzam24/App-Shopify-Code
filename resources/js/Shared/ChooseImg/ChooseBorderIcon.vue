<template>

    <div v-for="(border, index) in borders"
         :key="index"
         class="Apex-TableStyle__Option Polaris-Box"
         :class="{'selected': selectedBorder === border.value }"
         @click="selectBorder(border.value)"
         :style="{'--pc-box-border-color': selectedBorder === border.value ? 'var(--p-color-border-emphasis)' : 'var(--p-color-border-disabled)'}"
    >
        <ThumbnailBorder :src="border.src" :value="border.value"/>
    </div>


</template>

<script setup>
import ThumbnailBorder from "../Thumbnail/ThumbnailBorder.vue";

const props = defineProps({
    borders: Array,
    selectBorder: Function,
    selectedBorder: String,
});
</script>
<style scoped>

/*Table Style Border*/
.Apex-TableStyle__Option {

    --pc-box-border-style: solid;
    --pc-box-border-radius: var(--p-border-radius-200);
    --pc-box-border-width: var(--p-border-width-050);
    --pc-box-padding-block-start-xs: var(--p-space-200);
    --pc-box-padding-block-end-xs: var(--p-space-200);
    --pc-box-padding-inline-start-xs: var(--p-space-200);
    --pc-box-padding-inline-end-xs: var(--p-space-200);
    max-width: 100%;
    max-height: 100%;
    min-width: 100%;
    min-height: 100%;

    /* Hover effect */
    &:hover:not(.selected) {
        border-color: #c0bcbc !important;
    }
}
</style>
