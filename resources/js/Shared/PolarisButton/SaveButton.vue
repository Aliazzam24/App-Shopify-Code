<template>

    <div class="Polaris-LegacyStack__Item">
        <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeLarge Polaris-Button--textAlignCenter Polaris-Button--toneSuccess" aria-disabled="false" type="submit">
            <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">{{title}}</span>
        </button>
    </div>

</template>


<<script>
export default {
    name: "SaveButton",
    props:{title:String}
}
</script>

