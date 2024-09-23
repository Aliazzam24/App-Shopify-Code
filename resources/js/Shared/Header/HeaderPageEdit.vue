<template>

    <div class="Polaris-Page-Header__Row">



        <div class="Polaris-Page-Header__BreadcrumbWrapper">
            <div class="Polaris-Box Polaris-Box--printHidden" style="--pc-box-max-width: 100%; --pc-box-padding-inline-end-xs: var(--p-space-100);">
                <a @click="visit"  tabindex="0" class="Vtl-NavLink link Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly" role="link">
                    <span class="Polaris-Button__Icon">
                        <span class="Polaris-Icon"><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M16.5 10a.75.75 0 0 1-.75.75h-9.69l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 1 1 1.06 1.06l-2.72 2.72h9.69a.75.75 0 0 1 .75.75Z"></path></svg></span>
                    </span>
                </a>
            </div>
        </div>

        <div class="Polaris-Page-Header__TitleWrapper">
            <div class="Polaris-Header-Title__TitleWrapper">

                <h1 class="Polaris-Header-Title">
                    <span class="Polaris-Text--root Polaris-Text--headingLg Polaris-Text--bold">{{title}}</span>
                </h1>


                <div class="Polaris-Bleed" style="--pc-bleed-margin-block-start-xs: var(--p-space-100); --pc-bleed-margin-block-end-xs: var(--p-space-100);">

                      <span v-if="status === 0" class="Polaris-Badge Polaris-Badge--toneInfo">
                          <span class="Polaris-Text--root Polaris-Text--bodySm">Draft</span>
                      </span>

                    <span v-if="status === 1" class="Polaris-Badge Polaris-Badge--toneSuccess">
                        <span class="Polaris-Text--root Polaris-Text--bodySm">Active</span>
                    </span>

                </div>

            </div>
        </div>

        <!--Button Tutorial and Active app and Dropdown-->
        <div class="Polaris-Page-Header__RightAlign">
            <div class="Polaris-ActionMenu">
                <div class="Polaris-ActionMenu-Actions__ActionsLayoutOuter">

                    <div class="Polaris-ActionMenu-Actions__ActionsLayout">


                        <div class="Polaris-ActionMenu-SecondaryAction">
                            <a  @click="visit" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" aria-label="View size charts" type="button">
                                <span class="Polaris-Button__Icon">
                                    <span class="Polaris-Icon"><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M5.5 16.5a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-9Zm3.25-11.5h2.5v2h-2.5v-2Zm-1.5 0h-1.75a.5.5 0 0 0-.5.5v1.5h2.25v-2Zm0 3.5h-2.25v6a.5.5 0 0 0 .5.5h1.75v-6.5Zm1.5 6.5v-6.5h2.5v6.5h-2.5Zm4-8v-2h1.75a.5.5 0 0 1 .5.5v1.5h-2.25Zm0 1.5v6.5h1.75a.5.5 0 0 0 .5-.5v-6h-2.25Z"></path></svg></span></span>
                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">View size charts</span>
                            </a>
                        </div>

                        <div class="Polaris-ActionMenu-SecondaryAction">
                            <button @click="duplicate"  class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" aria-label="View size charts" type="button">
                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Duplicate</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <!--End-->
    </div>


</template>

<script>

export default {
    props:{
        title:String,
        status:Number,
    },
    methods: {
        visit() {
            this.$emit('visit');
        },
        duplicate() {
            this.$emit('duplicate');
        },

    }
};
</script>
