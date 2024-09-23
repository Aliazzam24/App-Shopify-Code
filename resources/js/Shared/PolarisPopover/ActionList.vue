<template>

    <div v-if="isPopoverOpen" class="Polaris-PositionedOverlay Polaris-Popover__PopoverOverlay Polaris-Popover__PopoverOverlay--open" style="top: 96.093px; right: 1px; ">
        <div class="Polaris-Popover" data-polaris-overlay="true">
            <div class="Polaris-Popover__FocusTracker" tabindex="0"></div>

            <div class="Polaris-Popover__ContentContainer ">
                <div id=":r1j:" tabindex="-1" class="" style="height: 77.9648px;">
                    <div class="Polaris-Popover__Pane Polaris-Scrollable Polaris-Scrollable--vertical Polaris-Scrollable--horizontal Polaris-Scrollable--scrollbarWidthThin" data-polaris-scrollable="true">
                        <div class="Polaris-Box">
                            <div class="Polaris-Box" tabindex="-1" style="--pc-box-padding-block-start-xs: var(--p-space-150); --pc-box-padding-block-end-xs: var(--p-space-150); --pc-box-padding-inline-start-xs: var(--p-space-150); --pc-box-padding-inline-end-xs: var(--p-space-150);">


                                <ul class="Polaris-BlockStack Polaris-BlockStack--listReset" style="--pc-block-stack-order: column; --pc-block-stack-gap-xs: var(--p-space-050);">
                                    <li class="Polaris-Box">
                                        <div class="Polaris-InlineStack" style="--pc-inline-stack-wrap: nowrap; --pc-inline-stack-flex-direction-xs: row;">

                                            <button @click="deactivate" type="button" class="Polaris-ActionList__Item Polaris-ActionList--default">
                                                <div class="Polaris-Box" style="--pc-box-width: 100%;">
                                                    <div class="Polaris-InlineStack" style="--pc-inline-stack-block-align: center; --pc-inline-stack-wrap: nowrap; --pc-inline-stack-gap-xs: var(--p-space-150); --pc-inline-stack-flex-direction-xs: row;">
                                                        <span class="Polaris-ActionList__Text">
                                                            <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">
                                                                <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">
                                                                    Deactivate
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>

                                        </div>
                                    </li>
                                    <li class="Polaris-Box">
                                        <div class="Polaris-InlineStack" style="--pc-inline-stack-wrap: nowrap; --pc-inline-stack-flex-direction-xs: row;">

                                            <button  @click="deleteItem" type="button" class="Polaris-ActionList__Item Polaris-ActionList--default">
                                                <div class="Polaris-Box" style="--pc-box-width: 100%;">
                                                    <div class="Polaris-InlineStack" style="--pc-inline-stack-block-align: center; --pc-inline-stack-wrap: nowrap; --pc-inline-stack-gap-xs: var(--p-space-150); --pc-inline-stack-flex-direction-xs: row;">
                                                        <span class="Polaris-ActionList__Text">
                                                            <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">
                                                                <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--regular">
                                                                    Delete
                                                                </span>
                                                            </span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </button>

                                        </div>
                                    </li>
                                </ul>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="Polaris-Popover__FocusTracker" tabindex="0"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        isPopoverOpen: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        deactivate() {
            this.$emit('deactivate');
        },
        deleteItem() {
            this.$emit('delete');
        }
    }
};
</script>
