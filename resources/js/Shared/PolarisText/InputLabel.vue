<script setup>
defineProps({
    value: {
        type: String,
    },
});
</script>

<template>



    <div class="Polaris-Labelled__LabelWrapper">
        <div class="Polaris-Label">
            <label class="Polaris-Label__Text">
                <span v-if="value" v-html="value"></span>
                <span v-else><slot /></span>
            </label>
        </div>
    </div>

</template>

