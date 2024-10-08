<template>
    <div  v-for="(icon, index) in icons"
          :key="index"
          class="Apex-ButtonStyle__Option Polaris-Box"
          :class="{ 'selected': selectedIcon === icon.value }"
          @click="selectIcon(icon.value)"
          :style="{
          borderColor: selectedIcon === icon.value ? 'var(--p-color-border-emphasis)' : 'transparent',
          borderStyle: 'solid',
          borderWidth: '2px'
        }"
    >

        <ThumbnailIcon :src="icon.src"/>

    </div>
</template>

<script setup>
import ThumbnailIcon from "../Thumbnail/ThumbnailIcon.vue";

const props = defineProps({
    icons: Array,
    selectIcon: Function,
    selectedIcon: String,
});
</script>
<style scoped>
.Apex-ButtonStyle__Option{
    --pc-box-border-color: var(--p-color-border-emphasis);
    --pc-box-border-style: solid;
    --pc-box-border-radius: var(--p-border-radius-100);
    --pc-box-border-width: var(--p-border-width-050);
    --pc-box-padding-block-start-xs: var(--p-space-200);
    --pc-box-padding-block-end-xs: var(--p-space-200);
    --pc-box-padding-inline-start-xs: var(--p-space-200);
    --pc-box-padding-inline-end-xs: var(--p-space-200);

    &:hover:not(.selected) {
        border-color: #c0bcbc !important;
    }
}
</style>
