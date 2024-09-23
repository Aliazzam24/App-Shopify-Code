<script setup>
import {defineProps, onMounted, ref} from 'vue'
import PolarisBox from "@/Shared/Polaris/PolarisBox.vue";
import LoadingPanel from "../Shared/Polaris/LoadingPanel.vue";
import EmptyState from "@/Shared/Polaris/EmptyState.vue";
import Popover from "@/Shared/PolarisPopover/Popover.vue";
import ButtonPopover from "@/Shared/PolarisPopover/ButtonPopover.vue";
import ActionList from "@/Shared/PolarisPopover/ActionList.vue";
import ActionsButton from "@/Shared/PolarisButton/ActionsButton.vue";
import Modal from "@/Shared/PolarisModal/Modal.vue";
import {useSizeChartListStore} from "../Stores/sizeChartList.js";

const props = defineProps({size_chart: Object,});
const store = useSizeChartListStore();
store.setInitData(props.size_chart);
store.setSizeChartData({...store.$state});
store.updateTime();

const isLoading = ref(true);
onMounted(() => {

    setTimeout(() => {
        isLoading.value = false;
    }, 3000); // Here we simulate a 2 seconds delay for loading content.
});
</script>

<template>

    <!-- Modal-->
    <Modal :OpenModal="store.isModalOpen" :titleHeader="store.modalTitle"
           :titleContent="store.modalContent"
           :titleSave="store.modalSecondaryButtonTitle"
           :titleDuplicateSave="store.modalSecondaryButtonTitle"
           :ifNotDuplicate="store.actionType !==  'duplicateChart'"
           :ifDuplicate="store.actionType === 'duplicateChart'"
           @ButtonClickSave="store.handleSecondaryButtonClick()"
           @ButtoncloseIcon="store.isModalOpen = false; store.selectedCharts = []"
           @ButtonCancelClose="store.isModalOpen = false; store.selectedCharts = []"
           titleCancel="Cancel"
    />

    <div v-if="store.size_chart.length > 0">

        <!--title and create size chart-->
        <PolarisBox title="Size Chart" @visit="store.visitCreateChart()"/>

        <table class="Polaris-IndexTable__Table Polaris-IndexTable--disableTextSelection Polaris-IndexTable__Table--sticky">


            <LoadingPanel :isProcessing="store.processing"/>

            <thead>
                <tr v-if="store.selectedCharts.length === 0">

                    <!--checkbox-->
                    <th class="Polaris-IndexTable__TableHeading Polaris-IndexTable__TableHeading--first">
                        <Checkbox :checked="store.isAllSelected" @change="store.toggleAllSelection"/>
                    </th>


                    <!--name-->
                    <th class="Polaris-IndexTable__TableHeading Polaris-IndexTable__TableHeading--second" data-index-table-heading="true">
                        <div style="--pc-index-table-heading-extra-padding-right: 0;">
                            <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Name</span>
                        </div>
                    </th>

                    <!--status-->
                    <th class="Polaris-IndexTable__TableHeading" data-index-table-heading="true">
                        <div style="--pc-index-table-heading-extra-padding-right: 0;">
                            <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Status</span>
                        </div>
                    </th>

                    <!--Last updated time-->
                    <th class="Polaris-IndexTable__TableHeading" data-index-table-heading="true">
                        <div style="--pc-index-table-heading-extra-padding-right: 0;">
                            <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Last updated time</span>
                        </div>
                    </th>

                    <!--Actions-->
                    <th class="Polaris-IndexTable__TableHeading" data-index-table-heading="true">
                        <div style="--pc-index-table-heading-extra-padding-right: 0;">
                            <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Actions</span>
                        </div>
                        <div></div>

                    </th>


                </tr>

                <tr v-else>
                    <!--checkbox-->
                    <th  class=" Polaris-IndexTable__TableHeading Polaris-IndexTable__TableHeading--first" style="background-color:#ffffff">
                        <Checkbox :checked="store.isAllSelected" @change="store.toggleAllSelection"/>
                    </th>


                    <!--name-->
                    <th class="Polaris-IndexTable__TableHeading Polaris-IndexTable__TableHeading--second" data-index-table-heading="true" style="background-color:#ffffff;left: 38px; min-width: 240px;">
                        <div class="" style="--pc-index-table-heading-extra-padding-right: 0;">
                            <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">{{store.selectedCharts.length}} Selected </span>
                        </div>
                    </th>

                    <!--status-->
                    <th class="Polaris-IndexTable__TableHeading" data-index-table-heading="true"style="background-color:#ffffff;min-width: 102px;">
                        <div style="--pc-index-table-heading-extra-padding-right: 0;">
                            <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium"></span>
                        </div>
                    </th>

                    <!--Last updated time-->
                    <th class="Polaris-IndexTable__TableHeading" data-index-table-heading="true" style="background-color:#ffffff; min-width: 210px;">
                        <div style="--pc-index-table-heading-extra-padding-right: 0;">
                                            <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium" style="color:#ffffff">
                                                Last updated time
                                            </span>
                        </div>
                    </th>

                    <!--Actions-->
                    <th  class="Polaris-IndexTable__TableHeading" data-index-table-heading="true"  style="background-color:#ffffff;">
                        <Popover>
                            <ButtonPopover :isPopoverOpen="store.isPopoverOpen" @togglePopover="store.togglePopover()"/>
                            <ActionList :isPopoverOpen="store.isPopoverOpen" @deactivate="store.confirmAction('deactivate')" @delete="store.confirmAction('selectDelete')"/>
                        </Popover>
                    </th>
                </tr>

            </thead>

            <tbody>
                <tr v-for="chart in store.size_chart" :key="chart.id"
                    :class="{ 'selected': store.selectedCharts.includes(chart.id) }"
                    class="Polaris-IndexTable__TableRow"
                    @click="store.handleRowClick(chart.id)"
                >
                    <!--checkbox-->
                    <td class="Polaris-IndexTable__TableCell Polaris-IndexTable__TableCell--first" @click.stop="store.toggleSelection(chart.id)">
                        <Checkbox
                            :checked="store.selectedCharts.includes(chart.id)"
                            @change.stop="store.selectedCharts.length > 0 ? store.toggleSelection(chart.id) : null"

                        />
                    </td>

                    <!--name-->
                    <td style="left: 38px; min-width: 240px;" class="Polaris-IndexTable__TableCell"><a data-primary-link=""></a>
                        <div class="Vtl-SizeChartListRow__Wrapper">

                            <div>
                               <p class="Polaris-Text--root Polaris-Text--headingSm">{{ chart.internal_name }}</p>
                            </div>

                            <span class="Vtl-SizeChartProductsSlot__Selection">All Products</span>
                        </div>
                    </td>


                    <!--status-->
                    <td style="min-width: 102px;"  class="Polaris-IndexTable__TableCell">
                        <!-- Display status with badges -->
                        <span v-if="chart.status === 0 " class="Polaris-Badge Polaris-Badge--toneInfo">
                            <span class="Polaris-Text--root Polaris-Text--bodySm">Draft</span>
                        </span>
                        <span v-if="chart.status === 1 " class="Polaris-Badge Polaris-Badge--toneSuccess">
                            <span class="Polaris-Text--root Polaris-Text--bodySm">Active</span>
                        </span>
                    </td>

                    <!--Last updated time-->
                    <td style="min-width: 210px;"  class="Polaris-IndexTable__TableCell">
                        <p>{{ store.timeDifference(new Date(chart.updated_at)) }}</p>
                    </td>

                    <!--Actions-->
                    <!-- in @click.native if actionButtonClicked is false true that visitEditChart in handleRowClick-->
                    <td  style="min-width: 168px;"  class="Polaris-IndexTable__TableCell">
                        <ActionsButton
                            @click.native="store.actionButtonClicked = true"
                            @duplicate="store.confirmAction('duplicateChart', chart.id)"
                            @edit="store.visitEditChart(chart.id)"
                            @delete="store.confirmAction('singleDelete', chart.id)"
                        />
                    </td>

                  </tr>
            </tbody>

        </table>

    </div>

    <EmptyState
        v-else
        heading="No Size Charts created yet"
        title="Help your visitors choose the right size and reduce returns by showing a size chart on product pages."
        image="https://d3acrzpqhtrug6.cloudfront.net/dist/assets/media/empty-states/vocabulary_spot.f63163d1d4e682bcb6d6.svg"
        @visit="store.visitCreateChart()"

    />

</template>

<style scoped>


.Polaris-Spinner svg {
    fill: #333334 !important;
}

.Vtl-SizeChartProductsSlot__Selection {
    border: var(--p-border-width-025) solid #eaeaea;
    border-radius: var(--p-border-radius-100);
    color: var(--p-color-text-secondary);
    display: block;
    font-size: var(--p-font-size-300);
    font-weight: var(--p-font-weight-regular);
    height: 40px;
    line-height: var(--p-font-line-height-600);
    margin: var(--p-space-050) var(--p-space-050) 0 0;
    overflow: hidden;
    padding: var(--p-space-200);
    text-align: center;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 70px;
}

.Vtl-SizeChartListRow__Wrapper {
    display: flex;
    flex-direction: column;
    gap: var(--p-space-200);
    padding: var(--p-space-200) var(--p-space-400);
}

.Polaris-IndexTable__Table tbody tr:hover {
    background-color: #f7f7f7;
}

/* Background color when the row is selected */
.selected {
    background-color: #f1f1f1;
}


</style>
