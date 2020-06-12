'use strict';

const Discord = require('discord.io');
const {CronJob} = require('cron')
const {determinePerson} = require('./utils');
const { command } = require('./handlers/commandHandler');
require('dotenv').config();

async function start() {

  // const job = new CronJob('* * * * *', determinePerson());
  // job.start();
  // var job = new CronJob('* * * * *', function() {
  //   determinePerson();
  // }, null, true, 'America/Los_Angeles');
  // job.start();

  const bot = new Discord.Client({
    token: process.env.DISCORD_KEY,
    autorun: true
  });

  bot.on('ready', () => {
    console.log('Connected and ready');
    console.log(`Logged in as ${bot.username} - ${bot.id}`);
  });

  bot.on('message', async (user, userId, channelId, message, evt) => {
    await command(bot, user, userId, channelId, message, evt);
  });

};

start();
