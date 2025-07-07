import Elysia from 'elysia';
import { readdirSync } from 'fs';
import { resolve } from 'path';

export async function loadNamespaceEndpoints(app: Elysia) {
  const namespacesPath = resolve(__dirname, '../namespaces');

  for (const namespace of readdirSync(namespacesPath)) {
    const modulePath = `${namespacesPath}/${namespace}/endpoints.ts`;

    try {
      const module = await import(modulePath);

      if (module && module[`${namespace}Endpoints`] instanceof Elysia) {
        app.use(module[`${namespace}Endpoints`]);
        console.log(`Elysia endpoint imported from ${namespace}/endpoints.ts`)
      } else {
        console.warn(`[!] No valid Elysia endpoint exported in ${namespace}/endpoints.ts`);
      }
    } catch (err) {
      console.warn(`[!] Failed to load ${namespace}/endpoints.ts`);
    }
  }
}
