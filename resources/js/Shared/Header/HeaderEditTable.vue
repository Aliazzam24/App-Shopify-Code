<template>

    <!--add column and row-->
    <div class="Polaris-Box">
        <div class="Polaris-InlineStack" style="--pc-inline-stack-align: space-between; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">


            <!--Add Column and Remove-->
            <button  @click="AddColumn" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" type="button">
                <span class="Polaris-Button__Icon"><span class="Polaris-Icon"><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path d="M6.25 10a.75.75 0 0 1 .75-.75h2.25v-2.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1-.75-.75Z"></path><path fill-rule="evenodd" d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"></path></svg></span></span>
                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Column</span>
            </button>
            <button @click="RemoveColumn" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" type="button">
                <span class="Polaris-Button__Icon"><span class="Polaris-Icon"><svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 20px; height: 20px;"><path d="M7 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"></path><path fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"></path></svg></span></span>
                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Column</span>
            </button>
            <!--End-->

            <!--Add Row and Remove-->
            <button @click="AddRow" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" type="button">
                <span class="Polaris-Button__Icon"><span class="Polaris-Icon"><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path d="M6.25 10a.75.75 0 0 1 .75-.75h2.25v-2.25a.75.75 0 0 1 1.5 0v2.25h2.25a.75.75 0 0 1 0 1.5h-2.25v2.25a.75.75 0 0 1-1.5 0v-2.25h-2.25a.75.75 0 0 1-.75-.75Z"></path><path fill-rule="evenodd" d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z"></path></svg></span></span>
                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Row</span>
            </button>
            <button @click="RemoveRow" class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText" type="button">
                <span class="Polaris-Button__Icon">
                    <span class="Polaris-Icon">
                        <svg viewBox="0 0 20 20" class="Icon_Icon__uZZKy" style="width: 20px; height: 20px;"><path d="M7 9.25a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z"></path><path fill-rule="evenodd" d="M17 10a7 7 0 1 1-14 0 7 7 0 0 1 14 0Zm-1.5 0a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"></path></svg>
                    </span>
                </span>
                <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Row</span>
            </button>
            <!--End-->

        </div>
    </div>
    <!--end-->

    <!--Erase content-->
    <div class="Polaris-InlineStack" style="--pc-inline-stack-align: space-between; --pc-inline-stack-wrap: wrap; --pc-inline-stack-gap-xs: var(--p-space-400); --pc-inline-stack-flex-direction-xs: row;">
        <button @click="EraseContent"  class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter Polaris-Button--iconWithText Polaris-Button--toneCritical" type="button">
            <span class="Polaris-Button__Icon"><span class="Polaris-Icon"><svg viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path d="M17 9.25a.75.75 0 0 1-1.5 0 3 3 0 0 0-3-3h-6.566l1.123 1.248a.75.75 0 1 1-1.114 1.004l-2.25-2.5a.75.75 0 0 1 .027-1.032l-2.25-2.25a.75.75 0 0 1 1.06 1.06l-.97.97h6.44a4.5 4.5 0 0 1 4.5 4.5Z"></path><path d="M3 10.75a.75.75 0 0 1 1.5 0 3 3 0 0 0 3 3h6.566l-1.123-1.248a.75.75 0 1 1 1.114-1.004l2.25 2.5a.75.75 0 0 1-.027 1.032l-2.25 2.25a.75.75 0 1 1-1.06-1.06l.97-.97h-6.44a4.5 4.5 0 0 1-4.5-4.5Z"></path></svg></span></span>
            <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">Erase content</span>
        </button>
    </div>
    <!--End-->

</template>

<script>
export default {

    methods: {
        AddColumn() {
            this.$emit('AddColumn');
        },
        RemoveColumn() {
            this.$emit('RemoveColumn');
        },
        AddRow() {
            this.$emit('AddRow');
        },
        RemoveRow() {
            this.$emit('RemoveRow');
        },
        EraseContent() {
            this.$emit('EraseContent');
        },
    }
};
</script>

