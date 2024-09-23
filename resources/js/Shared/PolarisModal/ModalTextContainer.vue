<template>

    <div class="Polaris-Modal__Body Polaris-Scrollable Polaris-Scrollable--vertical Polaris-Scrollable--horizontal Polaris-Scrollable--scrollbarWidthThin" data-polaris-scrollable="true">
        <div class="Polaris-Modal-Section">
            <section class="Polaris-Box" style="--pc-box-padding-block-start-xs: var(--p-space-400); --pc-box-padding-block-end-xs: var(--p-space-400); --pc-box-padding-inline-start-xs: var(--p-space-400); --pc-box-padding-inline-end-xs: var(--p-space-400);">{{ title }}</section>
        </div>
    </div>
</template>

<<script>
export default {
    name: "ModalTextContainer",
    props:{title:String}
}
</script>
