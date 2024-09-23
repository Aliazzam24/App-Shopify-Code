<template>
    <div v-if="isProcessing" style="    margin-top: 60px;" class="Polaris-IndexTable__LoadingPanel Polaris-IndexTable__LoadingPanelEntered">
        <div class="Polaris-IndexTable__LoadingPanelRow">
            <span class="Polaris-Spinner Polaris-Spinner--sizeSmall">
                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></path></svg>
            </span>
            <span role="status">
                <span class="Polaris-Text--root Polaris-Text--visuallyHidden"></span>
            </span>
            <span class="Polaris-IndexTable__LoadingPanelText">Loading size-charts…</span>
        </div>
    </div>


<!--    <div class="Polaris-IndexTable__LoadingPanel">-->
<!--        <div class="Polaris-IndexTable__LoadingPanelRow">-->
<!--            <span class="Polaris-Spinner Polaris-Spinner&#45;&#45;sizeSmall">-->
<!--                <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></path></svg>-->
<!--            </span>-->
<!--            <span role="status">-->
<!--                <span class="Polaris-Text&#45;&#45;root Polaris-Text&#45;&#45;visuallyHidden">-->
<!--                </span>-->
<!--            </span>-->
<!--            <span class="Polaris-IndexTable__LoadingPanelText">Loading size-charts…</span>-->
<!--        </div>-->
<!--    </div>-->

</template>

<script>
export default {
    props: {
        isProcessing: { //v-if
            type: Boolean,
            default: false,
        },
    },

};
</script>


<style scoped>
.Polaris-Spinner svg {
    fill: #333334 !important;
}
</style>
