<template>
    <div class="Polaris-LegacyCard">
        <div class="Polaris-IndexTable">
            <div v-if="title" class="Polaris-LegacyCard__Header Polaris-LegacyCard__FirstSectionPadding">
                <h2 class="Polaris-Text--root Polaris-Text--headingSm">{{ title }}</h2>
            </div>

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
