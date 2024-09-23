<template>

    <div class="Polaris-IndexTable__EmptySearchResultWrapper">
        <div class="Vtl-CustomEmptyState">
            <div class="Polaris-Box" style="--pc-box-padding-block-start-xs: var(--p-space-500); --pc-box-padding-block-end-xs: var(--p-space-1600); --pc-box-padding-inline-start-xs: var(--p-space-0); --pc-box-padding-inline-end-xs: var(--p-space-0);">
                <div class="Polaris-BlockStack" style="--pc-block-stack-inline-align: center; --pc-block-stack-order: column;">
                    <div class="Polaris-EmptyState__ImageContainer">
                        <img :src="image"  alt=""  class="Polaris-EmptyState__Image Polaris-EmptyState--loaded" role="presentation">
                        <div class="Polaris-EmptyState__SkeletonImage Polaris-EmptyState--loaded"></div>
                    </div>

                    <div class="Polaris-Box" style="--pc-box-max-width: 400px;">
                        <div class="Polaris-BlockStack" style="--pc-block-stack-inline-align: center; --pc-block-stack-order: column;">
                            <div class="Polaris-Box" style="--pc-box-padding-block-end-xs: var(--p-space-400);">
                                <div class="Polaris-Box" style="--pc-box-padding-block-end-xs: var(--p-space-150);">
                                    <p class="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--block Polaris-Text--center">{{heading}}</p>
                                </div>
                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--block Polaris-Text--center">{{title}}</span>
                            </div>
                            <div class="Polaris-InlineStack" style="--pc-inline-stack-align: center; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-200); --pc-inline-stack-flex-direction-xs: row;">
                                <button @click="visit" tabindex="0" class="Vtl-NavLink link Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" role="link">
                                    <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">
                                        Create Size Chart
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>



</template>

<script>
export default {
    props: {
        heading: {
            type: String,
            default: ""
        },
        title: {
            type: String,
            default: ""
        },
        image: {
            type: String,
            default: ""
        },
        OpenModal: { //v-if
            type: Boolean, required: true
        },
    },

    methods: {
        visit() {
            this.$emit('visit');
        },
    }
};
</script>
