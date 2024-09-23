<script>
import { Link } from '@inertiajs/vue3';

export default {
    components: {
        Link
    },
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
    methods: {
        toggleDropdown: function () {
            this.showDropdown = !this.showDropdown;
            let btnRect = this.$refs.dropdownContainer.getBoundingClientRect();
            console.log(btnRect);
            this.dropdownTop = btnRect.top + btnRect.height;
            this.dropdownLeft = btnRect.left - 10;
        }
    }
};
</script>

<template>

    <div class="Polaris-Page" style="height: 60rem">
        <div>
            <!--Header-->
            <div class="Polaris-Box" style="--pc-box-padding-block-start-xs:var(--p-space-400);--pc-box-padding-block-start-md:var(--p-space-600);--pc-box-padding-block-end-xs:var(--p-space-400);--pc-box-padding-block-end-md:var(--p-space-600);--pc-box-padding-inline-start-xs:var(--p-space-400);--pc-box-padding-inline-start-sm:var(--p-space-0);--pc-box-padding-inline-end-xs:var(--p-space-400);--pc-box-padding-inline-end-sm:var(--p-space-0);position:relative" v-if="showActions">

                <div role="status">
                    <p class="Polaris-Text--root Polaris-Text--visuallyHidden">Size Chart</p>
                </div>

                <div class="Polaris-Page-Header--mediumTitle" v-if="showActions">
                    <div class="Polaris-Page-Header__Row">

                        <!-- Link To redirect back page and Icon -->
                        <div class="Polaris-Page-Header__BreadcrumbWrapper">
                            <div class="Polaris-Box Polaris-Box--printHidden" style="--pc-box-max-width:100%;--pc-box-padding-inline-end-xs:var(--p-space-100)">
                                <nav role="navigation">

                                    <Link href="/" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly" aria-label="Products"  data-polaris-unstyled="true">
                                       <span class="Polaris-Button__Icon">
                                          <span class="Polaris-Icon">
                                             <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                <path fill-rule="evenodd" d="M16.75 10a.75.75 0 0 1-.75.75h-9.69l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 1.06l-2.72 2.72h9.69a.75.75 0 0 1 .75.75Z"></path>
                                             </svg>
                                          </span>
                                       </span>
                                    </Link>

                                </nav>
                            </div>
                        </div>
                        <!-- End -->

                        <div class="Polaris-Page-Header__TitleWrapper">

                            <div class="Polaris-Header-Title__TitleWrapper">
                                <h1 class="Polaris-Header-Title Polaris-Header-Title__TitleWithSubtitle">Size Chart</h1>
                            </div>

                            <div class="Polaris-Header-Title__SubTitle Polaris-Header-Title__SubtitleCompact">
                                <p class="Polaris-Text--root Polaris-Text--bodySm">Drive sales and urgency with our Product Scarcity app. Showcase limited stock,and boost conversions with dynamic quantity countdowns.</p>
                            </div>

                        </div>

                        <!--Button Tutorial and Active app and Dropdown-->
                        <div class="Polaris-Page-Header__RightAlign">
                            <div class="Polaris-Page-Header__Actions">

                                <!--Button Tutorial-->
                                <div class="Polaris-ActionMenu-SecondaryAction">
                                    <button class="Polaris-Button" type="button">
                                         <span class="Polaris-Button__Content">
                                           <span class="Polaris-Button__Text">Tutorial</span>
                                         </span>
                                    </button>
                                </div>
                                <!--End-->


                                <!--Active app and dropdown-->
                                <div class="Polaris-Page-Header__PrimaryActionWrapper">
                                    <div class="Polaris-Box Polaris-Box--printHidden">

                                        <button style="background-color:white; color:black" class="Polaris-Button Polaris-Button--pressable  Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" type="button">
                                            <span class="Polaris-Button__Text">Activate App</span>
                                        </button>

                                    </div>
                                </div>
                                <!--End-->

                            </div>
                        </div>
                        <!--End-->

                    </div>
                </div>

            </div>
            <!--End-->

            <!--My Content-->
            <div class="content">
                <slot></slot>
            </div>
            <!--End-->

        </div>

    </div>

</template>

<!--<style scoped>-->
<!--.dropdown-menu {-->
<!--    position: absolute;-->
<!--}-->

<!--.content {-->
<!--    margin-bottom: 10px;-->
<!--}-->

<!--</style>-->



