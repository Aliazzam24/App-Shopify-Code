<template>
    <div class="Polaris-LegacyCard">
        <div v-if="title" class="Polaris-LegacyCard__Header Polaris-LegacyCard__FirstSectionPadding">
            <p class="Polaris-Text--root Polaris-Text--headingMd">{{title}}</p>
        </div>
        <div class="Polaris-LegacyCard__Section Polaris-LegacyCard__LastSectionPadding">


            <div class="card">
                <slot></slot>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "Card",
    props:{title:String}
}
</script>
