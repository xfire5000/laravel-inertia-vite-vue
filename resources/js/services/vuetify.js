import Vuetify from 'vuetify'
import vue from 'vue'
import colors from 'vuetify/lib/util/colors'
import 'vuetify/dist/vuetify.min.css'
// import VueI18n from "vue-i18n";

vue.use(Vuetify)
// vue.use(VueI18n)

// const messages = {
//     en: {
//         $vuetify: {
//             dataIterator: {
//                 rowsPerPageText: 'Items per page:',
//                 pageText: '{0}-{1} of {2}',
//             },
//         },
//     },
//     fa: {
//         $vuetify: {
//             dataIterator: {
//                 rowsPerPageText: 'آیتم در هر صفحه:',
//                 pageText: '{0}-{1} از {2}',
//             },
//         },
//     },
// }

// const i18n = new VueI18n({
//     locale: 'fa', // set locale
//     messages, // set locale messages
// })

export default new Vuetify({
    // lang: {t: (key, ...params) => i18n.t(key, params),},
    rtl: true,
    theme: {
        themes: {
            light: {
                primary: '#8700D5',
                secondary: colors.grey.darken1,
                accent: colors.shades.black,
                error: colors.red.accent3,
                background: colors.indigo.lighten5,
            },
            dark: {
                primary: colors.blue.lighten3,
                background: colors.indigo.base,
            },
        }
    },
    options: {
        customProperties: true
    }
})
