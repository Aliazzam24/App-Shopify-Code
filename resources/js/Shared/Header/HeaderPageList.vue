
<template>

    <div class="Polaris-Page-Header__Row">


        <div class="Polaris-Page-Header__BreadcrumbWrapper">
            <div class="Polaris-Box Polaris-Box--printHidden" style="--pc-box-max-width: 100%; --pc-box-padding-inline-end-xs: var(--p-space-100);">
                <button @click="visit"  tabindex="0" class="Vtl-NavLink link Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly" role="link">
                         <span class="Polaris-Button__Icon">
                             <span class="Polaris-Icon"><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M16.5 10a.75.75 0 0 1-.75.75h-9.69l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 1 1 1.06 1.06l-2.72 2.72h9.69a.75.75 0 0 1 .75.75Z"></path></svg></span>
                         </span>
                </button>
            </div>
        </div>

        <div class="Polaris-Page-Header__TitleWrapper">
            <div class="Polaris-Header-Title__TitleWrapper">
                <h1 class="Polaris-Header-Title">
                <span class="Polaris-Text--root Polaris-Text--headingLg Polaris-Text--bold">
<!--                     {{title}}-->
                    Size Chart
                </span>
                </h1>
            </div>

            <div class="Polaris-Header-Title__SubTitle Polaris-Header-Title__SubtitleMaxWidth">
<!--                <p class="Polaris-Text&#45;&#45;root Polaris-Text&#45;&#45;bodySm Polaris-Text&#45;&#45;subdued">{{text}}</p>-->
                <p class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--subdued">Reduce returns and increase sales by showing a size chart on product pages.</p>

            </div>

        </div>

        <!--Button Tutorial and Active app and Dropdown-->
        <div class="Polaris-Page-Header__RightAlign">

            <div class="Polaris-ActionMenu">
                <div class="Polaris-ActionMenu-Actions__ActionsLayoutOuter">

                    <div class="Polaris-ActionMenu-Actions__ActionsLayout">
                        <div class="Polaris-ActionMenu-SecondaryAction">
                            <button @click="tutorial" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" type="button">
                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Tutorial</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Polaris-Page-Header__PrimaryActionWrapper">
                <div class="Polaris-Box Polaris-Box--printHidden">
                    <button @click="active" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" type="button">
                        <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Active</span>
                    </button>
                </div>
            </div>

        </div>
        <!--End-->

    </div>


</template>
<script>
export default {
    props:{
        label:String,
        text:String
    },
    methods: {
        visit() {
            this.$emit('visit');
        },
        tutorial() {
            this.$emit('tutorial');
        },
        active() {
            this.$emit('active');
        },

    }
};
</script>
