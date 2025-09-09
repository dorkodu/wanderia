import Elysia from 'elysia';
import { readdirSync, statSync } from 'fs';
import { resolve } from 'path';

export async function loadNamespaceEndpoints(app: Elysia) {
  const namespacesPath = resolve(__dirname, '../namespaces');

  const namespaces = readdirSync(namespacesPath).filter((name) =>
    statSync(resolve(namespacesPath, name)).isDirectory()
  );

  console.log("🔍 Found namespaces:", namespaces);

  for (const namespace of namespaces) {
    const modulePath = resolve(namespacesPath, namespace, 'endpoints.ts');
    const exportName = `${namespace}Endpoints`;

    console.log(`📦 Attempting to import: ${modulePath}`);
    try {
      const module = await import(modulePath);

      if (module && module[exportName] instanceof Elysia) {
        app.use(module[exportName]);
        console.log(`✅ Mounted ${exportName} from ${namespace}/endpoints.ts`);
      } else {
        console.warn(`⚠️  Export "${exportName}" not found or not an Elysia instance in ${namespace}/endpoints.ts`);
      }
    } catch (err) {
      console.warn(`❌ Failed to load ${modulePath}`);
      console.error(err);
    }
  }
}
