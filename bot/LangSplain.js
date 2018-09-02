const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();

function createEmbed(msg, language) {
  request('https://james-still.com/api.php?name=' + language, function(error, response, body) {
    if (!error && response.statusCode == 200 && body != "") {
      var jsonInfo = JSON.parse(body);
      msg.channel.send({
        embed: {
          color: 0xff000e,
          title: language,
          description: jsonInfo.Description,
          "thumbnail": {
            "url": jsonInfo.Logo
          }
        }
      });
    } else {
      helpMessage(msg);
    }
  });
}

function helpMessage(msg) {
  request('https://james-still.com/api.php?commands=1', function(error, response, body) {
    if (!error && response.statusCode == 200 && body != "") {
      msg.channel.send({
        "embed": {
          "title": "ABOUT LANGSPLAIN",
          "description": "LangSplain is a bot that provides you valuable information about languages, type in a command below using the prefix `<>` to learn about a specific language.",
          "color": 0xff000e,
          "fields": [{
            "name": "SUPPORTED LANGUAGES",
            "value": "`\n" + body + "\n`"
          }]
        }
      });
    }
  });
}

client.on('ready', () => {
  console.log('LangSplain Online');
});

client.on('message', msg => {
  if (msg.content.startsWith("<>")) {
    if (msg.author.bot) return;
    createEmbed(msg, msg.content.replace("<>", ""));
  }
});

client.login('token');
