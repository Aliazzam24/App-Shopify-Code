<script setup lang="ts">
import {router,Link} from "@inertiajs/vue3";

import { useIndexResourceState } from '@ownego/polaris-vue';
import { useSizeChartListStore } from "../Stores/sizeChartList.js";
import ActionsButton from "@/Shared/PolarisButton/ActionsButton.vue";
import LoadingPanel from "@/Shared/Polaris/LoadingPanel.vue";
import PolarisBox from "@/Shared/Polaris/PolarisBox.vue";

// Initialize the Pinia store
const props = defineProps({ size_chart: Array });
const store = useSizeChartListStore();
store.setInitData(props.size_chart);
store.updateTime();

// Handle selection of table rows for bulk actions
const { selectedResources, handleSelectionChange,allResourcesSelected } = useIndexResourceState(store.size_chart);

const bulkActions = [
    {
        content: 'Deactivate',
        onAction: () => store.deactivateSelectedSizeCharts(selectedResources.value)
    },
    {
        content: 'Delete',
        onAction: () => store.deleteSelectedSizeCharts(selectedResources.value),
    }
];
const onDuplicate = (chartId) => store.showDuplicateModal(chartId, selectedResources.value);
const onDelete = (chartId) => store.showDeleteModal(chartId, selectedResources.value);

</script>

<template>

    <Modal sectioned :open="store.active" :primary-action="store.primaryAction" :secondary-actions="store.secondaryActions" @close="store.active = false">
        <template #title>{{ store.modalTitle }}</template>
        <p>{{ store.modalContent }}</p>
    </Modal>

    <Page
        title="Size Chart"
        subtitle="Reduce returns and increase sales by showing a size chart on product pages."
        compactTitle
        :backAction="{ content: 'Products', onAction: () => router.visit('/') }"
        :secondaryActions="[{content: 'Tutorial',onAction: () => console.log('Tutorial'),}]"
        :actionGroups="[{title: 'Active', actions: [{content: 'Deactive Size Chart',onAction: () => console.log('Deactive Size Chart action'),}],}]"
    >

        <div class="Polaris-Box" style="margin-bottom:20px;--pc-box-border-color: var(--p-color-border-secondary); --pc-box-border-style: solid; --pc-box-border-block-end-width: var(--p-border-width-025); --pc-box-padding-inline-start-xs: var(--p-space-200); --pc-box-padding-inline-end-xs: var(--p-space-200);">


            <ul role="tablist" class="Polaris-LegacyTabs">

                <li class="Polaris-LegacyTabs__TabContainer" role="presentation">
                    <Link href="/app/size_chart/list" tabindex="0" class="Vtl-NavLink link Polaris-LegacyTabs__Tab Polaris-LegacyTabs__Tab--selected" role="link">
                        <span class="Polaris-LegacyTabs__Title">
                            <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">Size Charts</span>
                        </span>
                    </Link>
                </li>

                <li href="/app/size_chart/list" class="Polaris-LegacyTabs__TabContainer" role="presentation">
                    <Link tabindex="0" class="Vtl-NavLink link Polaris-LegacyTabs__Tab" role="link">
                        <span class="Polaris-LegacyTabs__Title">
                            <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">Settings</span>
                        </span>
                    </Link>
                </li>


            </ul>

        </div>

        <!--Table-->

        <LegacyCard>

            <PolarisBox title="Size Chart" @visit="router.visit('/app/size_chart/create')"/>

            <LoadingPanel class="polaris-css-animation" v-if="store.processing" :isProcessing="store.processing"/>

            <IndexTable
                :resourceName="store.resourceName"
                :itemCount="store.size_chart.length"
                :selectedItemsCount="allResourcesSelected ? 'All' : selectedResources.length"
                :headings="[ { title: 'Name' }, { title: 'Status' }, { title: 'Last updated time' }, { title: 'Quick action' } ]"
                :bulkActions="bulkActions"
                @selection-change="handleSelectionChange"
            >

                <!-- Loop through size_chart data from the store -->
                <IndexTableRow
                    v-for="(chart, index) in store.size_chart"
                    :id="chart.id"
                    :key="chart.id"
                    :position="index"
                    :selected="selectedResources.includes(chart.id)"
                >
                    <IndexTableCell>
                        <div class="Vtl-SizeChartListRow__Wrapper">

                            <Text variant="bodyMd" fontWeight="bold" as="span">{{ chart.internal_name }}</Text>
                            <div>
                                <Text class="Vtl-SizeChartProductsSlot__Selection" variant="bodyMd" fontWeight="bold" as="span">All product</Text>
                            </div>
                        </div>
                    </IndexTableCell>

                    <IndexTableCell>
                        <!-- Status Column -->
                        <Badge :tone="chart.status === 1 ? 'success' : 'info'">
                            {{ chart.status === 1 ? 'Active' : 'Draft' }}
                        </Badge>
                    </IndexTableCell>

                    <IndexTableCell>
                        {{ store.timeDifference(new Date(chart.updated_at)) }}
                    </IndexTableCell>

                    <IndexTableCell>
                        <ActionsButton
                            @click.stop
                            @duplicate="onDuplicate(chart.id)"
                            @edit="router.visit(`/app/size_chart/edit/${chart.id}`)"
                            @delete="onDelete(chart.id)"
                        />
                    </IndexTableCell>
                </IndexTableRow>
            </IndexTable>

        </LegacyCard>
    </Page>

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
    padding: var(--p-space-200);
}


</style>
