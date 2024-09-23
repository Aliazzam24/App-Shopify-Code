<script setup>
import Page from "../Shared/Polaris/Page.vue";
import Layout from "../Shared/Polaris/Layout.vue";
import LayoutSection from "../Shared/Polaris/LayoutSection.vue";
import Card from "../Shared/Polaris/Card.vue";
import { useSizeChartStore } from '../Stores/sizeChart.js';
import { usePage } from "@inertiajs/vue3";
import ModalTextContainer from "../Shared/PolarisModal/ModalTextContainer.vue";
import Modal from "../Shared/PolarisModal/Modal.vue";
import FrameContextualSaveBar from "../Shared/PolarisCotextBar/FrameContextualSaveBar.vue";
import SaveButton from "../Shared/PolarisButton/SaveButton.vue";
import SpinnerButton from "../Shared/PolarisButton/SpinnerButton.vue";
import ModalFooter from "../Shared/PolarisModal/ModalFooter.vue";
import Frame from "../Shared/PolarisCotextBar/Frame.vue";
import SecondaryButton from "../Shared/PolarisButton/SecondaryButton.vue";
import MessageBarContainer from "../Shared/PolarisCotextBar/MessageBarContainer.vue";
import ConSaveUnsaved from "../Shared/PolarisCotextBar/ConSaveUnsaved.vue";
import ModalHeader from "../Shared/PolarisModal/ModalHeader.vue";
import DiscardButton from "../Shared/PolarisButton/DiscardButton.vue";
import ContextualSaveBar from "../Shared/PolarisCotextBar/ContextualSaveBar.vue";
import PrimaryButton from "../Shared/PolarisButton/PrimaryButton.vue";


const { columns, rows, table_data } = usePage().props;
const store = useSizeChartStore();
store.setInitData(columns, rows, table_data);
store.setSizeChartData({...store.$state});

</script>

<template>
    <div>
        <form @submit.prevent="store.submitTable">

            <Modal v-if="store.showClearModal">

                <ModalHeader @click="store.showClearModal = false" title="Erase content?"/>
                <ModalTextContainer title="This will erase all the content entered in this section. This action cannot be undone."/>

                <ModalFooter>

                    <SecondaryButton  @click="store.showClearModal = false" title="Cancel"/>
                    <PrimaryButton  @click="store.clearAndAddColumn();store.showClearModal = false"  title="Erase content"/>


                </ModalFooter>
            </Modal>
            <!--Bar To save and Discard-->
            <FrameContextualSaveBar v-if="store.hasChanges && !store.isSubmitting">
                <Frame>
                    <img alt="" src="https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png" style="width: 86px;">
                </Frame>

                <ContextualSaveBar>

                    <MessageBarContainer title="Unsaved changes"/>

                    <Modal v-if="store.showModal">

                        <ModalHeader @click="store.showModal = false" title="Discard all unsaved changes"/>
                        <ModalTextContainer title="If you discard changes, you’ll delete any edits you made since you last saved."/>

                        <ModalFooter>

                            <SecondaryButton  @click="store.showModal = false" title="Continue editing"/>
                            <PrimaryButton @click="store.discardChanges();store.showModal = false" title="Discard changes"/>


                        </ModalFooter>
                    </Modal>

                    <ConSaveUnsaved>

                        <DiscardButton @click="store.showModal = !store.showModal" title="Discard"/>


                        <SpinnerButton v-if="store.processing"  :disabled="store.processing">
                            <Spinner size="small" />
                        </SpinnerButton>
                        <SaveButton v-else title="Save"/>

                    </ConSaveUnsaved>

                </ContextualSaveBar>

            </FrameContextualSaveBar>

            <!--End-->
            <Page fullWidth showActions>
                <Layout>
                    <LayoutSection>

                        <!--Card settings -->
                        <Card title="Visibility">

                            <!--RadioButton single and Gradient-->
                            <div class="Polaris-BlockStack" style="--pc-block-stack-order:column">
                                <RadioButton id="any" value="any"  v-model="store.set_product" label="Any product"/>
                                <RadioButton id="specific" value="specific"  v-model="store.set_product" label="Specific product or collection"/>
                            </div>
                            <!--End-->

                            <!--Section single and Gradient-->
                            <div>
                                <!--Section any_product to RadioButton-->
                                <div v-if="store.set_product === 'any'"  class="Polaris-Box" style="--pc-box-padding-block-start-xs:var(--p-space-300);--pc-box-padding-block-end-xs:var(--p-space-300);">
                                </div>
                                <!--End-->

                                <!--Section specific_product to RadioButton-->
                                <div v-if="store.set_product === 'specific'">
                                    Specific Product
                                </div>
                                <!--End-->

                            </div>
                            <!--End-->


                        </Card>
                        <!--End-->


                        <!--Table Size Chart-->
                        <Card title="Size chart">

                            <!--add column and row-->
                            <div class="Polaris-Box" style="--pc-box-padding-block-start-xs: var(--p-space-400)">
                                <div class="Polaris-InlineStack" style="--pc-inline-stack-align: space-between; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">
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
                                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">
                                                  Add Column
                                                </span>
                                            </button>
                                            <button @click="store.removeColumn" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" type="button">
                                                <span class="Polaris-Button__Icon">
                                                    <span class="Polaris-Icon">
                                                       <svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 20px; height: 20px;"><path d="M7 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"></path><path fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"></path></svg>
                                                    </span>
                                                </span>
                                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">
                                                   Remove Column
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
                                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Add Row</span>
                                            </button>
                                            <button @click="store.removeRow()" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" type="button">
                                                <span class="Polaris-Button__Icon">
                                                    <span class="Polaris-Icon">
                                                       <svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 20px; height: 20px;"><path d="M7 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"></path><path fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"></path></svg>
                                                    </span>
                                                </span>
                                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Remove Row</span>
                                            </button>
                                            <!--End-->

                                        </div>
                                    </div>

                                    <!--Erase content-->
                                    <div class="Polaris-InlineStack" style="--pc-inline-stack-align: space-between; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">
                                        <button @click="store.showClearModal = !store.showClearModal"  class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText Polaris-Button--toneCritical" type="button">
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

                                </div>
                            </div>
                            <!--End-->

                            <!--addColumnBefore-->
                            <div class="Polaris-Box" style="--pc-box-padding-block-start-xs: var(--p-space-400); margin-bottom:10px">
                                <div class="Polaris-InlineStack" style="--pc-inline-stack-align: space-between; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">
                                    <div class="Polaris-Box">
                                        <div class="Polaris-InlineStack" style="--pc-inline-stack-align: space-between; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">

                                            <select  v-model="store.addColumnBeforeIndex">
                                                <option value="">Select a column</option>
                                                <option v-for="(col, colIndex) in store.tableData[0]" :key="colIndex" :value="colIndex">{{col}}</option>
                                            </select>

                                            <button @click="store.addColumnBefore"  class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" type="button">
                                                <span class="Polaris-Button__Icon">
                                                    <span class="Polaris-Icon">
                                                        <svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true">
                                                            <path d="M6.25 10a.75.75 0 0 1 .75-.75h2.25v-2.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1-.75-.75Z"></path>
                                                            <path fill-rule="evenodd" d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"></path>
                                                        </svg>
                                                    </span>
                                                </span>
                                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Add Before</span>
                                            </button>


                                        </div>
                                    </div>

                                </div>
                            </div>
                            <!--End-->

                            <!--Table-->
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

                        </Card>
                        <!--End-->




                        <!--Table Size Chart-->
                        <Card title="Measurement instructions">

                        </Card>
                        <!--End-->






                    </LayoutSection>
                </Layout>
            </Page>
        </form>
    </div>
</template>


<style scoped>

.table-container {
    height: 340px;
    max-width: 100%;
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
