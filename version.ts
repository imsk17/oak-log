// deno-lint-ignore-file require-await
/** `version` managed by https://deno.land/x/land/publish. */
export const VERSION = "0.1.0";

/** `prepublish` will be invoked before publish, return `false` to prevent the publish. */
//@ts-ignore: unused
export async function prepublish(_version: string) {
  return true;
}

/** `postpublish` will be invoked after published. */
//@ts-ignore: unused
export async function postpublish(version: string) {
  console.log("Upgraded to", version);
}
