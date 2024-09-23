<template>
    <div class="Polaris-Layout__Section Polaris-Layout__Section--oneThird style-prv"
         style="background: white;border: 11px solid rgb(236 236 236);border-radius: 40px;">
        <div>

            <div v-if="title" class="Polaris-LegacyCard__Header Polaris-LegacyCard__FirstSectionPadding">
                <h2 class="Polaris-Text--root Polaris-Text--headingSm">{{ title }}</h2>
            </div>
            <div class="Polaris-LegacyCard__Section Polaris-LegacyCard__LastSectionPadding">


                <div class="card">
                    <slot></slot>
                </div>
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


<style>
.style-prv {
    top: 16px;
    height: 600px;
    overflow-y: hidden;
    position: sticky;
    display: flex;
    flex-direction: column;
    -webkit-box-pack: start;
    justify-content: flex-start;
    -webkit-box-align: center;
}

</style>


<!--<template>-->
<!--    <div class="Polaris-Layout__Section Polaris-Layout__Section&#45;&#45;oneHalf style-prv">-->
<!--        <div class="cardPrvStyle">-->
<!--            <div>-->
<!--                <div v-if="title" class="Polaris-LegacyCard__Header Polaris-LegacyCard__FirstSectionPadding">-->
<!--                    <h2 class="Polaris-Text&#45;&#45;root Polaris-Text&#45;&#45;headingSm">{{ title }}</h2>-->
<!--                </div>-->
<!--                <div class="Polaris-LegacyCard__Section Polaris-LegacyCard__LastSectionPadding">-->


<!--                    <div class="card">-->
<!--                        <slot></slot>-->
<!--                    </div>-->
<!--                </div>-->
<!--            </div>-->
<!--        </div>-->

<!--    </div>-->
<!--</template>-->


<!--<script>-->
<!--export default {-->
<!--    name: "CardPreview",-->
<!--    props:{title:String}-->
<!--}-->
<!--</script>-->


<!--<style>-->
<!--.style-prv {-->
<!--    top: 16px;-->
<!--    height: 550px;-->
<!--    position: sticky;-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    -webkit-box-pack: start;-->
<!--    justify-content: flex-start;-->
<!--    -webkit-box-align: center;-->
<!--}-->
<!--.cardPrvStyle{-->
<!--    border: 14px solid #f7f7f7;-->
<!--    border-radius: 50px;-->
<!--    box-sizing: border-box;-->
<!--    padding: 10px;-->
<!--    background: #ffff;-->
<!--    width: 100%;-->
<!--}-->
<!--</style>-->
