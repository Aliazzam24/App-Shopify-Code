<template>
    <div class="Apex-NewThemePickerItem">
        <div class="Apex-ButtonStyle__Icon" v-html="src">
        </div>
    </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue'

const props = defineProps({
    src: String
})
</script>

<style scoped>

/*Button Style Icon*/
.Apex-ButtonStyle__Icon{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #f0f0f0;
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
