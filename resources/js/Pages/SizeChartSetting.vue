<script setup lang="ts">
import { useSizeChartSettingStore } from "../Stores/SizeChartSetting";
import {router, usePage} from "@inertiajs/vue3";
import {ColorPicker, LayoutSection, TextField} from "@ownego/polaris-vue";
import LegacyTabs from "@/Shared/Polaris/LegacyTabs.vue";
import Icon from "@/Shared/Polaris/Icon.vue";
import ChooseButtonIcon from "../Shared/ChooseImg/ChooseButtonIcon.vue";
import ChooseBorderIcon from "../Shared/ChooseImg/ChooseBorderIcon.vue"
import ColorFiled from "@/Shared/ColorPicker/ColorFiled.vue";
import ColorFieldInner from "@/Shared/ColorPicker/ColorFieldInner.vue";
import FrameContextualSaveBar from "@/Shared/PolarisCotextBar/FrameContextualSaveBar.vue";
import ContextualSaveBar from "../Shared/PolarisCotextBar/ContextualSaveBar.vue";

// Initialize the Pinia store
const { widgetOptions } = usePage().props;
const store = useSizeChartSettingStore();
store.setInitData(widgetOptions);

</script>

<template>

    <Modal sectioned :open="store.active" :primary-action="store.primaryAction" :secondary-actions="store.secondaryActions" @close="store.active = false">
        <template #title>{{ store.modalTitle }}</template>
        <p>{{ store.modalContent }}</p>
    </Modal>
    <form @submit.prevent="store.handleSubmit()">
        <FrameContextualSaveBar v-if="store.hasChanges() && !store.isSubmitting" logo="https://cdn.shopify.com/s/files/1/2376/3301/files/Shopify_Secondary_Inverted.png">
            <ContextualSaveBar @discard="store.showDiscardModal()" :processing="store.processing" title="Unsaved size chart!"/>
        </FrameContextualSaveBar>
        <Page
            title="Size Chart"
            compactTitle
            :backAction="{ content: 'Products', onAction: () => router.visit('/') }"
            :secondaryActions="[{content: 'Tutorial',onAction: () => console.log('Tutorial'),}]"
            :actionGroups="[{title: 'Active', actions: [{content: 'Deactive Size Chart',onAction: () => console.log('Deactive Size Chart action'),}],}]"
        >

            <Layout>

                <!--List link-->
                <LayoutSection>
                    <LegacyTabs
                        @visitList="router.visit('/app/size_chart/list')"
                        @visitSetting="router.visit('/app/size_chart/setting')"
                    />
                </LayoutSection>

                <!--Button style-->
                <LayoutSection>
                    <InlineGrid style="--pc-inline-grid-grid-template-columns-xs: 1fr; --pc-inline-grid-grid-template-columns-md: 2fr 5fr; --pc-inline-grid-gap-xs: var(--p-space-400);">
                        <Box><Text variant="headingMd" as="h6">Button style</Text></Box>
                        <LegacyCard title="Icon">
                            <LegacyCardSection>
                                <BlockStack gap="500">
                                    <Box>
                                        <InlineGrid style="--pc-inline-grid-grid-template-columns-xs: repeat(4, minmax(0, 1fr)); --pc-inline-grid-grid-template-columns-sm: repeat(5, minmax(0, 1fr)); --pc-inline-grid-grid-template-columns-md: repeat(7, minmax(0, 1fr)); --pc-inline-grid-gap-xs: var(--p-space-300);">
                                            <!-- v-for loop to render icons -->
                                            <ChooseButtonIcon
                                                :icons="store.icons"
                                                :selectIcon="store.selectIcon"
                                                :selectedIcon="store.chart_icon">
                                            </ChooseButtonIcon>

                                        </InlineGrid>
                                    </Box>

                                    <BlockStack>
                                        <Box style="--pc-box-background: var(--p-color-bg-surface-secondary); --pc-box-border-color: transparent; --pc-box-border-style: solid; --pc-box-border-radius: var(--p-border-radius-200); --pc-box-border-width: var(--p-border-width-050); --pc-box-padding-block-start-xs: var(--p-space-300); --pc-box-padding-block-end-xs: var(--p-space-300); --pc-box-padding-inline-start-xs: var(--p-space-300); --pc-box-padding-inline-end-xs: var(--p-space-300);">
                                            <BlockStack>
                                                <label class="Vtl-TraitFieldItemWrapper__Label" for="button-margin-default-left"><span class="Vtl-TraitFieldItemWrapper__LabelText">Margin</span></label>
                                                <InlineGrid gap="300" :columns="2">

                                                    <TextField v-model="store.chart_top" label="Top" type="number" autoComplete="off"/>
                                                    <TextField v-model="store.chart_bottom" type="number" label="Bottom" autoComplete="off"/>

                                                </InlineGrid>
                                            </BlockStack>
                                        </Box>
                                    </BlockStack>

                                </BlockStack>

                            </LegacyCardSection>
                        </LegacyCard>
                    </InlineGrid>
                </LayoutSection>

                <!--Table Style-->
                <LayoutSection>
                    <InlineGrid style="--pc-inline-grid-grid-template-columns-xs: 1fr; --pc-inline-grid-grid-template-columns-md: 2fr 5fr; --pc-inline-grid-gap-xs: var(--p-space-400);">
                        <Box><Text variant="headingMd" as="h6">Table Style</Text></Box>
                        <LegacyCard>
                            <LegacyCardSection>
                                <BlockStack gap="200">
                                    <InlineStack gap="100" block-align="center">
                                        <Text variant="headingMd" as="h6">Choose a table design</Text>
                                        <Tooltip content="These styles are applied globally to all size charts. Any specific style settings applied in the table editor will only be applied to the corresponding size charts. Also, they only apply to the storefront and are not reflected in the table editor.">
                                            <Icon :source="store.infoIcon" />
                                        </Tooltip>
                                    </InlineStack>
                                    <Box>
                                        <InlineGrid style="--pc-inline-grid-grid-template-columns-sm: repeat(1, minmax(0, 1fr)); --pc-inline-grid-grid-template-columns-md: repeat(3, minmax(0, 1fr)); --pc-inline-grid-gap-xs: var(--p-space-300);">

                                            <!-- v-for loop to render borders -->
                                            <ChooseBorderIcon
                                                :borders="store.borders"
                                                :selectBorder="store.selectBorder"
                                                :selectedBorder="store.chart_border">
                                            </ChooseBorderIcon>

                                        </InlineGrid>
                                    </Box>
                                    <BlockStack>
                                        <Box>
                                            <Select
                                                label="Border thickness"
                                                :options="store.borderThicknessOptions"
                                                v-model="store.chart_border_thickness"
                                            />
                                        </Box>
                                    </BlockStack>

                                    <BlockStack gap="400">

                                        <ColorFiled title="Border color" titleFotter="Controls the border color of the tables.">
                                            <ColorFieldInner @onClickToggle="store.toggleBorderColorPicker" :color="store.chart_border_color">
                                                <TextField v-model="store.chart_border_color" readonly />
                                            </ColorFieldInner>
                                            <ColorPicker  v-if="store.showBorderColorPicker" v-model="store.chart_border_color" class="Apex-table-custom-color-picker" output="hex"/>
                                        </ColorFiled>

                                        <ColorFiled title="Striped row background color" titleFotter="Controls the border color of the tables.">

                                            <ColorFieldInner @onClickToggle="store.toggleRowBackgroundColorPicker" :color="store.chart_row_background_color">
                                                <TextField v-model="store.chart_row_background_color" readonly />
                                            </ColorFieldInner>

                                            <ColorPicker  v-if="store.showRowBackgroundColorPicker" v-model="store.chart_row_background_color" class="Apex-custom-color-picker" output="hex"/>

                                        </ColorFiled>

                                    </BlockStack>

                                </BlockStack>
                            </LegacyCardSection>
                        </LegacyCard>
                    </InlineGrid>
                </LayoutSection>

                <!--Modal Style-->
                <LayoutSection>
                    <InlineGrid style="--pc-inline-grid-grid-template-columns-xs: 1fr; --pc-inline-grid-grid-template-columns-md: 2fr 5fr; --pc-inline-grid-gap-xs: var(--p-space-400);">
                        <Box>
                            <Text variant="headingMd" as="h6">Modal Style</Text>
                        </Box>
                        <LegacyCard title="Modal Style">
                            <LegacyCardSection>
                                <BlockStack gap="400">
                                    <ColorFiled title="Modal background color" titleFotter="Controls the background color from the size chart modal.">
                                        <ColorFieldInner @onClickToggle="store.toggleBackgroundColorPicker" :color="store.chart_background_color">
                                            <TextField v-model="store.chart_background_color" readonly />
                                        </ColorFieldInner>
                                        <ColorPicker  v-if="store.showBackgroundColorPicker" v-model="store.chart_background_color" class="Apex-custom-color-picker" output="hex"/>
                                    </ColorFiled>
                                    <ColorFiled title="Modal text color" titleFotter="Controls the text color from the size chart modal.">
                                        <ColorFieldInner @onClickToggle="store.toggleTextColorPicker" :color="store.chart_text_color">
                                            <TextField v-model="store.chart_text_color" readonly />
                                        </ColorFieldInner>
                                        <ColorPicker  v-if="store.showTextColorPicker" v-model="store.chart_text_color" class="Apex-custom-color-picker" output="hex"/>
                                    </ColorFiled>
                                </BlockStack>
                            </LegacyCardSection>
                        </LegacyCard>

                    </InlineGrid>
                </LayoutSection>

                <!--Translations-->
                <LayoutSection>
                    <InlineGrid style="--pc-inline-grid-grid-template-columns-xs: 1fr; --pc-inline-grid-grid-template-columns-md: 2fr 5fr; --pc-inline-grid-gap-xs: var(--p-space-400);">
                        <Box>
                            <Text variant="headingMd" as="h6">Translations</Text>
                        </Box>

                        <LegacyCard title="Translations">
                            <LegacyCardSection>
                                <TextField v-model="store.chart_text" label="Button Text" helpText="This is the text your visitors will click on the Product Page to display the Size Chart." autoComplete="off"/>
                            </LegacyCardSection>
                        </LegacyCard>

                    </InlineGrid>
                </LayoutSection>

            </Layout>

            <Box style="--pc-box-min-height: 108px;"></Box>

        </Page>
    </form>
</template>
