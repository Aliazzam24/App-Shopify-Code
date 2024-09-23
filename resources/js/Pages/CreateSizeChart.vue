<script setup>
import CardSection from "@/Shared/Polaris/CardSection.vue";
import Layout from "@/Shared/Polaris/Layout.vue";
import PolarisLayoutSection from "@/Shared/Polaris/PolarisLayoutSection.vue";
import SectionThird from "@/Shared/Polaris/SectionThird.vue";
import CardLegacy from "@/Shared/Polaris/CardLegacy.vue";
import Label from "@/Shared/PolarisText/Label.vue";
import Text from "@/Shared/PolarisText/Text.vue";
import { useSizeChartCreateStore } from '../Stores/sizeChartCreate.js';
import FrameContextualSaveBar from "../Shared/PolarisCotextBar/FrameContextualSaveBar.vue";
import ContextualSaveBar from "../Shared/PolarisCotextBar/ContextualSaveBar.vue";

const store = useSizeChartCreateStore();


</script>
<template>


    <form @submit.prevent="store.handleSubmit()">

        <Modal sectioned :open="store.active" :primary-action="store.primaryAction" :secondary-actions="store.secondaryActions" @close="store.active = false">
            <template #title>{{ store.modalTitle }}</template>
            <p>{{ store.modalContent }}</p>
        </Modal>

        <FrameContextualSaveBar logo="https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png">
            <ContextualSaveBar title="Unsaved size chart!" @discard="store.showDiscardModal()" :processing="store.processing"/>
        </FrameContextualSaveBar>

        <Page :title="store.internalName" :backAction="{ content: 'Products', url: '#' }" compactTitle>
            <Layout>

                <!--Layout section -->
                <PolarisLayoutSection>
                    <Layout>
                        <CardSection title="Visibility">
                            <div class="Apex-ShopifyEntitySelection">
                                <div class="Polaris-BlockStack" style="--pc-block-stack-order: column; --pc-block-stack-gap-xs: var(--p-space-400);">
                                    <div class="Polaris-BlockStack" style="--pc-block-stack-order: column;">

                                        <RadioButton id="any" value="any"  v-model="store.set_product" label="Any product"/>
                                        <RadioButton id="specific" value="specific"  v-model="store.set_product" label="Specific product or collection"/>

                                    </div>


                                    <div v-if="store.set_product === 'specific'">
                                        Specific Product
                                    </div>

                                </div>
                            </div>
                        </CardSection>

                        <!--section table-->
                        <CardSection title="Size Chart">
                            <div class="Apex-ShopifyEntityTable">
                                <div class="Polaris-InlineStack" style="--pc-inline-stack-align: space-between; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">

                                    <!--add column and row-->
                                    <div class="Polaris-Box">
                                        <div class="Polaris-InlineStack" style="--pc-inline-stack-align: space-between; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">


                                            <!--Add Column and Remove-->
                                            <button @click="store.addColumn" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" type="button">
                                                <span class="Polaris-Button__Icon">
                                                    <span class="Polaris-Icon">
                                                        <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                            <path d="M6.25 10a.75.75 0 0 1 .75-.75h2.25v-2.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1-.75-.75Z"></path>
                                                            <path fill-rule="evenodd" d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Column
                                                </span>
                                            </button>
                                            <button @click="store.removeColumn" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" type="button">
                                                <span class="Polaris-Button__Icon">
                                                    <span class="Polaris-Icon">
                                                       <svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 20px; height: 20px;"><path d="M7 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"></path><path fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"></path></svg>
                                                    </span>
                                                </span>
                                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">
                                                            Column
                                                </span>
                                            </button>
                                            <!--End-->

                                            <!--Add Row and Remove-->
                                            <button @click="store.addRow" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" type="button">
                                                <span class="Polaris-Button__Icon">
                                                    <span class="Polaris-Icon">
                                                        <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                            <path d="M6.25 10a.75.75 0 0 1 .75-.75h2.25v-2.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1-.75-.75Z"></path>
                                                            <path fill-rule="evenodd" d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Row</span>
                                            </button>
                                            <button @click="store.removeRow()" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" type="button">
                                                <span class="Polaris-Button__Icon">
                                                    <span class="Polaris-Icon">
                                                       <svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 20px; height: 20px;"><path d="M7 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"></path><path fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"></path></svg>
                                                    </span>
                                                </span>
                                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Row</span>
                                            </button>
                                            <!--End-->

                                        </div>
                                    </div>
                                    <!--end-->

                                    <!--Erase content-->
                                    <div class="Polaris-InlineStack" style="--pc-inline-stack-align: space-between; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">
                                        <button @click="store.showEraseModal" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText Polaris-Button--toneCritical" type="button">
                                            <span class="Polaris-Button__Icon">
                                                <span class="Polaris-Icon">
                                                    <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                        <path d="M17 9.25a.75.75 0 0 1-1.5 0 3 3 0 0 0-3-3h-6.566l1.123 1.248a.75.75 0 1 1-1.114 1.004l-2.25-2.5a.75.75 0 0 1 .027-1.032l-2.25-2.25a.75.75 0 0 1 1.06 1.06l-.97.97h6.44a4.5 4.5 0 0 1 4.5 4.5Z"></path>
                                                        <path d="M3 10.75a.75.75 0 0 1 1.5 0 3 3 0 0 0 3 3h6.566l-1.123-1.248a.75.75 0 1 1 1.114-1.004l2.25 2.5a.75.75 0 0 1-.027 1.032l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97h-6.44a4.5 4.5 0 0 1-4.5-4.5Z"></path>
                                                    </svg>
                                                </span>
                                            </span>
                                            <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Erase content</span>
                                        </button>
                                    </div>
                                    <!--End-->


                                    <!-- Table Rendering -->
                                    <div class="table-container">
                                        <table>
                                            <tbody>
                                            <tr v-for="(row, rowIndex) in store.tableData" :key="rowIndex">
                                                <td v-for="(cell, colIndex) in row" :key="colIndex">
                                                    <input type="text" v-model="store.tableData[rowIndex][colIndex]" />
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                    <!--End-->

                                </div>
                            </div>
                        </CardSection>
                        <!--end-->

                        <CardSection title="Measurement instructions">
                            <div class="Vtl-FormSettingStack__FieldList">
                                <div class="Vtl-FormSettingStack__FieldItem Vtl-FormSettingStack__FieldItem--Options">
                                    <div class="form-setting">
                                        <div class="Vtl-CustomCheckbox">
                                            <div><label class="Polaris-Choice Polaris-Checkbox__ChoiceLabel" for="measureGuideStatus"><span class="Polaris-Choice__Control"><span class="Polaris-Checkbox"><input id="measureGuideStatus" type="checkbox" class="Polaris-Checkbox__Input" aria-invalid="false" aria-describedby="measureGuideStatusHelpText" role="checkbox" aria-checked="false" value=""><span class="Polaris-Checkbox__Backdrop"></span><span class="Polaris-Checkbox__Icon Polaris-Checkbox--animated"><svg viewBox="0 0 16 16" shape-rendering="geometricPrecision" text-rendering="geometricPrecision"><path class="" d="M1.5,5.5L3.44655,8.22517C3.72862,8.62007,4.30578,8.64717,4.62362,8.28044L10.5,1.5" transform="translate(2 2.980376)" opacity="0" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" pathLength="1"></path></svg></span></span></span><span class="Polaris-Choice__Label"><span class="Polaris-Text--root Polaris-Text--bodyMd"><span>Enable How to Measure Guide</span></span></span></label>
                                                <div class="Polaris-Choice__Descriptions">
                                                    <div class="Polaris-Choice__HelpText" id="measureGuideStatusHelpText"><span class="Polaris-Text--root Polaris-Text--subdued">Check this option to open the content editor. The How to Measure Guide will be displayed in the Size Chart Pop-up.</span></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardSection>

                    </Layout>
                </PolarisLayoutSection>
                <!--end-->

                <!--section third-->
                <SectionThird>
                    <Layout>

                        <CardLegacy>
                            <div class="Polaris-Select">

                                <select v-model="store.status">
                                    <option
                                        v-for="option in store.statusOption"
                                        :key="option.value"
                                        :value="option.value"
                                    >
                                        {{ option.label }}
                                    </option>
                                </select>

                            </div>

                            <!--                            <Select label="Status" :options="store.statusOption" v-model="store.status" />-->

                        </CardLegacy>

                        <CardLegacy>
                            <Label title="Title"/>
                            <TextField v-model="store.titlePopup" autoComplete="off"/>
                            <Text title="This title will be displayed in the Size Chart pop-up and visible to your clients."/>
                        </CardLegacy>

                        <CardLegacy>
                            <Label title="Internal name"/>
                            <TextField v-model="store.internalName" autoComplete="off"/>
                            <Text title="The private name of this Size Chart. Only you will see this."/>
                        </CardLegacy>

                    </Layout>
                </SectionThird>
                <!--end-->

                <div class="Polaris-Layout__Section Polaris-Layout__Section--fullWidth">
                    <div class="Polaris-PageActions">
                        <div class="Polaris-LegacyStack Polaris-LegacyStack--spacingTight Polaris-LegacyStack--distributionTrailing" style="justify-content: end;">

                            <div class="Polaris-LegacyStack__Item">
                                <div class="Polaris-ButtonGroup">
                                    <div v-if="store.status === 0" class="Polaris-ButtonGroup__Item">


                                        <button
                                            v-bind:disabled="store.status === 1 || store.processing"
                                            class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" aria-disabled="false" type="submit">
                                            <span v-if="!store.processing" class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Save as draft</span>
                                            <span v-else style="padding-right: 20px;padding-left: 20px;">
                                                <Spinner size="small"/>
                                            </span>
                                        </button>


                                    </div>

                                    <div class="Polaris-ButtonGroup__Item">

                                        <button v-if="store.status === 1"
                                                v-bind:disabled="store.processing "
                                                class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter"
                                                aria-disabled="false" type="submit">
                                            <span v-if="!store.processing"
                                                  class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">Save</span>
                                            <span v-else class="spinner-polaris-style">
                                                <Spinner size="small"/>
                                            </span>
                                        </button>



                                        <button
                                            v-bind:disabled="store.status === 1 || store.processing"
                                            v-if="store.status === 0" @click="store.resetPublish()"
                                            class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter">
                                            <span  v-if="!store.processing"  class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Publish</span>
                                            <span v-else style="padding-right: 10px;padding-left: 10px;">
                                                <Spinner size="small"/>
                                            </span>
                                        </button>

                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>
                </div>

            </Layout>

            <div class="Polaris-Box" style="--pc-box-min-height: 108px;"></div>
        </Page>
    </form>
</template>


<style scoped>

.table-container {
    height: 340px;
    min-width: 100%;
    overflow: auto;
    border: 1px solid #dcdcdc;
}

table {
    border-collapse: collapse;
    font-family: Arial, sans-serif;
    border: 1px solid #ffffff;
}


tbody tr:nth-child(even) {
    background-color: #f9f9f9;
}

tbody tr:hover {
    background-color: #f3f3f3;
}

td {
    border: 1px solid #ddd;
    padding: 4px;
    text-align: left;
}

input[type="text"] {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    box-sizing: border-box;
    border: 1px solid #d0d0d0;
    border-radius: 2px;
    transition: 0.5s;
}

input[type="text"]:focus {
    border: 2px solid #555;
}


</style>


<!--            <div class="Polaris-InlineStack" style="&#45;&#45;pc-inline-stack-align: space-between; &#45;&#45;pc-inline-stack-block-align: center; &#45;&#45;pc-inline-stack-wrap: wrap; &#45;&#45;pc-inline-stack-gap-xs: var(&#45;&#45;p-space-400);">-->
<!--                <div class="Polaris-Box"></div>-->
<!--                <div class="Polaris-InlineStack" style="&#45;&#45;pc-inline-stack-wrap: wrap; &#45;&#45;pc-inline-stack-gap-xs: var(&#45;&#45;p-space-200);">-->
<!--                    <button class="Polaris-Button Polaris-Button&#45;&#45;disabled Polaris-Button&#45;&#45;loading" aria-disabled="true" type="button" aria-busy="true" tabindex="-1">-->
<!--                        <span class="Polaris-Button__Content"><span class="Polaris-Button__Spinner"><span class="Polaris-Spinner Polaris-Spinner&#45;&#45;sizeSmall"><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></path></svg></span><span role="status"><span class="Polaris-Text&#45;&#45;root Polaris-Text&#45;&#45;visuallyHidden">Loading</span></span></span><span class="Polaris-Button__Text">Close</span></span>-->
<!--                    </button>-->
<!--                    <button class="Polaris-Button Polaris-Button&#45;&#45;disabled Polaris-Button&#45;&#45;loading Polaris-Button&#45;&#45;variantPrimary" aria-disabled="true" type="button" aria-busy="true" tabindex="-1">-->
<!--                        <span class="Polaris-Button__Content"><span class="Polaris-Button__Spinner"><span class="Polaris-Spinner Polaris-Spinner&#45;&#45;sizeSmall"><svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></path></svg></span><span role="status"><span class="Polaris-Text&#45;&#45;root Polaris-Text&#45;&#45;visuallyHidden">Loading</span></span></span><span class="Polaris-Button__Text">Confirm</span></span>-->
<!--                    </button>-->
<!--                </div>-->
<!--            </div>-->
