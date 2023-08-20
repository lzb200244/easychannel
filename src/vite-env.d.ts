/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue';

    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module 'vue3-emoji-picker'
declare module 'vue3-virtual-scroller'
declare module '@kangc/*'
declare module 'prismjs'
