#!/usr/bin/env node

// const path = require('path');
import { red } from 'chalk';
import clear from 'clear';
import { textSync } from 'figlet';
import { Command } from 'commander';

import * as packageJson from './package.json';

clear();
console.log(
    red(
        textSync(`letter-count-cli ${packageJson.version}`, { horizontalLayout: 'full' })
    )
);

const program: Command = new Command();

program
    .name('letter-count-cli')
    .description('CLI to some JavaScript string utilities')
    .version(packageJson.version);

program.command('split')
    .description('Split a string into substrings and display as an array')
    .argument('<string>', 'string to split')
    .option('-s, --separator <char>', 'separator character', ',')
    .action((str: string, options) => {
        console.log(str);
        console.log(options);
        const limit = options.first ? 1 : 0;
        console.log(str.split(options.separator, limit));
    });

program.parse();
