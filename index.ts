#!/usr/bin/env node

// const path = require('path');
import { red } from 'chalk';
import clear from 'clear';
import { textSync } from 'figlet';
import { Command } from 'commander';
import { count, countFromFile, CountResult, info } from 'letter-count';

console.log(count('The quick brown fox jumps over the lazy -5.5 dog -4567 ', '-s'));
// console.log(countFromFile('package.json', '-c'));

// const infos: CountResult = info();

// clear();
// console.log(red(textSync(`letter-count-cli ${infos.version}`, { horizontalLayout: 'full' })));
//
// const program: Command = new Command();
//
// program
//     .name(infos.name)
//     .description(infos.description)
//     .version(infos.version)
//     .description("An example CLI for ordering pizza's")
//     .option('-v, --version', 'Add peppers')
//     .option('-c, --char <type>', 'Add the specified type of foo [marble]')
//     .option('-C, --no-char', 'You do not want any bar')
//     .parse(process.argv);
