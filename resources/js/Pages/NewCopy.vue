
<script setup lang="ts">
import {watchEffect} from 'vue'
import { useIndexResourceState } from '@ownego/polaris-vue';
import { useSizeChartListStore } from "../Stores/sizeChartList.js";
import ActionsButton from "../Shared/PolarisButton/ActionsButton.vue";

// Initialize the Pinia store
const props = defineProps({ size_chart: Array });
const store = useSizeChartListStore();
store.setInitData(props.size_chart);


// Handle selection of table rows for bulk actions
const { selectedResources, handleSelectionChange } = useIndexResourceState(store.size_chart);

watchEffect(() => {
    selectedResources.value = selectedResources.value.filter(id => store.size_chart.some(chart => chart.id === id));
});

const resetFunc = () => {
    selectedResources.value = [];
};

</script>

<template>


    <Page
        title="Size Chart"
        subtitle="Reduce returns and increase sales by showing a size chart on product pages."
        compactTitle
    >

        <!--Table-->
        <LegacyCard>

            <IndexTable
                :itemCount="store.size_chart.length"
                :selectedItemsCount="allResourcesSelected ? 'All' : selectedResources.length"
                :headings="[ { title: 'Name' }, { title: 'Quick action' } ]"
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
                        </div>
                    </IndexTableCell>


                    <IndexTableCell>
                        <!-- After -->
                        <ActionsButton
                            @click.stop
                            @delete="store.deleteSizeChart(chart.id, resetFunc)"
                            @duplicate="store.duplicateSizeChart(chart.id, resetFunc)"
                        />
                    </IndexTableCell>
                </IndexTableRow>
            </IndexTable>

        </LegacyCard>
    </Page>


</template>
