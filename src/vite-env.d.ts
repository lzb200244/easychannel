/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue';

    const component: DefineComponent<{}, {}, any>;
    export default component;
}

declare module '@/apis/*'
declare module 'vue3-virtual-scroller'
declare module '@/store/account'
declare module 'vue3-emoji-picker'
declare module '@/*'
