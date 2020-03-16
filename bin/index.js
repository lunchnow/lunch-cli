#!/usr/bin/env node

const axios = require('axios');
const program = require('commander');
const chalk = require('chalk');

const getPlaces = require("./commands/getPlaces");
const setPlace = require("./commands/setPlace");


program
  .option('-p, --list_places', 'List places from API')
  .option('-g, --go', 'Tell others that you want go out for a lunch')

program
  .command('places')
  .alias('p')
  .description('Get places from LunchnowAPI')
  .action(() => getPlaces());

program
  .command('go')
  .description('Get places from LunchnowAPI')
  .action(() => setPlace());


if (!process.argv.slice(2).length) {
  console.warn(chalk.yellow('Bad command ' + '\n'));

  program.outputHelp(help => chalk.yellow(help));

  process.exit(1);
}

program.parse(process.argv);


// getData();
