<template>

    <div class="Polaris-Grid" :style="`--pc-grid-columns-xs:columnSpan.${columnSpan.xs};--pc-grid-columns-sm:${columnSpan.sm};--pc-grid-columns-md:${columnSpan.md};--pc-grid-columns-lg:${columnSpan.lg};--pc-grid-columns-xl:${columnSpan.xl};`">

        <slot></slot>

    </div>
 </template>

<style scoped>

</style>

<script>
export default {
    name: "Grid",
    props: {columnSpan:null}
}
</script>
