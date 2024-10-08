<script>
export default {
    props: {
        title: {type: String, default: ""},
        titleFotter: {type: String, default: ""},
    },

}
</script>

<template>


    <div class="Apex-FormSettingStack__FieldItem--Options Apex-ColorField">
        <Text>{{title}}</Text>


        <slot/>

        <div>
            <p class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--subdued">
                <span>{{titleFotter}}</span>
            </p>
        </div>

    </div>

</template>

<style scoped>
/*Style Color Picker*/
.Apex-FormSettingStack__FieldItem--Options {
    display: flex;
    flex-direction: column;
    gap: var(--p-space-100);
}
.Apex-ColorField {
    display: flex;
    flex-direction: column;
    gap: var(--p-space-100);
}
</style>
