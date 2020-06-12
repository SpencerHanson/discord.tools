
const {handlePlaylist} = require('./playlistHandler');
const raiderIO = require('../repositories/raiderIO');
const sample = require('lodash.sample');


async function command(bot, user, userId, channelId, message, evt) {
  if (message.substring(0, 1) === '!') {
    let args = message.substring(1).split(' ');
    const cmd = args[0];
    args = args.splice(1);
    const command = cmd.toLowerCase();

    switch(command) {
      case 'slurp':
        bot.sendMessage({
          to: channelId,
          message: String.fromCharCode(226,160,132,226,160,132,226,160,132,226,162,176,226,163,167,226,163,188,226,163,175,226,160,132,226,163,184,226,163,160,226,163,182,226,163,182,226,163,166,226,163,190,226,160,132,226,160,132,226,160,132,226,160,132,226,161,128,226,160,132,226,162,128,226,163,191,226,163,191,226,160,132,226,160,132,226,160,132,226,162,184,226,161,135,226,160,132,226,160,132,013,010,032,226,160,132,226,160,132,226,160,132,226,163,190,226,163,191,226,160,191,226,160,191,226,160,182,226,160,191,226,162,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,166,226,163,164,226,163,132,226,162,128,226,161,133,226,162,160,226,163,190,226,163,155,226,161,137,226,160,132,226,160,132,226,160,132,226,160,184,226,162,128,226,163,191,226,160,132,013,010,226,160,132,226,160,132,226,162,128,226,161,139,226,163,161,226,163,180,226,163,182,226,163,182,226,161,128,226,160,132,226,160,132,226,160,153,226,162,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,180,226,163,191,226,163,191,226,163,191,226,162,131,226,163,164,226,163,132,226,163,128,226,163,165,226,163,191,226,163,191,226,160,132,013,010,226,160,132,226,160,132,226,162,184,226,163,135,226,160,187,226,163,191,226,163,191,226,163,191,226,163,167,226,163,128,226,162,128,226,163,160,226,161,140,226,162,187,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,160,191,226,160,191,226,160,191,226,163,191,226,163,191,226,163,191,226,160,132,013,010,226,160,132,226,162,128,226,162,184,226,163,191,226,163,183,226,163,164,226,163,164,226,163,164,226,163,172,226,163,153,226,163,155,226,162,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,161,191,226,163,191,226,163,191,226,161,141,226,160,132,226,160,132,226,162,128,226,163,164,226,163,132,226,160,137,226,160,139,226,163,176,013,010,032,226,160,132,226,163,188,226,163,150,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,162,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,162,135,226,163,191,226,163,191,226,161,183,226,160,182,226,160,182,226,162,191,226,163,191,226,163,191,226,160,135,226,162,128,226,163,164,013,010,032,226,160,152,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,189,226,163,191,226,163,191,226,163,191,226,161,135,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,183,226,163,182,226,163,165,226,163,180,226,163,191,226,161,151,013,010,032,226,162,128,226,160,136,226,162,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,161,159,226,160,132,013,010,226,162,184,226,163,191,226,163,166,226,163,140,226,163,155,226,163,187,226,163,191,226,163,191,226,163,167,226,160,153,226,160,155,226,160,155,226,161,173,226,160,133,226,160,146,226,160,166,226,160,173,226,163,173,226,161,187,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,161,191,226,160,131,226,160,132,013,010,226,160,152,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,161,134,226,160,132,226,160,132,226,160,132,226,160,132,226,160,132,226,160,132,226,160,132,226,160,132,226,160,185,226,160,136,226,162,139,226,163,189,226,163,191,226,163,191,226,163,191,226,163,191,226,163,181,226,163,190,226,160,131,226,160,132,013,010,226,160,132,226,160,152,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,160,132,226,163,180,226,163,191,226,163,182,226,163,132,226,160,132,226,163,180,226,163,182,226,160,132,226,162,128,226,163,190,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,160,131,226,160,132,226,160,132,013,010,226,160,132,226,160,132,226,160,136,226,160,187,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,163,191,226,161,132,226,162,187,226,163,191,226,163,191,226,163,191,226,160,132,226,163,191,226,163,191,226,161,128,226,163,190,226,163,191,226,163,191,226,163,191,226,163,191,226,163,155,226,160,155,226,160,129,226,160,132,226,160,132,226,160,132,013,010,226,160,132,226,160,132,226,160,132,226,160,132,226,160,136,226,160,155,226,162,191,226,163,191,226,163,191,226,163,191,226,160,129,226,160,158,226,162,191,226,163,191,226,163,191,226,161,132,226,162,191,226,163,191,226,161,135,226,163,184,226,163,191,226,163,191,226,160,191,226,160,155,226,160,129,226,160,132,226,160,132,226,160,132,226,160,132,226,160,132,013,010,226,160,132,226,160,132,226,160,132,226,160,132,226,160,132,226,160,132,226,160,132,226,160,137,226,160,187,226,163,191,226,163,191,226,163,190,226,163,166,226,161,153,226,160,187,226,163,183,226,163,190,226,163,191,226,160,131,226,160,191,226,160,139,226,160,129,226,160,132,226,160,132,226,160,132,226,160,132,226,160,132,226,162,128,226,163,160,226,163,180)
        });
      break;
      case 'affixes':
        const affixes = await raiderIO.getAffixes();
        bot.sendMessage({
          to: channelId,
          message: affixes
        });
        break;
      case 'schedule':
        bot.sendMessage({
          to: channelId,
          message: "Thursday = Jordan @Goose; \n Friday = Spencer @YaBoiBangz; \n Saturday = Seth @VomitCat; \n Sunday = Mikkel @hamtaro; \n Monday = Froob @McFroob; \n Tuesday = Adam @T0x1x; \n Wednesday = Ross @Minz. "
        });
        break;
      case 'dotd':
        const people = ['Spencer', 'Jordan', 'Seth', 'Brandon', 'Richie', 'Mikkel', 'Adam', 'Ross', 'Sam', 'Timmy']
        const random = sample(people);
        bot.sendMessage({
          to: channelId,
          message: `Dingus of the day: ${random}`
        });
        break;
      case 'playlist':
        await handlePlaylist(bot, channelId, command, args);
        break;
      case 'help':
        bot.sendMessage({
          to: channelId,
          message: 'List of commands: slurp, affixes, schedule, dotd, playlist'
        });
        break;
      default:
        bot.sendMessage({
          to: channelId,
          message: 'Invalid command. Type !help for a list of commands'
        });
    }
  } else if (message.toLowerCase().match(/dad/)) {
    bot.sendMessage({
      to: channelId,
      message: '*smirks*'
    });
  }
}

module.exports = {
  command
}
