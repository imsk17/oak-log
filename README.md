# Oak Log
##### A Logging Middleware For [Oak Framework](https://deno.land/x/oak) .

### Setup
To Configure Logger, First Add The Import for Oak-Log Middleware

```typescript
import * as oakLog from "https://deno.land/x/oak_log@v0.1.0/mod.ts";
```

Now Add The Logger to Your Application

```typescript
app.Use(oakLog.Default())
```

... and Tada!!! You have logging working now.

### Configuration 
- _timeFormat_: [string] - Time Format For Logs
- _format_: [string] - Format For Logs (Works only when fmt = "text")
- _enableColors_: [boolean] - Enable Pretty Colors for Logs
- _output_: [Deno.Writer] - An Output Sink For The Logs
- _fmt_: ["json" | "text"] - Format of the log - JSON or TEXT;

Default Configuration Looks Something Like - 
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
```
MIT License

Copyright (c) 2022 Sumit Kumar

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

```
