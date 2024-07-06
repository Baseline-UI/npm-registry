#!/usr/bin/env node

const { program } = require('commander');
const init = require('../src/commands/init.js');
const add = require('../src/commands/add.js');

program.version('1.0.0').description('BaselineUI CLI tool');

program
	.command('init')
	.description('Initialize BaselineUI configuration')
	.action(init);

program
	.command('add <component>')
	.description('Add a new component')
	.action(add);

program.parse(process.argv);
