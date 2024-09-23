
<template>

    <div  v-if="OpenModal" data-portal-id="modal-:R5eq6:" class="p-theme-light Polaris-ThemeProvider--themeContainer">
        <div class="Polaris-Modal-Dialog__Container Polaris-Modal-Dialog--animateFadeUp Polaris-Modal-Dialog--entering Polaris-Modal-Dialog--entered" data-polaris-layer="true" data-polaris-overlay="true">
            <div role="dialog" aria-modal="true" aria-label=":Req6:" aria-labelledby=":Req6:" tabindex="-1" class="Polaris-Modal-Dialog">
                <div class="Polaris-Modal-Dialog__Modal">

                    <!-- Modal Header -->
                    <div class="Polaris-Box" style="--pc-box-background: var(--p-color-bg-surface-tertiary); --pc-box-border-color: var(--p-color-border); --pc-box-border-style: solid; --pc-box-border-block-end-width: var(--p-border-width-025); --pc-box-padding-block-start-xs: var(--p-space-400); --pc-box-padding-block-end-xs: var(--p-space-400); --pc-box-padding-inline-start-xs: var(--p-space-400); --pc-box-padding-inline-end-xs: var(--p-space-400);">
                        <div class="Polaris-InlineGrid" style="--pc-inline-grid-grid-template-columns-xs: 1fr auto; --pc-inline-grid-gap-xs: var(--p-space-400);">

                            <div class="Polaris-InlineStack" style="--pc-inline-stack-block-align: center; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">
                                <h2 class="Polaris-Text--root Polaris-Text--headingMd Polaris-Text--break" id=":Req6:">{{titleHeader}}</h2>
                            </div>

                            <button @click="ButtoncloseIcon" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantTertiary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly" aria-label="Close" type="button" aria-pressed="false">
                                    <span class="Polaris-Button__Icon">
                                            <span class="Polaris-Icon">
                                              <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                <path d="M13.97 15.03a.75.75 0 1 0 1.06-1.06l-3.97-3.97 3.97-3.97a.75.75 0 0 0-1.06-1.06l-3.97 3.97-3.97-3.97a.75.75 0 0 0-1.06 1.06l3.97 3.97-3.97 3.97a.75.75 0 1 0 1.06 1.06l3.97-3.97 3.97 3.97Z">
                                                </path>
                                              </svg>
                                            </span>
                                    </span>
                            </button>

                        </div>
                    </div>

                    <!--Modal Content if modal == duplicate hide that-->
                    <div v-if="notDuplicate" class="Polaris-Modal__Body Polaris-Scrollable Polaris-Scrollable--vertical Polaris-Scrollable--horizontal Polaris-Scrollable--scrollbarWidthThin" data-polaris-scrollable="true">
                        <div class="Polaris-Modal-Section">
                            <section class="Polaris-Box" style="--pc-box-padding-block-start-xs: var(--p-space-400); --pc-box-padding-block-end-xs: var(--p-space-400); --pc-box-padding-inline-start-xs: var(--p-space-400); --pc-box-padding-inline-end-xs: var(--p-space-400);">{{ titleContent }}</section>
                        </div>
                    </div>

                    <!--this section in page edit to duplicate if modal  == duplicate show that -->
                    <div v-if="isDuplicate" class="Polaris-Modal-Section">
                        <section class="Polaris-Box" style="--pc-box-padding-block-start-xs: var(--p-space-400); --pc-box-padding-block-end-xs: var(--p-space-400); --pc-box-padding-inline-start-xs: var(--p-space-400); --pc-box-padding-inline-end-xs: var(--p-space-400);">
                            <div class="Polaris-BlockStack" style="--pc-block-stack-order: column; --pc-block-stack-gap-xs: var(--p-space-400);">
                                <div class="Polaris-FormLayout__Item Polaris-FormLayout--grouped">

                                    <slot/>

                                </div>
                            </div>
                        </section>
                    </div>

                    <!-- Modal Footer -->
                    <div class="Polaris-InlineStack" style="--pc-inline-stack-block-align: center; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">
                        <div class="Polaris-Box" style="--pc-box-border-color: var(--p-color-border); --pc-box-border-style: solid; --pc-box-border-block-start-width: var(--p-border-width-025); --pc-box-padding-block-start-xs: var(--p-space-400); --pc-box-padding-block-end-xs: var(--p-space-400); --pc-box-padding-inline-start-xs: var(--p-space-400); --pc-box-padding-inline-end-xs: var(--p-space-400); --pc-box-width: 100%;">
                            <div class="Polaris-InlineStack" style="--pc-inline-stack-align: space-between; --pc-inline-stack-block-align: center; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">
                                <div class="Polaris-Box"></div>
                                <div class="Polaris-InlineStack" style="--pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-200); --pc-inline-stack-flex-direction-xs: row;">


                                    <button @click="ButtonCancelClose"  class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" type="button">
                                        <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">{{titleCancel}}</span>
                                    </button>

                                    <!--                                    if modal == duplicate hide that -->
                                    <button v-if="notDuplicate" @click="ButtonClickSave"  class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--toneCritical" type="button">
                                        <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">{{titleSave}}</span>
                                    </button>

                                    <!--                                    if modal == duplicate show that-->
                                    <button v-if="isDuplicate"   @click="ButtonClickSave"  class="Vtl-NavLink link Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" type="button">
                                        <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">{{titleDuplicateSave}}</span>
                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="Polaris-Backdrop">
        </div>
    </div>





</template>


<script>
export default {

    props: {
        OpenModal: {type: Boolean, required: true}, //v-if
        titleHeader: {type: String, default: ""},
        titleContent: {type: String, default: ""},
        titleDuplicateSave: {type: String, default: ""},
        titleCancel: {type: String, default: ""},
        titleSave: {type: String, default: ""},
        notDuplicate: {type: Boolean, default: false},//v-if
        isDuplicate: {type: Boolean, default: false},//v-if

    },

    methods: {
        ButtonClickSave() {
            this.$emit('ButtonClickSave');
        },
        ButtoncloseIcon() {
            this.$emit('ButtoncloseIcon');
        },
        ButtonCancelClose() {
            this.$emit('ButtonCancelClose');
        },
    }
};
</script>
