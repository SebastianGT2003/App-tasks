import type { NavigationGuard } from 'vue-router'
export type MiddlewareKey = string
declare module "C:/Users/sebas/OneDrive/Documentos/App dsllo/App-tasks/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    middleware?: MiddlewareKey | NavigationGuard | Array<MiddlewareKey | NavigationGuard>
  }
}