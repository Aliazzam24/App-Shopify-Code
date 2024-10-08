import './bootstrap';
import '../css/app.css';

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/vue3'

import { createPinia } from 'pinia'

import PolarisVue from '@ownego/polaris-vue'
import '@ownego/polaris-vue/dist/style.css'
import '@shopify/polaris/build/esm/styles.css';

// Import the DefaultLayout to use it globally
import DefaultLayout from './Layouts/DefaultLayout.vue';


import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(fas);


createInertiaApp({
    progress: {
        color: '#262626',
    },
    resolve: name => {
        const pages = import.meta.glob('./Pages/**/*.vue', { eager: true });
        const page = pages[`./Pages/${name}.vue`];

        // Assign the default layout to the page if it does not already have one
        page.default.layout = page.default.layout || DefaultLayout;
        return page;
    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .use(PolarisVue)
            .component("font-awesome-icon", FontAwesomeIcon)
            .use(createPinia())
            .mount(el)
    },
})
