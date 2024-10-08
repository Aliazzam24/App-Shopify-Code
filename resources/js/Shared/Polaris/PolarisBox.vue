<template>


    <!--Polaris-Box-->

    <div class="Polaris-LegacyCard__Header Polaris-LegacyCard__FirstSectionPadding">
        <div class="Polaris-Box" style="--pc-box-padding-block-end-xs: var(--p-space-400);">
            <div class="Polaris-InlineStack" style="--pc-inline-stack-align: space-between; --pc-inline-stack-block-align: center; --pc-inline-stack-wrap: wrap; --pc-inline-stack-flex-direction-xs: row;">
                <p class="Polaris-Text--root Polaris-Text--headingSm">{{title}}</p>
                <button  @click="visit" tabindex="0" class="Vtl-NavLink link Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" role="link">
                    <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Create Size Chart</span>
                </button>
            </div>
        </div>
    </div>

    <!--End-->


</template>



<script>
export default {
    props: {
        title: {type: String, default: ""},
    },

    methods: {
        visit() {
            this.$emit('visit');
        },

    }
};
</script>
