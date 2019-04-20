// src/vue-shims.d.ts

declare module '*.json' {
    const value: { [key: string]: any }
    export default value
}