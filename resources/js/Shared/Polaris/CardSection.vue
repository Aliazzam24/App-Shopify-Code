<script>
export default {
    props: {
        title: {type: String, default: ""}
    }
}
</script>

<template>
    <div class="Polaris-Layout__Section Polaris-Layout__Section--fullWidth">
        <div class="Polaris-ShadowBevel" style="--pc-shadow-bevel-z-index: 32; --pc-shadow-bevel-content-xs: &quot;&quot;; --pc-shadow-bevel-box-shadow-xs: var(--p-shadow-100); --pc-shadow-bevel-border-radius-xs: var(--p-border-radius-300);">
            <div class="Polaris-Box" style="--pc-box-background: var(--p-color-bg-surface); --pc-box-min-height: 100%; --pc-box-overflow-x: clip; --pc-box-overflow-y: clip; --pc-box-padding-block-start-xs: var(--p-space-400); --pc-box-padding-block-end-xs: var(--p-space-400); --pc-box-padding-inline-start-xs: var(--p-space-400); --pc-box-padding-inline-end-xs: var(--p-space-400);">
                <div class="Polaris-BlockStack" style="--pc-block-stack-order: column; --pc-block-stack-gap-xs: var(--p-space-300);">
                    <p class="Polaris-Text--root Polaris-Text--headingMd">{{title}}</p>

                    <slot/>

                </div>
            </div>
        </div>
    </div>
</template>
