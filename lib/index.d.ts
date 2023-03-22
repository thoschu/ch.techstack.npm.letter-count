#!/usr/bin/env node

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
    export enum CountOption {
        '-a',
        '--all',
        '-c',
        '--chars',
        '-ln',
        '--lines',
        '-w',
        '--words',
        '-n',
        '--numbers',
        '-l',
        '--letters',
        '-ws',
        '--wordsigns',
        '-hs',
        '--hash'
    }
    export type CountResult = Record<string, string | number>;
    export const count: (option?: CountOption, value?: string) => CountResult;
    export function countFromFile(options?: CountOption, filePath?: string): CountResult;
    export const info: () => CountResult;
}
