The main module exports an application singleton. It is available as the default export. For convenience you can import the app components as named exports too.

**Example of importing default export**

```ts
import app from 'nexus-future'

app.log.info('hello world')

app.settings.change({
  server: {
    port: 5689,
  },
})

app.schema.queryType({
  definition(t) {
    t.field('foo', { type: 'String' })
  },
})

app.server.start()
```

**Example of imporrting named exports**

```ts
import { schema, server, settings, log } from 'nexus-future'

log.info('hello world')

settings.change({
  server: {
    port: 5689,
  },
})

schema.queryType({
  definition(t) {
    t.field('foo', { type: 'String' })
  },
})

server.start()
```
