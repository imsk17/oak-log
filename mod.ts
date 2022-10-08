import { defaultConfig, LoggerConfig } from "./config.ts";
import { Middleware } from "oak";

/// Creates a New Logger Middleware with the given config.
export function New(config: Partial<LoggerConfig> | undefined): Middleware {
  const conf: LoggerConfig = { ...defaultConfig, ...config };
  return createMw(conf);
}

function createMw(config: LoggerConfig): Middleware {
  return (ctx, next) => {
  };
}

export function Default(): Middleware {
  return New(undefined);
}
