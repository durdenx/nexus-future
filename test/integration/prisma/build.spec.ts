import { DEFAULT_BUILD_FOLDER_NAME } from '../../../src/lib/layout'
import { CONVENTIONAL_SCHEMA_FILE_NAME } from '../../../src/lib/layout/schema-modules'
import { createWorkspace } from '../../__helpers'

const ws = createWorkspace({
  name: 'prisma-build',
})

it('can build a prisma framework project', () => {
  ws.fs.write(
    'schema.prisma',
    `	
      datasource db {	
        provider = "sqlite"	
        url      = "file:dev.db"	
      }	
      generator prisma_client {	
        provider = "prisma-client-js"	
      }	
      model User {	
        id   Int    @id	
        name String	
      }	
    `
  )

  ws.fs.write(
    CONVENTIONAL_SCHEMA_FILE_NAME,
    `
      import app from 'nexus-future'

      app.schema.objectType({
        name: 'User',
        definition(t) {
          t.model.id()
          t.model.name()
        }
      })
    `
  )

  const result = ws.run('yarn -s nexus build')
  expect(result).toMatchSnapshot()
  expect(ws.fs.inspectTree(DEFAULT_BUILD_FOLDER_NAME)).toMatchSnapshot()
})
