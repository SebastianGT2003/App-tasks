import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "blank" | "default"
declare module "C:/Users/sebas/OneDrive/Documentos/App dsllo/App-tasks/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}