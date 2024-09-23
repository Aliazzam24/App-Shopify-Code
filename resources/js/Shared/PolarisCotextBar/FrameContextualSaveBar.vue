<template>
    <div style="height:1px">
        <div class="Polaris-Frame" data-polaris-layer="true">
            <div class="polaris-css-animation Polaris-Frame__ContextualSaveBar Polaris-Frame-CSSAnimation--startFade Polaris-Frame-CSSAnimation--endFade">
                <div class="Polaris-Frame-ContextualSaveBar">

                    <div class="Polaris-Frame-ContextualSaveBar__LogoContainer" style="width: 86px;">
                        <img alt="" :src="logo"  style="width: 86px;">
                    </div>


                    <slot/>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        logo: {
            type: String,
            default: ""
        },

    },

};
</script>

<style scoped>
@keyframes fade-in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

.polaris-css-animation {
    animation: 0.2s fade-in ease-out;
}

</style>
