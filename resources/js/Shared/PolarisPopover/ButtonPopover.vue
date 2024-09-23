<template>
    <button
        class="Polaris-Button Polaris-Button--pressable Polaris-Button--variantSecondary Polaris-Button--sizeMicro Polaris-Button--textAlignCenter Polaris-Button--iconOnly"
        aria-label="Actions"
        type="button"
        tabindex="0"
        aria-describedby=":r1k:"
        data-polaris-tooltip-activator="true"
        aria-controls=":r1j:"
        :aria-expanded="isPopoverOpen"
        @click="togglePopover"
    >

        <svg
            style="width: 20px; height: 18px;"
              viewBox="0 0 20 20"
              class="Polaris-Icon__Svg"
              focusable="false"
              aria-hidden="true"
        >
            <path d="M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
            <path d="M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
            <path d="M17 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path>
        </svg>

    </button>

<!--    <button class="Polaris-Button Polaris-Button&#45;&#45;pressable Polaris-Button&#45;&#45;variantSecondary Polaris-Button&#45;&#45;sizeMicro Polaris-Button&#45;&#45;textAlignCenter Polaris-Button&#45;&#45;iconOnly" aria-label="Actions" type="button" tabindex="0" aria-describedby=":rl4:" data-polaris-tooltip-activator="true" aria-owns=":rl3:" aria-expanded="false" data-state="closed"-->
<!--            :aria-expanded="isPopoverOpen"-->
<!--            @click="togglePopover">-->
<!--        <span class="Polaris-Button__Icon">-->
<!--            <span class="Polaris-Icon Polaris-Icon&#45;&#45;toneBase">-->
<!--                <svg  viewBox="0 0 20 20" class="Polaris-Icon__Svg" focusable="false" aria-hidden="true"><path d="M6 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path><path d="M11.5 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path><path d="M17 10a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z"></path></svg>-->
<!--            </span>-->
<!--        </span>-->
<!--    </button>-->

</template>

<script>
export default {
    props: ["isPopoverOpen"],
    methods: {
        togglePopover() {
            this.$emit("togglePopover");
        },
    },
};
</script>
