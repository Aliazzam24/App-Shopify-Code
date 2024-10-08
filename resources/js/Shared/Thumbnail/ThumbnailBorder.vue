<template>
    <div class="Apex-NewThemePickerItem">
         <p class="Polaris-Text--root">{{ value }}</p>
        <div class="Apex-TableStyle__Border" v-html="src"></div>
    </div>

</template>

<script setup lang='ts'>
import { defineProps } from 'vue'

const props = defineProps({
    src: String,
    value: String
})
</script>

<style scoped>

/*Table Style Border*/
.Apex-TableStyle__Border{
    display: flex;
    justify-content: center;
    align-items: center;
}

/*Style Icon and Border*/
.Apex-NewThemePickerItem {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: var(--p-space-100);
    height: 100%;

}
</style>
