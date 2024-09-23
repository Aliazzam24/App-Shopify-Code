<template>

    <div class="Polaris-Frame-ContextualSaveBar__ActionContainer">
        <div class="Polaris-LegacyStack Polaris-LegacyStack--spacingTight Polaris-LegacyStack--noWrap">

            <div class="Polaris-LegacyStack__Item">
                <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantTertiary Polaris-Button--sizeLarge Polaris-Button--textAlignCenter" type="button">
                    <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">{{title}}</span>
                </button>
            </div>

            <div class="Polaris-LegacyStack__Item">
                <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantTertiary Polaris-Button--sizeLarge Polaris-Button--textAlignCenter" type="button">

                    <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">{{title}}</span>

                    <Spinner size="small" />

                </button>
            </div>


            <div class="Polaris-LegacyStack__Item">
                <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeLarge Polaris-Button--textAlignCenter Polaris-Button--toneSuccess" aria-disabled="false" type="submit">
                    <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">{{title}}</span>

                    <slot></slot>

                </button>
            </div>


        </div>
    </div>

</template>
<script setup>
</script>
