<script setup>
import { Link } from '@inertiajs/vue3';
import Page from "@/Shared/Polaris/Page.vue";
import PolarisBox from "../Shared/Polaris/PolarisBox.vue";
import Placeholder from "@/Shared/PolarisText/Label.vue";
import Layout from "@/Shared/Polaris/Layout.vue";
</script>

<template>

    <Page>

        <div class="Polaris-Box" style="--pc-box-padding-block-start-xs: var(--p-space-400); --pc-box-padding-block-start-md: var(--p-space-600); --pc-box-padding-block-end-xs: var(--p-space-400); --pc-box-padding-block-end-md: var(--p-space-600); --pc-box-padding-inline-start-xs: var(--p-space-400); --pc-box-padding-inline-start-sm: var(--p-space-0); --pc-box-padding-inline-end-xs: var(--p-space-400); --pc-box-padding-inline-end-sm: var(--p-space-0); position: relative;">
            <div role="status"><p class="Polaris-Text--root Polaris-Text--visuallyHidden">Hello, ApexStoreCounter!. This page is ready</p></div>
            <div class="Polaris-Page-Header--isSingleRow Polaris-Page-Header--noBreadcrumbs Polaris-Page-Header--mediumTitle">
                <div class="Polaris-Page-Header__Row">
                    <div class="Polaris-Page-Header__TitleWrapper">
                        <div class="Polaris-Header-Title__TitleWrapper"><h1 class="Polaris-Header-Title"><span class="Polaris-Text--root Polaris-Text--headingLg Polaris-Text--bold">Hello, ApexStoreCounter!</span></h1></div>
                    </div>
                    <div class="Polaris-Page-Header__RightAlign">
                        <div class="Polaris-InlineStack" style="--pc-inline-stack-align: end; --pc-inline-stack-block-align: start; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-200); --pc-inline-stack-flex-direction-xs: row;"></div>
                    </div>
                </div>
            </div>
        </div>

        <!--Header-->
<!--        <PolarisBox>-->
<!--            <Placeholder label="Hello, ApexStoreCounter!"/>-->
<!--        </PolarisBox>-->
        <!--End-->

        <!--Content-->
        <Layout>

            <!--Active App-->
            <div class="Polaris-Layout__Section Polaris-Layout__Section--fullWidth">

                <div class="Polaris-ShadowBevel" style="--pc-shadow-bevel-z-index: 32; --pc-shadow-bevel-box-shadow-xs: var(--p-shadow-100); --pc-shadow-bevel-border-radius-xs: var(--p-border-radius-300);">

                    <div class="Polaris-Box" style="--pc-box-background: var(--p-color-bg-surface); --pc-box-min-height: 100%; --pc-box-overflow-x: clip; --pc-box-overflow-y: clip; --pc-box-padding-block-start-xs: var(--p-space-400); --pc-box-padding-block-end-xs: var(--p-space-400); --pc-box-padding-inline-start-xs: var(--p-space-400); --pc-box-padding-inline-end-xs: var(--p-space-400);">

                        <div class="Polaris-InlineStack" style="--pc-inline-stack-align: space-between; --pc-inline-stack-wrap: wrap; --pc-inline-stack-flex-direction-xs: row;"><h2 class="Polaris-Text--root Polaris-Text--headingMd">My Apps</h2></div>
                        <div class="Polaris-Box" style="--pc-box-padding-block-start-xs: var(--p-space-200); --pc-box-padding-block-end-xs: var(--p-space-200); --pc-box-padding-inline-start-xs: var(--p-space-200); --pc-box-padding-inline-end-xs: var(--p-space-200); --pc-box-width: 100%;"></div>

                        <div class="Apex-AppGroup">
                            <div class="Polaris-InlineStack" style="--pc-inline-stack-align: start; --pc-inline-stack-block-align: center; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">

                                <div class="Vtl-AppCard">
                                    <Link href="app/size_chart/list" tabindex="0" class="Vtl-NavLink link Polaris-Link Polaris-Link--monochrome Polaris-Link--removeUnderline" role="link">
                                        <div class="Polaris-InlineStack" style="--pc-inline-stack-block-align: center; --pc-inline-stack-wrap: nowrap; --pc-inline-stack-gap-xs: var(--p-space-200); --pc-inline-stack-flex-direction-xs: row;">

                                            <div class="Vtl-AppIcon Vtl-AppIcon--IncreaseConversions" style="    background-color: #f0f2ff;border-radius: var(--p-border-radius-200);  height: 42px; min-width: 42px;position: relative;">
                                                <img src="https://d3acrzpqhtrug6.cloudfront.net/dist/assets/media/app-start/size-chart/size-chart.8f62d714e1320aa7c6b0.svg" alt="App icon" width="auto" height="auto" loading="lazy">
                                            </div>

                                            <div>
                                                <h3 class="Polaris-Text--root Polaris-Text--bodyMd">Size Chart</h3>
                                            </div>
                                        </div>
                                    </Link>
                                </div>

                                <div class="Vtl-AppCard">
                                    <Link href="app/visitor_counter" tabindex="0" class="Vtl-NavLink link Polaris-Link Polaris-Link--monochrome Polaris-Link--removeUnderline" role="link">
                                        <div class="Polaris-InlineStack" style="--pc-inline-stack-block-align: center; --pc-inline-stack-wrap: nowrap; --pc-inline-stack-gap-xs: var(--p-space-200); --pc-inline-stack-flex-direction-xs: row;">


                                            <div class="Vtl-AppIcon Vtl-AppIcon--IncreaseConversions" style="    background-color: #f0f2ff;border-radius: var(--p-border-radius-200);  height: 42px; min-width: 42px;position: relative;">
                                                <img src="https://d3acrzpqhtrug6.cloudfront.net/dist/assets/media/app-start/recently-viewed/recently-viewed.fe168e58868e2928b61e.svg" alt="App icon" width="auto" height="auto" loading="lazy">
                                            </div>

                                            <div>
                                                <h3 class="Polaris-Text--root Polaris-Text--bodyMd">Visitor Counter</h3>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <!--End-->

        </Layout>
        <!--End-->

    </Page>


</template>

