<template>
    <div class="Apex-ColorField__Inner">
        <button @click="onClickToggle"
                type="button"
                class="Apex-ColorField__Inner Apex-ColorField__Inner--Activator"
                :style="{ backgroundColor: color, 'max-width': '100px' }"
        ></button>

        <slot></slot>
    </div>
</template>


<script>
export default {

    props: {
        color: {type: String, default: ""},
    },

    methods: {
        onClickToggle() {
            this.$emit('onClickToggle');
        },

    }
};
</script>

<style scoped>
.Apex-ColorField__Inner {
    display: flex;
}
.Apex-ColorField__Inner--Activator {
    -webkit-appearance: none;
    appearance: none;
    border: none;
    border-radius: var(--p-border-radius-200);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, .19);
    color: inherit;
    cursor: pointer;
    font-size: inherit;
    height: var(--p-space-800);
    line-height: inherit;
    margin-right: .5rem;
    padding: 0;
    width: var(--p-space-800);
}

</style>
