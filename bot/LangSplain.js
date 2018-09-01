const Discord = require('discord.js');
const request = require('request');
const client = new Discord.Client();

function createEmbed(msg, language) {
  request('https://james-still.com/api.php?name=' + language, function(error, response, body) {
    if (!error && response.statusCode == 200 && body != "NO VALID LANGAUGE PROVIDED") {
      var jsonInfo = JSON.parse(body);
      msg.channel.send({
        embed: {
          color: 0xff000e,
          title: language,
          description: jsonInfo.Description
        }
      });
    }
  });
}

function helpMessage(msg) {
  msg.channel.send({
    embed: {
      color: 0xff000e,
      title: "Invalid Command",
      description: "<>HTML | <>PHP | <>CSS | <>SQL | <>JavaScript | <>JSON | <>Python"
    }
  });
}

client.on('ready', () => {
  console.log('LangSplain Online');
});

client.on('message', msg => {
  if (msg.author.bot) return;
  if (msg.content.startsWith("<>")) {
    switch (msg.content) {
      case "<>HTML":
        createEmbed(msg, "HTML");
        break;
      case "<>PHP":
        createEmbed(msg, "PHP");
        break;
      case "<>CSS":
        createEmbed(msg, "CSS");
        break;
      case "<>SQL":
        createEmbed(msg, "SQL");
        break;
      case "<>JavaScript":
        createEmbed(msg, "JavaScript");
        break;
      case "<>JSON":
        createEmbed(msg, "JSON");
        break;
      case "<>Python":
        createEmbed(msg, "Python");
        break;
      default:
        helpMessage(msg);
        break;
    }
  }
});

client.login('token');
