/// LoggerConfig is the interface to define the configuration for the logger.
export interface LoggerConfig {
  readonly timeFormat: string;
  readonly format: string;
  readonly enableColors: boolean;
  readonly output: Deno.Writer;
  readonly fmt: "json" | "text";
}

/// defaultConfig is the default configuration for the logger.
export const defaultConfig: LoggerConfig = {
  enableColors: true,
  format: "${time} | ${status} |\t ${ip} |\t${method} | ${path}\n",
  timeFormat: "HH:mm:ss",
  output: Deno.stdout,
  fmt: "text",
};
