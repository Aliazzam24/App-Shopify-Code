<script>
import { usePage } from "@inertiajs/vue3";

export default {
    setup() {
        const page = usePage();
        const currentRoute = page.url; // Get current route URL
        // return the variable so it can be accessed in the template
        return { currentRoute };
    },

    methods: {
        visitList() {
            this.$emit('visitList');
        },
        visitSetting() {
            this.$emit('visitSetting');
        }
    }
}
</script>

<template>


    <div class="Polaris-Box" style="--pc-box-border-color: var(--p-color-border-secondary); --pc-box-border-style: solid; --pc-box-border-block-end-width: var(--p-border-width-025); --pc-box-padding-inline-start-xs: var(--p-space-200); --pc-box-padding-inline-end-xs: var(--p-space-200)">
        <ul role="tablist" class="Polaris-LegacyTabs">
            <!-- Size Charts Tab -->
            <li class="Polaris-LegacyTabs__TabContainer" role="presentation">
                <div
                    @click="visitList"
                    class="link Polaris-LegacyTabs__Tab"
                    :class="{'Polaris-LegacyTabs__Tab--selected': currentRoute === '/app/size_chart/list'}"
                >
                        <span class="Polaris-LegacyTabs__Title">
                            <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">Size Charts</span>
                        </span>
                </div>
            </li>

            <!-- Settings Tab -->
            <li class="Polaris-LegacyTabs__TabContainer" role="presentation">
                <div
                    @click="visitSetting"
                    class="link Polaris-LegacyTabs__Tab"
                    :class="{'Polaris-LegacyTabs__Tab--selected': currentRoute === '/app/size_chart/setting'}"
                >
                        <span class="Polaris-LegacyTabs__Title">
                            <span class="Polaris-Text--root Polaris-Text--bodyMd Polaris-Text--semibold">Settings</span>
                        </span>
                </div>
            </li>
        </ul>
    </div>

</template>
