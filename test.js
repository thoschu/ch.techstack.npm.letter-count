const {program} = require('commander');
const pjson = require('./package.json');

program
    .version(pjson.version)
    .option('-l, --level <n>', 'set level (1-3)', parseInt, 1)
    .option('-c, --config <path>', 'set config path', './deploy.conf');

program
    .command('setup [env]')
    .description('run setup commands for all envs')
    .option('-s, --setup_mode <mode>', 'Which setup mode to use', 'normal')
    .action((env, options) => {
        env = env || 'all';
        console.log('read config from %s', program.opts().config);
        console.log('setup for %s env(s) with %s mode', env, options.setup_mode);
    })
    .addHelpText('after', `
        Examples:
        $ node test.js -l 77 setup -s low test
        $ node test.js -c ../config.conf setup staging
        $ node test.js setup live
  `);

program
    .command('exec <script>')
    .alias('ex')
    .description('execute the given remote cmd')
    .option('-e, --exec_mode <mode>', 'Which exec mode to use', 'fast')
    .action((script, options) => {
        console.log('read config from %s', program.opts().config);
        console.log('exec "%s" using %s mode and config %s', script, options.exec_mode, program.opts().config);
    }).addHelpText('after', `
        Examples:
          $ deploy exec sequential
          $ deploy exec async
    `);

program
    .command('teardown <dir> [otherDirs...]')
    .description('run teardown commands')
    .action((dir, otherDirs) => {
        console.log('dir "%s"', dir);
        if (otherDirs) {
            otherDirs.forEach(oDir => {
                console.log('dir "%s"', oDir);
            });
        }
    });

program
    .command('*')
    .description('deploy the given env')
    .action((env) => {
        console.log('deploying "%s"', env);
    });

program.parse(process.argv);
