<template>

    <button v-if="ifDuplicate"   @click="buttonClick"  class="Vtl-NavLink link Polaris-Button Polaris-Button--pressable Polaris-Button--variantPrimary Polaris-Button--sizeMedium Polaris-Button--textAlignCenter" type="button">
        <span class="Polaris-Text--root Polaris-Text--bodySm Polaris-Text--medium">{{title}}</span>
    </button>

</template>


<script>
export default {
    props: {
        ifDuplicate: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
        }
    },
    methods: {
        buttonClick() {
            this.$emit('buttonClick');
        },

    }
};
</script>
