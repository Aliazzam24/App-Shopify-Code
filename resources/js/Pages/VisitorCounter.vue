<script setup>
import {Link, usePage} from "@inertiajs/vue3";
import { computed,ref ,onMounted} from 'vue';
import {useVisitorStore} from "../Stores/visitorStore.js";
import colorPicker from 'lightvue/color-picker';
import Page from "@/Shared/Polaris/Page.vue";
import Header from "@/Shared/Header/Header.vue";
import Layout from "../Shared/Polaris/Layout.vue";
import LayoutSection from "../Shared/Polaris/LayoutSection.vue";
import Grid from "../Shared/Polaris/Grid.vue";
import GridCell from "../Shared/Polaris/GridCell.vue";
import Card from "../Shared/Polaris/Card.vue";
import CardPreview from "../Shared/Polaris/CardPreview.vue";
import SkeletonPage from "../Shared/Polaris/SkeletonPage.vue";
import InputLabel from "../Shared/PolarisText/InputLabel.vue";
import TextLabel from "../Shared/PolarisText/TextLabel.vue";
import TextInput from "../Shared/PolarisText/TextInput.vue";
import TextPreview from "../Shared/Polaris/TextPreview.vue";
import FrameContextualSaveBar from "../Shared/PolarisCotextBar/FrameContextualSaveBar.vue";
import ContextualSaveBar from "../Shared/PolarisCotextBar/ContextualSaveBar.vue";
import Frame from "../Shared/PolarisCotextBar/Frame.vue";
import MessageBarContainer from "../Shared/PolarisCotextBar/MessageBarContainer.vue";
import ConSaveUnsaved from "../Shared/PolarisCotextBar/ConSaveUnsaved.vue";
import SaveButton from "../Shared/PolarisButton/SaveButton.vue";
import DiscardButton from "../Shared/PolarisButton/DiscardButton.vue";
import SecondaryButton from "../Shared/PolarisButton/SecondaryButton.vue";
import PrimaryButton from "../Shared/PolarisButton/PrimaryButton.vue";
import SpinnerButton from "../Shared/PolarisButton/SpinnerButton.vue";
import Modal from "../Shared/PolarisModal/Modal.vue";
import ModalHeader from "../Shared/PolarisModal/ModalHeader.vue";
import ModalTextContainer from "../Shared/PolarisModal/ModalTextContainer.vue";
import ModalFooter from "../Shared/PolarisModal/ModalFooter.vue";

const {widgetOptions} = usePage().props;
const store = useVisitorStore();
store.setInitData(widgetOptions);
store.setVisitorData({...store.$state});


// styles TextPreview VisitorCounter
const previewStyle = computed(() => {
    let style = {
        color: store.font_color,
        padding: `${store.text_padding}px`,
        fontSize: `${store.font_size}px`,
        border: `${store.border_size}px solid ${store.border_color}`,
        borderRadius: `${store.border_radius}px`,
        marginTop: `${store.outside_top}px`,
        marginBottom: `${store.outside_bottom}px`,
        fontFamily: store.font_family,
        textAlign: store.align_visitor
    };

    if (store.color_option === 'gradient') {
        style.background = `linear-gradient(${store.gradient_angle}deg,${store.gradient_start}, ${store.gradient_end})`;
    } else {
        style.background = store.background_color;
    }

    return style;
});

const isLoading = ref(true);
onMounted(() => {

    setTimeout(() => {
        isLoading.value = false;
    }, 1000); // Here we simulate a 2 seconds delay for loading content.
});
</script>

<template>
    <div>
        <SkeletonPage v-if="isLoading"/>
        <form v-else @submit.prevent="store.submitForm()">


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


            <Page>

                <!--Header-->
                <Header>

                    <div class="Polaris-Page-Header__Row">

                        <div class="Polaris-Page-Header__BreadcrumbWrapper">
                            <div class="Polaris-Box Polaris-Box--printHidden" style="--pc-box-max-width: 100%; --pc-box-padding-inline-end-xs: var(--p-space-100);">
                                <Link href="/"  tabindex="0" class="Vtl-NavLink link Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconOnly" role="link">
                         <span class="Polaris-Button__Icon">
                             <span class="Polaris-Icon"><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path fill-rule="evenodd" d="M16.5 10a.75.75 0 0 1-.75.75h-9.69l2.72 2.72a.75.75 0 0 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 1 1 1.06 1.06l-2.72 2.72h9.69a.75.75 0 0 1 .75.75Z"></path></svg></span>
                         </span>
                                </Link>
                            </div>
                        </div>

                        <div class="Polaris-Page-Header__TitleWrapper">
                            <div class="Polaris-Header-Title__TitleWrapper">

                                <h1 class="Polaris-Header-Title">
                                    <span class="Polaris-Text--root Polaris-Text--headingLg Polaris-Text--bold">Size Chart</span>
                                </h1>

                            </div>

                            <div class="Polaris-Header-Title__SubTitle Polaris-Header-Title__SubtitleMaxWidth"><p class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--subdued">Reduce returns and increase sales by showing a size chart on product pages.</p></div>
                        </div>

                        <!--Button Tutorial and Active app and Dropdown-->

                        <div class="Polaris-Page-Header__RightAlign">

                            <div class="Polaris-ActionMenu">
                                <div class="Polaris-ActionMenu-Actions__ActionsLayoutOuter">

                                    <div class="Polaris-ActionMenu-Actions__ActionsLayout">
                                        <div class="Polaris-ActionMenu-SecondaryAction">
                                            <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" type="button">
                                                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Tutorial</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="Polaris-Page-Header__PrimaryActionWrapper">
                                <div class="Polaris-Box Polaris-Box--printHidden">
                                    <button class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" type="button">
                                        <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Active</span>
                                    </button>
                                </div>
                            </div>

                        </div>

                        <!--End-->

                    </div>


                </Header>
                <!--End-->

                <!--Content-->
                <Layout>
                    <!--All Option-->
                    <LayoutSection>

                        <!-- General Settings -->

                        <Card title="General settings">


                            <div>
                                <InputLabel value="Widget Text"/>
                                <TextInput v-model="store.visitor_type"/>
                                <TextLabel value="Variables: {{visitor_number}}"/>
                            </div>

                            <div class="Polaris-Box" style="--pc-box-padding-block-start-xs:var(--p-space-200);--pc-box-padding-block-end-xs:var(--p-space-200);">
                                <Divider/>
                            </div>



                            <Grid :column-span="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }">

                                <GridCell>
                                    <InputLabel value="Counter Based on"/>
                                    <select v-model="store.counter_based" class="select-option" >
                                        <option v-for="counter in store.counterBasedOptions" :key="counter" :value="counter">
                                            {{ counter }}
                                        </option>
                                    </select>
                                </GridCell>

                                <GridCell>
                                    <InputLabel value="Visitors Count"/>
                                    <select v-model="store.count_visitor" class="select-option" >
                                        <option v-for="count in store.countVisitorOptions" :key="count" :value="count">
                                            {{ count }}
                                        </option>
                                    </select>
                                </GridCell>

                                <GridCell>
                                    <InputLabel value="Who Visitors Last"/>
                                    <select v-model="store.visitor_duration" class="select-option" >
                                        <option v-for="duration in store.visitorDurationOptions" :key="duration" :value="duration">
                                            {{ duration }}
                                        </option>
                                    </select>
                                </GridCell>

                                <GridCell>
                                    <InputLabel value="Choose an Icon"/>
                                    <select v-model="store.visitor_icon" class="select-option">
                                        <option v-for="icon in store.visitorIconOptions" :key="icon" :value="icon">
                                            {{ icon }}
                                        </option>
                                    </select>
                                </GridCell>

                            </Grid>

                        </Card>
                        <!--End-->

                        <!--Card settings -->
                        <Card title="Card settings">

                            <!--RadioButton single and Gradient-->
                            <div class="Polaris-BlockStack" style="--pc-block-stack-order:column">
                                <RadioButton id="single" value="single"  v-model="store.color_option" label="Single color background"/>
                                <RadioButton id="gradient" value="gradient"  v-model="store.color_option" label="Gradient background"/>
                            </div>
                            <!--End-->

                            <!--Section single and Gradient-->
                            <div>
                                <!--Section single to RadioButton-->
                                <div v-if="store.color_option === 'single'"  class="Polaris-Box" style="--pc-box-padding-block-start-xs:var(--p-space-300);--pc-box-padding-block-end-xs:var(--p-space-300);">
                                    <colorPicker v-model="store.background_color" :value="store.background_color" style="width:100%" hidePalette/>
                                </div>
                                <!--End-->

                                <!--Section Gradient to RadioButton-->
                                <div v-if="store.color_option === 'gradient'">

                                    <div class="Polaris-Box" style="--pc-box-padding-block-start-xs:var(--p-space-300);--pc-box-padding-block-end-xs:var(--p-space-300);">
                                        <RangeSlider label="Opacity percentage" :min="0" :max="360" v-model="store.gradient_angle" output/>
                                    </div>

                                    <Grid :column-span="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }">
                                        <GridCell>
                                            <colorPicker v-model="store.gradient_start" :value="store.gradient_start" style="width:100%" hidePalette/>
                                        </GridCell>

                                        <GridCell>
                                            <colorPicker v-model="store.gradient_end" :value="store.gradient_end" style="width:100%" hidePalette/>
                                        </GridCell>
                                    </Grid>

                                </div>
                                <!--End-->

                            </div>
                            <!--End-->

                            <div class="Polaris-Box" style="--pc-box-padding-block-start-xs:var(--p-space-400);--pc-box-padding-block-end-xs:var(--p-space-400);">
                                <Divider/>
                            </div>

                            <div>
                                <div class="Polaris-Box" style="--pc-box-padding-block-end-xs:var(--p-space-400);">
                                    <colorPicker v-model="store.border_color" :value="store.border_color" style="width:100%" label="Border Color" hidePalette/>
                                </div>

                                <Grid :column-span="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }">


                                    <GridCell>
                                        <TextField type="number" label="Border Size" v-model="store.border_size" autoComplete="off"/>
                                    </GridCell>

                                    <GridCell>
                                        <TextField type="number" label="Border Radius" v-model="store.border_radius" autoComplete="off"/>
                                    </GridCell>


                                    <GridCell>
                                        <TextField type="number" label="Outside top" v-model="store.outside_top" autoComplete="off"/>
                                    </GridCell>

                                    <GridCell>
                                        <TextField type="number" label="Outside bottom" v-model="store.outside_bottom" autoComplete="off"/>
                                    </GridCell>

                                </Grid>
                            </div>

                        </Card>
                        <!--End-->


                        <!--Color settings -->
                        <Card title="Color settings">


                            <div class="Polaris-BlockStack" style="--pc-block-stack-order:column">

                                <InputLabel value="Font Family"/>
                                <select v-model="store.font_family" class="select-option">
                                    <option v-for="font in store.fontOptions" :key="font" :value="font">
                                        {{ font }}
                                    </option>
                                </select>
                            </div>

                            <div class="Polaris-Box" style="--pc-box-padding-block-start-xs:var(--p-space-400);--pc-box-padding-block-end-xs:var(--p-space-400);">
                                <Divider/>
                            </div>

                            <Grid :column-span="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }">

                                <GridCell>

                                    <colorPicker v-model="store.font_color" :value="store.font_color" style="width:100%"
                                                 label="Font Color" hidePalette />

                                </GridCell>

                                <GridCell>

                                    <colorPicker v-model="store.count_color" :value="store.count_color" style="width:100%"
                                                 label="Count Color" hidePalette />

                                </GridCell>

                                <GridCell>

                                    <colorPicker v-model="store.icon_color" :value="store.icon_color" style="width:100%"
                                                 label="Icon Color" hidePalette/>
                                </GridCell>

                                <GridCell>

                                    <colorPicker v-model="store.border_color" :value="store.border_color" style="width:100%" label="Border Color" hidePalette/>

                                </GridCell>


                            </Grid>

                        </Card>
                        <!--End-->

                        <!-- Advanced settings -->
                        <Card title="Advanced settings">

                            <div class="Polaris-BlockStack" style="--pc-block-stack-order:column">
                                <InputLabel value="Align Visitor"/>
                                <select v-model="store.align_visitor" class="select-option">
                                    <option v-for="align in store.alignOptions" :key="align" :value="align">
                                        {{ align }}
                                    </option>
                                </select>
                            </div>

                            <div class="Polaris-Box" style="--pc-box-padding-block-start-xs:var(--p-space-300);--pc-box-padding-block-end-xs:var(--p-space-300);">
                                <Divider/>
                            </div>

                            <Grid :column-span="{ xs: 1, sm: 1, md: 2, lg: 2, xl: 2 }">

                                <GridCell>
                                    <TextField type="number" label="Font Size" v-model="store.font_size" autoComplete="off"/>
                                </GridCell>

                                <GridCell>
                                    <TextField type="number" label="Text Padding" v-model="store.text_padding" autoComplete="off"/>
                                </GridCell>

                                <GridCell>
                                    <TextField type="number" label="Border Size" v-model="store.border_size" autoComplete="off"/>
                                </GridCell>

                                <GridCell>
                                    <TextField type="number" label="Border Radius" v-model="store.border_radius" autoComplete="off"/>
                                </GridCell>


                                <GridCell>
                                    <TextField type="number" label="Outside top" v-model="store.outside_top" autoComplete="off"/>
                                </GridCell>

                                <GridCell>
                                    <TextField type="number" label="Outside bottom" v-model="store.outside_bottom" autoComplete="off"/>
                                </GridCell>

                            </Grid>

                        </Card>
                        <!--End-->

                    </LayoutSection>
                    <!--End-->

                    <!--preview-->
                    <CardPreview title="preview">
                        <div class="style-prv">
                            <img src="https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/public/spacing-top.png" alt="Spacing top" width="100%" height="auto" loading="eager">
                            <div :style="previewStyle">

                                <font-awesome-icon :style="{ color: store.icon_color }"
                                                   :icon="['fas',store.visitor_icon]"
                                                   style="margin-right:8px"/>
                                <TextPreview :value="store.visitorType" />
                            </div>
                            <img src="https://rivmorkxomnwzdlytbgv.supabase.co/storage/v1/object/public/public/spacing-bottom.png" alt="Spacing bottom" width="100%" height="auto" loading="eager">
                        </div>
                    </CardPreview>
                    <!--End-->

                </Layout>
                <!--End-->

            </Page>

        </form>
    </div>
</template>
