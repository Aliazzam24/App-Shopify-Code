<script setup>
import { defineProps } from 'vue';
import DataTable from "../Components/DataTable.vue";
import Page from "@/Shared/Polaris/Page.vue";
import Layout from "@/Shared/Polaris/Layout.vue";
import LayoutSection from "@/Shared/Polaris/LayoutSection.vue";
import LegacyCard from "@/Shared/Polaris/LegacyCard.vue";
import Header from "@/Shared/Header/Header.vue";
import HeaderPageList from "@/Shared/Header/HeaderPageList.vue";
import { useSizeChartListStore } from "../Stores/sizeChartListCopy.js";

const props = defineProps({ size_chart: Object });
const store = useSizeChartListStore();
store.setInitData(props.size_chart);
store.setSizeChartData({ ...store.$state });
</script>
<template>
    <Page>
        <Header>
            <HeaderPageList @visit="store.visitPageApp()" @tutorial="" @action=""/>
        </Header>

        <!-- Content -->
        <Layout>
            <LayoutSection>
                <!-- Table -->
                <LegacyCard>
                    <DataTable :size_chart="store.size_chart" />
                </LegacyCard>
            </LayoutSection>
        </Layout>

        <div class="Polaris-Box" style="--pc-box-min-height: 108px;"></div>
    </Page>
</template>
