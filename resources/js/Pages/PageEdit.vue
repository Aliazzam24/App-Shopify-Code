<script setup>

</script>

<template>
    <div class="Polaris-Page" style="height: 60rem">
        <div>
            <!--Header-->
            <div class="Polaris-Box" style="--pc-box-padding-block-start-xs:var(--p-space-400);--pc-box-padding-block-start-md:var(--p-space-600);--pc-box-padding-block-end-xs:var(--p-space-400);--pc-box-padding-block-end-md:var(--p-space-600);--pc-box-padding-inline-start-xs:var(--p-space-400);--pc-box-padding-inline-start-sm:var(--p-space-0);--pc-box-padding-inline-end-xs:var(--p-space-400);--pc-box-padding-inline-end-sm:var(--p-space-0);position:relative">

                <div role="status">
                    <p class="Polaris-Text--root Polaris-Text--visuallyHidden">Size Chart</p>
                </div>

                <div class="Polaris-Page-Header--mediumTitle">
                    <div class="Polaris-Page-Header__Row">

                        <!-- Link To redirect back page and Icon -->
                        <div class="Polaris-Page-Header__BreadcrumbWrapper">
                            <div class="Polaris-Box Polaris-Box--printHidden" style="--pc-box-max-width:100%;--pc-box-padding-inline-end-xs:var(--p-space-100)">
                                <nav role="navigation">

                                    <Link href="/app/size_chart/list" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly" aria-label="Products"  data-polaris-unstyled="true">
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

                        </div>

                        <!--Button Tutorial and Active app and Dropdown-->
                        <div class="Polaris-Page-Header__RightAlign">
                            <div class="Polaris-ActionMenu">
                                <div class="Polaris-ActionMenu-Actions__ActionsLayoutOuter">

                                    <div class="Polaris-ActionMenu-Actions__ActionsLayout">


                                        <div class="Polaris-ActionMenu-SecondaryAction">
                                            <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" aria-label="Open preview" type="button"><span class="Polaris-Button__Icon"><span class="Polaris-Icon"><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M13 10a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm-1.5 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path><path fill-rule="evenodd" d="M10 4c-2.476 0-4.348 1.23-5.577 2.532a9.266 9.266 0 0 0-1.4 1.922 5.98 5.98 0 0 0-.37.818c-.082.227-.153.488-.153.728s.071.501.152.728c.088.246.213.524.371.818.317.587.784 1.27 1.4 1.922 1.229 1.302 3.1 2.532 5.577 2.532 2.476 0 4.348-1.23 5.577-2.532a9.265 9.265 0 0 0 1.4-1.922 5.98 5.98 0 0 0 .37-.818c.082-.227.153-.488.153-.728s-.071-.501-.152-.728a5.984 5.984 0 0 0-.371-.818 9.269 9.269 0 0 0-1.4-1.922c-1.229-1.302-3.1-2.532-5.577-2.532Zm-5.999 6.002v-.004c.004-.02.017-.09.064-.223a4.5 4.5 0 0 1 .278-.608 7.768 7.768 0 0 1 1.17-1.605c1.042-1.104 2.545-2.062 4.487-2.062 1.942 0 3.445.958 4.486 2.062a7.77 7.77 0 0 1 1.17 1.605c.13.24.221.447.279.608.047.132.06.203.064.223v.004c-.004.02-.017.09-.064.223a4.503 4.503 0 0 1-.278.608 7.768 7.768 0 0 1-1.17 1.605c-1.042 1.104-2.545 2.062-4.487 2.062-1.942 0-3.445-.958-4.486-2.062a7.766 7.766 0 0 1-1.17-1.605 4.5 4.5 0 0 1-.279-.608c-.047-.132-.06-.203-.064-.223Z"></path></svg></span></span><span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Preview size chart</span></button>
                                        </div>

                                        <div class="Polaris-ActionMenu-SecondaryAction">
                                            <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" aria-label="View size charts" type="button">
                                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Duplicate</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <!--End-->

                    </div>
                </div>

            </div>
            <!--End-->

            <!--My Content-->
            <div class="content">

            </div>
            <!--End-->

        </div>

    </div>

</template>

<style scoped>

</style>
