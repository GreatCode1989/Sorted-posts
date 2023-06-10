import { createApp } from 'vue'

import App from './App'

import Components from '@/Components/UI'

import router from './router';

import directives from '@/directives';

const app = createApp(App)

Components.forEach(component => {
    app.component(component.name, component)
})

directives.forEach(directive => {

    app.directive(directive.name, directive)
})

app.use(router).mount('#app')


