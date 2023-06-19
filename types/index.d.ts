declare module "lodash" {
  export function multiply(a: number, b: number): number;

  export function reverse<T>(arr: Array<T>): Array<T>;

  export function dropRight<T>(arr: Array<T>, num: number): Array<T>;
}
