<template>
    <div class="Polaris-LegacyStack__Item">
        <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantTertiary Polaris-Button--sizeLarge Polaris-Button--textAlignCenter" type="button">

            <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">{{title}}</span>

            <slot></slot>

        </button>
    </div>
</template>


<<script>
export default {
    name: "SpinnerButton",
    props:{title:String}
}
</script>

<style>
.Polaris-Spinner svg {
    fill: rgb(255, 255, 255) !important;
}
.Polaris-Spinner--sizeSmall svg {
    display: flex !important;
    height: 1.25rem !important;
    width: 1.48rem !important;
}
</style>
