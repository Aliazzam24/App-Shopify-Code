<script setup>
const model = defineModel({
    type: String,
    required: true,
});
</script>

<template>

    <div class="Polaris-TextField">
        <input  v-model="model" class="Polaris-TextField__Input" type="text"/>
        <div class="Polaris-TextField__Backdrop">
        </div>
    </div>
</template>



