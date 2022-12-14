# Oak Log

## Logging middleware for [Oak framework](https://deno.land/x/oak)

### Setup

To configure the logger, first add the import for Oak-Log middleware:

```typescript
import { Default as logger } from "https://deno.land/x/oak_log@v0.3.1/mod.ts";
```

now, add the logger to your application:

```typescript
app.use(logger())
```

and Tada! You have logging working now.

### Configuration

- `timeFormat`: [`string`] - Time format for logs
- `format`: [`string`] - Format for logs (Works only when `fmt: text`)
- `enableColors`: [`boolean`] - Enable pretty colors for logs
- `output`: [`Deno.Writer`] - An output sink for the logs
- `fmt`: [`json` | `text`] - Format of the log

Default configuration looks something like:

```typescript
export const defaultConfig: LoggerConfig = {
  enableColors: true,
  format: "${time} | ${status} |\t ${ip} |\t${method} | ${path}\n",
  timeFormat: "HH:mm:ss",
  output: Deno.stdout,
  fmt: "text",
};
```

### License

[MIT License](LICENSE)
