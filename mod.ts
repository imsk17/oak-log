import { bold, cyan, green, red, yellow } from "colors";
import { format } from "datetime";
import { Context, Middleware } from "oak";

import { defaultConfig, LoggerConfig } from "./config.ts";
import { Data } from "./data.ts";

/// Creates a New Logger Middleware with the given config.
export function New(config: Partial<LoggerConfig> | undefined): Middleware {
  const conf: LoggerConfig = { ...defaultConfig, ...config };
  return createMw(conf);
}

function createMw(config: LoggerConfig): Middleware {
  const te = new TextEncoder();
  const writeToWriter = (writer: Deno.Writer, buf: Uint8Array) => {
    writer.write(buf);
  };

  return async (ctx, next) => {
    await next();
    const data = extractData(ctx, config);
    const buffer = formatToBuffer(data, config, te);
    writeToWriter(config.output, buffer);
  };
}

function extractData(
  { request, response }: Context,
  { timeFormat }: LoggerConfig,
): Data {
  return {
    host: request.url.host,
    ip: request.ip,
    method: request.method,
    path: request.url.pathname,
    status: response.status,
    timestamp: format(new Date(), timeFormat),
  };
}

function formatToBuffer(
  data: Data,
  config: LoggerConfig,
  te: TextEncoder,
): Uint8Array {
  if (config.fmt === "json") {
    return te.encode(JSON.stringify(data));
  } else {
    return te.encode(formatToText(data, config));
  }
}

function formatToText(
  data: Data,
  { enableColors, format }: LoggerConfig,
): string {
  if (enableColors) {
    const method = bold(cyan(data.method));
    const path = red(data.path);
    const time = data.timestamp;
    const status = colorStatus(data.status);
    const ip = bold(data.ip);
    const host = bold(data.host);
    return format
      .replace("${method}", method)
      .replace("${path}", path)
      .replace(
        "${time}",
        time,
      ).replace("${status}", status)
      .replace("${ip}", ip)
      .replace("${host}", host);
  } else {
    return format
      .replace("${method}", data.method)
      .replace("${path}", data.path)
      .replace(
        "${time}",
        data.timestamp,
      ).replace("${status}", data.status.toString())
      .replace("${ip}", data.ip)
      .replace("${host}", data.host);
  }
}

function colorStatus(status: number): string {
  if (status >= 500) {
    return red(status.toString());
  } else if (status >= 400) {
    return yellow(status.toString());
  } else if (status >= 300) {
    return green(status.toString());
  } else {
    return green(status.toString());
  }
}

export function Default(): Middleware {
  return New(undefined);
}
