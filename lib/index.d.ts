// declare module 'letter-count' {
//   export function countFromFile(
//     option: string,
//     path: string
//   ): CountResult;
//
//   export const count: (option: string, path: string) => CountResult;
//   export const info: () => CountResult;
//
//   type CountResult = Record<string, string | number>;
// }
// index.d.ts
declare module 'letter-count' {
  interface CountParamI {
    option?: string;
    value: string;
    path: string;
  }

  export type CountResult = Record<string, string | number>;
  export type CountParam = Omit<CountParamI, 'path'> | string;
  export type CountFromFileParam = Omit<CountParamI, 'value'> | string;

  //export const count: (option: string, value: string) => CountResult;
  export const count: (value: CountParam) => CountResult;
  export function countFromFile(value: CountFromFileParam): CountResult;
  export const info: () => CountResult;
}
