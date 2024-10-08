<script setup>
import {defineProps} from "vue";
import Page from "@/Shared/Polaris/Page.vue";
import Header from "@/Shared/Header/Header.vue";
import HeaderPageEdit from "../Shared/Header/HeaderPageEdit.vue";
import HeaderEditTable from "../Shared/Header/HeaderChartTable.vue";
import TableEdit from "../Components/ChartTable.vue";
import CardSection from "@/Shared/Polaris/CardSection.vue";
import Layout from "@/Shared/Polaris/Layout.vue";
import PolarisLayoutSection from "@/Shared/Polaris/PolarisLayoutSection.vue";
import SectionThird from "@/Shared/Polaris/SectionThird.vue";
import ModalPageEdit from "../Shared/PolarisModal/ModalPageEdit.vue";
import CardLegacy from "@/Shared/Polaris/CardLegacy.vue";
import Label from "@/Shared/PolarisText/Label.vue";
import Text from "@/Shared/PolarisText/Text.vue";
import FrameContextualSaveBar from "../Shared/PolarisCotextBar/FrameContextualSaveBar.vue";
import ContextualSaveBar from "../Shared/PolarisCotextBar/ContextualSaveBar.vue";
import { useSizeChartEditStore } from '../Stores/sizeChartEdit.js';
const props = defineProps({
    sizeChart: Object,
});
const store = useSizeChartEditStore();
store.setInitData(props.sizeChart);
store.setSizeChartData({...store.$state});



</script>
<template>
    <form @submit.prevent="store.handleSubmit()">

        <ModalPageEdit
            :OpenModal="store.isModalOpen"
            :titleHeader="store.modalTitle"
            :titleContent="store.modalContent"
            :titleSave="store.modalSecondaryButtonTitle"
            :titleDuplicateSave="store.modalSecondaryButtonTitle"
            :titleCancel="store.titleCancel"
            :notDuplicate="store.actionType !==  'duplicateChart'"
            :isDuplicate="store.actionType === 'duplicateChart'"
            @ButtoncloseIcon="store.isModalOpen = false"
            @ButtonCancelClose="store.isModalOpen = false"
            @ButtonClickSave="store.handleSecondaryButtonClick()"
        >
            <TextField
                v-model="store.Name"
                label="Name for new size chart"
                autoComplete="off"
            />

        </ModalPageEdit>
        <FrameContextualSaveBar v-if="store.hasChanges() && !store.isSubmitting"
                                logo="https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png">

            <ContextualSaveBar @discard="store.confirmAction('discard')" :processing="store.processing"title="Unsaved size chart!"/>
        </FrameContextualSaveBar>

        <Page>
            <Header>
                <HeaderPageEdit
                    @visit="store.visitPageApp()"
                    @duplicate="store.confirmAction('duplicateChart')"
                    :title="store.internalName"
                    :status="store.status"
                />
            </Header>
            <Layout>

                <!--section not flex-->
                <PolarisLayoutSection>
                    <Layout>

                        <!--section 1-->
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
                        <!-- end-->

                        <!--section table-->
                        <CardSection title="Size Chart">
                            <div class="Polaris-InlineStack" style="--pc-inline-stack-align: space-between; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">

                                <!--Header Table-->
                                <HeaderEditTable
                                    @AddColumn="store.addColumn"
                                    @RemoveColumn="store.removeColumn"
                                    @AddRow="store.addRow"
                                    @RemoveRow="store.removeRow()"
                                    @EraseContent="store.confirmAction('eraseContent')"
                                />
                                <!--add column and row-->

                                <!--Table-->
                                <TableEdit :tableData="store.tableData"/>
                                <!--End-->

                            </div>
                        </CardSection>
                        <!--end-->

                        <!--section 3-->
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
                        <!--end-->

                    </Layout>
                </PolarisLayoutSection>
                <!--end-->

                <!--section flex-->
                <SectionThird>
                    <Layout>

                        <!--status-->
                        <CardLegacy>
                            <Select label="Status" :options="store.statusOption" v-model="store.status" />
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

                <!--2 button-->
                <div class="Polaris-Layout__Section Polaris-Layout__Section--fullWidth">
                    <div class="Polaris-PageActions">
                        <div class="Polaris-LegacyStack Polaris-LegacyStack--spacingTight Polaris-LegacyStack--distributionTrailing"style="justify-content: space-between;">

                            <div class="Polaris-LegacyStack__Item">
                                <button @click="store.DeleteSizeChart" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--toneCritical" type="button"><span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Delete</span></button>
                            </div>

                            <div class="Polaris-LegacyStack__Item">
                                <div class="Polaris-ButtonGroup">

                                    <div class="Polaris-ButtonGroup__Item">
                                        <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--disabled" aria-disabled="true" type="button" tabindex="-1"><span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Save as draft</span></button>
                                    </div>

                                    <div class="Polaris-ButtonGroup__Item">
                                        <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" aria-disabled="false" type="button"><span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Publish</span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!--end-->
            </Layout>

            <div class="Polaris-Box" style="--pc-box-min-height: 108px;"></div>
        </Page>
    </form>
</template>
