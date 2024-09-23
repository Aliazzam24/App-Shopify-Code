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
    name: "DiscardButton",
    props:{title:String}
}
</script>
