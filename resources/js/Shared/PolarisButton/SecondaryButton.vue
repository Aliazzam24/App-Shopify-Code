<template>

    <button  class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" type="button">
        <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">{{title}}</span>
    </button>

</template>


<<script>
export default {
    name: "SecondaryButton",
    props:{title:String}
}
</script>

