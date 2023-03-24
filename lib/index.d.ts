#!/usr/bin/env node

// index.d.ts

declare module 'letter-count' {
    export type CountInfoOption = |
        'name' | 'version' | 'description' | 'author' | ' license';
    export type CountOption = |
        '-a' | '--all' |
        '-c'| '--chars'|
        '-ln'| '--lines'|
        '-w'| '--words'|
        '-n'| '--numbers'|
        '-int'| '--integers'|
        '-fl'| '--floats'|
        '-s'| '--spaces'|
        '-l'| '--letters'|
        '-ws'| '--wordsigns'|
        '-hs'| '--hash';
    export type CountResult = Record<string, string & number>;
    export const count: (input: string, option?: CountOption) => CountResult;
    export function countFromFile(path: string, option?: CountOption): CountResult;
    export const info: (key?: CountInfoOption) => CountResult;
}
