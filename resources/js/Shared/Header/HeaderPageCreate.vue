<template>
    <div class="Polaris-Page-Header__Row">

        <div class="Polaris-Page-Header__BreadcrumbWrapper">
            <div class="Polaris-Box Polaris-Box--printHidden" style="--pc-box-max-width: 100%; --pc-box-padding-inline-end-xs: var(--p-space-100);">
                <a @click="visit" tabindex="0" class="Vtl-NavLink link Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly" role="link">
                    <span class="Polaris-Button__Icon">
                        <span class="Polaris-Icon"><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M16.5 10a.75.75 0 0 1-.75.75h-9.69l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 1 1 1.06 1.06l-2.72 2.72h9.69a.75.75 0 0 1 .75.75Z"></path></svg></span>
                    </span>
                </a>
            </div>
        </div>

        <div class="Polaris-Page-Header__TitleWrapper Polaris-Page-Header__TitleWrapperExpand">
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


    </div>

</template>

<script>
export default {
    props:{
        label:String,
        title:String,
        status:Number,
    },
    methods: {
        visit() {
            this.$emit('visit');
        },

    }
};
</script>
