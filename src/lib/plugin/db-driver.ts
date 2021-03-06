import { stripIndent } from 'common-tags'
import * as Plugin from '.'
import * as Layout from '../layout'
import { fatal } from '../process'

export async function validateAndLoadDBDriver(): Promise<Plugin.WorkflowHooks> {
  const layout = await Layout.create()
  const plugins = await Plugin.loadAllWorkflowPluginsFromPackageJson(layout)
  const dbDrivers = plugins.filter(p => p.hooks.db !== undefined)

  if (dbDrivers.length === 0) {
    fatal(
      stripIndent`
        You have no database driver installed. Official drivers: "nexus-plugin-prisma".
        Run ${layout.packageManager.renderAddDeps([
          '<db-driver>',
        ])} to install one.
      `
    )
  }

  if (dbDrivers.length > 1) {
    fatal(
      `You have several database drivers installed: ${plugins
        .map(p => `"${p.name}"`)
        .join(', ')}\n You can use only one at a time.`
    )
  }

  return dbDrivers[0].hooks
}
