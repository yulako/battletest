#!/usr/bin/env node
// console.log('hello world');
// process.exit();

//  process.argv holds the arguments from when we run battletest from the command line
//  e.g. running $battletest init would result in process.argv having ['/node','/battletest', 'init']
const args = process.argv.slice(2);
//  the above line slices the first 2 extra arguments, results in an array of cmds ['init']

// ADD LOGIC TO HANDLE FLAGS (--save, etc.)

const cmd = args[0] || 'help';
// cmd equals first argument in array, othewise will equal 'help'

switch (cmd) {
  case 'help':
    require('./cmds/help')();
    break;
  case 'version':
    require('./cmds/version')();
    break;
  case 'init':
    require('./cmds/init')();
    break;
  case 'generate':
    require('./cmds/generate')();
    break;
  default:
    console.error(`"${cmd}" is not a valid command`);
    break;
}
