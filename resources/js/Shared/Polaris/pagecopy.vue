<template>

    <div class="Polaris-Page">

        <!--Section to redirect back and Tutorial and Activate App-->
        <div class="Polaris-Box" style="--pc-box-padding-block-end-xs: var(--p-space-400); --pc-box-padding-block-end-md: var(--p-space-600); --pc-box-padding-block-start-xs: var(--p-space-400); --pc-box-padding-block-start-md: var(--p-space-600); --pc-box-padding-inline-start-xs: var(--p-space-400); --pc-box-padding-inline-start-sm: var(--p-space-0); --pc-box-padding-inline-end-xs: var(--p-space-400); --pc-box-padding-inline-end-sm: var(--p-space-0); position: relative;">

            <div class="Polaris-Page__Content">
                <div class="Polaris-Page-Header--mediumTitle">

                    <div class="Polaris-Page-Header__Row">
                        <div class="Polaris-Page-Header__BreadcrumbWrapper">
                            <div class="Polaris-Box Polaris-Box--printHidden" style="--pc-box-max-width: 100%; --pc-box-padding-inline-end-xs: var(--p-space-100);">
                                <nav role="navigation">
                                    <Link href="/" tabindex="0" class="Vtl-NavLink link Polaris-Button Polaris-Button--iconOnly" role="link">
                                   <span class="Polaris-Button__Content">
                                     <span class="Polaris-Button__Icon">
                                        <span class="Polaris-Icon">
                                          <span class="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
                                             <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                 <path fill-rule="evenodd" d="M16.75 10a.75.75 0 0 1-.75.75h-9.69l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06l-2.72 2.72h9.69a.75.75 0 0 1 .75.75Z"></path>
                                             </svg>
                                        </span>
                                     </span>
                                   </span>
                                    </Link>
                                </nav>
                            </div>
                        </div>

                        <div class="Polaris-Page-Header__TitleWrapper">
                            <h1 class="Polaris-Header-Title Polaris-Header-Title__TitleWithSubtitle">Visitor Counter</h1>
                            <div class="Polaris-Header-Title__SubTitle">
                                <p class="Polaris-Text--root Polaris-Text--bodySm">Drive sales and urgency with our Product Scarcity app. Showcase limited stock,and boost conversions with dynamic quantity countdowns.</p>
                            </div>
                        </div>

                        <div class="Polaris-Page-Header__RightAlign">

                            <div class="Polaris-ActionMenu-SecondaryAction">
                                <button class="Polaris-Button" type="button">
                                <span class="Polaris-Button__Content">
                                   <span class="Polaris-Button__Text">Tutorial</span>
                                </span>
                                </button>
                            </div>


                            <div class="Polaris-Page-Header__PrimaryActionWrapper">
                                <div class="Polaris-Box Polaris-Box--printHidden">

                                    <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" type="button">
                                        <span class="Polaris-Button__Text">Activate App</span>
                                    </button>

                                </div>
                            </div>

                        </div>

                    </div>
                </div>

                <!--content-->
                <div class="content">
                    <slot></slot>
                </div>
                <!--End-->

            </div>
        </div>
        <!--End-->




    </div>



</template>


<script>
export default {
    name: "page",
    props: {
        showActions: {
            type: Boolean,
            default: false
        },
        fullWidth: {
            type: Boolean,
            default: false
        }
    },
    data: function () {
        return {
            showDropdown: false,
            dropdownTop: 0,
            dropdownLeft: 0
        };
    },
};
</script>





