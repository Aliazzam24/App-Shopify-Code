<script setup>
import {defineProps} from "vue";
import {router} from "@inertiajs/vue3";
import HeaderChartTable from "../Shared/Header/HeaderChartTable.vue";
import ChartTable from "@/Components/ChartTable.vue";
import Label from "../Shared/PolarisText/Label.vue";
import Text from "@/Shared/PolarisText/Text.vue";
import FrameContextualSaveBar from "../Shared/PolarisCotextBar/FrameContextualSaveBar.vue";
import ContextualSaveBar from "../Shared/PolarisCotextBar/ContextualSaveBar.vue";
import {useSizeChartEditStore} from '../Stores/sizeChartEdit.js';
import {LayoutSection} from "@ownego/polaris-vue";

const props = defineProps({
    sizeChart: Object,
});
const store = useSizeChartEditStore();
store.setInitData(props.sizeChart);
store.setSizeChartData({...store.$state});


</script>
<template>

    <Modal sectioned :open="store.active" :primary-action="store.primaryAction" :secondary-actions="store.secondaryActions" @close="store.active = false">
        <template #title>{{ store.modalTitle }}</template>
        <p>{{ store.modalContent }}</p>
        <TextField v-if="store.modalDuplicate" v-model="store.Name" label="Name for new size chart" autoComplete="off"/>
    </Modal>

    <form @submit.prevent="store.handleSubmit()">

        <FrameContextualSaveBar v-if="store.hasChanges() && !store.isSubmitting" logo="https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png">
            <ContextualSaveBar @discard="store.showDiscardModal" :processing="store.processing" title="Unsaved size chart!"/>
        </FrameContextualSaveBar>

        <Page :title="store.internalName" compactTitle :backAction="{ content: 'Products', onAction: () => router.visit('/app/size_chart/list') }"
              :secondaryActions="[
                  { content: 'View size charts',onAction: () => console.log('View on your store action'),},
                  { content: 'Duplicate', accessibilityLabel: 'Secondary action label',onAction: store.showDuplicateModal },
             ]"
        >
            <template #pageTitle>
                <Badge v-if="store.status == 'active'" tone="success">Active</Badge>
                <Badge v-else-if="store.status == 'draft'" tone="info">Draft</Badge>
            </template>

            <Layout>

                <LayoutSection>

                    <LegacyCard title="Visibility">
                        <LegacyCardSection>
                            <BlockStack gap="400">
                                <BlockStack>
                                    <RadioButton id="any" value="any" v-model="store.set_product" label="Any product"/>
                                    <RadioButton id="specific" value="specific" v-model="store.set_product" label="Specific product or collection"/>
                                </BlockStack>

                                <div v-if="store.set_product === 'specific'">
                                    Specific Product
                                </div>

                            </BlockStack>
                        </LegacyCardSection>
                    </LegacyCard>

                    <LegacyCard title="Size Chart">
                        <LegacyCardSection>
                            <InlineStack gap="400" align="space-between" block-align="center" wrap="wrap">
                                <!--Header Table-->
                                <HeaderChartTable
                                    @AddColumn="store.addColumn"
                                    @RemoveColumn="store.removeColumn"
                                    @AddRow="store.addRow"
                                    @RemoveRow="store.removeRow()"
                                    @EraseContent="store.showEraseModal"
                                />

                                <!--Table-->
                                <ChartTable :tableData="store.tableData"/>
                                <!--End-->

                            </InlineStack>
                        </LegacyCardSection>
                    </LegacyCard>

                    <LegacyCard title="Measurement instructions">
                        <LegacyCardSection>
                            <div class="Vtl-FormSettingStack__FieldList">
                                <div class="Vtl-FormSettingStack__FieldItem Vtl-FormSettingStack__FieldItem--Options">
                                    <div class="form-setting">
                                        <div class="Vtl-CustomCheckbox">
                                            <div><label class="Polaris-Choice Polaris-Checkbox__ChoiceLabel"
                                                        for="measureGuideStatus"><span
                                                class="Polaris-Choice__Control"><span class="Polaris-Checkbox"><input
                                                id="measureGuideStatus" type="checkbox" class="Polaris-Checkbox__Input"
                                                aria-invalid="false" aria-describedby="measureGuideStatusHelpText"
                                                role="checkbox" aria-checked="false" value=""><span
                                                class="Polaris-Checkbox__Backdrop"></span><span
                                                class="Polaris-Checkbox__Icon Polaris-Checkbox--animated"><svg
                                                viewBox="0 0 16 16" shape-rendering="geometricPrecision"
                                                text-rendering="geometricPrecision"><path class=""
                                                                                          d="M1.5,5.5L3.44655,8.22517C3.72862,8.62007,4.30578,8.64717,4.62362,8.28044L10.5,1.5"
                                                                                          transform="translate(2 2.980376)"
                                                                                          opacity="0" fill="none"
                                                                                          stroke="currentColor"
                                                                                          stroke-width="2"
                                                                                          stroke-linecap="round"
                                                                                          stroke-linejoin="round"
                                                                                          pathLength="1"></path></svg></span></span></span><span
                                                class="Polaris-Choice__Label"><span
                                                class="Polaris-Text--root Polaris-Text--bodyMd"><span>Enable How to Measure Guide</span></span></span></label>
                                                <div class="Polaris-Choice__Descriptions">
                                                    <div class="Polaris-Choice__HelpText"
                                                         id="measureGuideStatusHelpText"><span
                                                        class="Polaris-Text--root Polaris-Text--subdued">Check this option to open the content editor. The How to Measure Guide will be displayed in the Size Chart Pop-up.</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </LegacyCardSection>
                    </LegacyCard>

                </LayoutSection>

                <LayoutSection variant="oneThird">

                    <LegacyCard>
                        <LegacyCardSection>
                            <Select v-model="store.status" :options="store.statusOption" label="Status"/>
                        </LegacyCardSection>
                    </LegacyCard>

                    <LegacyCard>
                        <LegacyCardSection>
                            <Label title="Title"/>
                            <TextField v-model="store.titlePopup" autoComplete="off"/>
                            <Text title="This title will be displayed in the Size Chart pop-up and visible to your clients."/>
                        </LegacyCardSection>
                    </LegacyCard>

                    <LegacyCard>
                        <LegacyCardSection>
                            <Label title="Internal name"/>
                            <TextField v-model="store.internalName" autoComplete="off"/>
                            <Text title="The private name of this Size Chart. Only you will see this."/>
                        </LegacyCardSection>
                    </LegacyCard>

                </LayoutSection>


                <!--fotter-->
                <div class="Polaris-Layout__Section Polaris-Layout__Section--fullWidth">
                    <div class="Polaris-PageActions">
                        <div
                            class="Polaris-LegacyStack Polaris-LegacyStack--spacingTight Polaris-LegacyStack--distributionTrailing"
                            style="justify-content: space-between;">

                            <div class="Polaris-LegacyStack__Item">
                                <button @click="store.ShowDeleteModal" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--toneCritical" aria-disabled="false" type="button" v-bind:disabled="store.hasChanges()">
                                    <span
                                        class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Delete</span>
                                </button>

                            </div>


                            <div class="Polaris-LegacyStack__Item">
                                <div class="Polaris-ButtonGroup">
                                    <div v-if="store.status === 'draft'" class="Polaris-ButtonGroup__Item">

                                        <button
                                            v-bind:disabled="store.status === 'active' || !store.hasChanges() || store.processing"
                                            class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter"
                                            aria-disabled="false"
                                            type="submit">
                                            <span v-if="!store.processing" class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Save as draft</span>
                                            <span v-else style="padding-right: 20px;padding-left: 20px;">
                                                <Spinner size="small"/>
                                            </span>
                                        </button>

                                    </div>

                                    <div class="Polaris-ButtonGroup__Item">

                                        <button v-if="store.status === 'active'"
                                                v-bind:disabled="!store.hasChanges() || store.processing "
                                                class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter"
                                                aria-disabled="false" type="submit">
                                            <span v-if="!store.processing"
                                                  class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--medium">Save</span>
                                            <span v-else class="spinner-polaris-style"><Spinner size="small"/></span>
                                        </button>


                                        <button
                                            v-if="!store.hasChanges() && store.status === 'draft'"
                                            @click="store.PublishStatusChart()"
                                            v-bind:disabled="store.processing"
                                            class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter">
                                            <span  v-if="!store.processing"  class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Publish</span>
                                            <span v-else style="padding-right: 10px;padding-left: 10px;">
                                                <Spinner size="small"/>
                                            </span>
                                        </button>

                                        <!-- if hasChanges but the status is still draft, show 'Publish Changes' button -->
                                        <button
                                            v-else-if="store.hasChanges() && store.status === 'draft'"
                                            @click="store.resetPublish()"
                                            v-bind:disabled="store.processing"
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
                <!--end-->

            </Layout>

            <Box style="--pc-box-min-height: 108px;"></Box>
        </Page>
    </form>
</template>
