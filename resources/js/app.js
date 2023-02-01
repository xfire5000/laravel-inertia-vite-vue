import './bootstrap'
import Vue from 'vue'
import {createInertiaApp} from '@inertiajs/inertia-vue'
import {resolvePageComponent} from 'laravel-vite-plugin/inertia-helpers';
import {ZiggyVue} from "../../vendor/tightenco/ziggy/dist/vue.m";
import VueAxios from "vue-axios";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || import.meta.env.APP_NAME.toString();
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.vue`, import.meta.glob('./Pages/**/*.vue')),
    setup({el, App, props, plugin}) {
        Vue.use(plugin)
        Vue.use(ZiggyVue, Ziggy)
        Vue.use(VueAxios, axios)
        new Vue({
            render: h => h(App, props),
        }).$mount(el)
    },
})
