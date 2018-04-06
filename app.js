const Discord = require("discord.js");
const TOKEN = "token here";
var bot = new Discord.Client();
bot.login(TOKEN);

bot.on("ready", function() {
    console.log("ready");
    bot.user.setGame("@someone");
});

var ascii = [
    "(∩ ͡° ͜ʖ ͡°)⊃━✿✿✿✿✿✿ ",
    "ヽ༼ ಠ益ಠ ༽ﾉ ",
    "¯\\\_( ツ )\_/¯ ",
    "(⁄ ⁄•⁄ω⁄•⁄ ⁄) ",
    "（✿ ͡◕ ᴗ◕)つ━━✫・o。 ",
    "(╯°□°）╯︵ ┻━┻ ",
    "¯(°_o)/¯ ",
    "(◕‿◕✿) ",
    "(╯°□°）╯︵ ┻━┻ ",
    "ಠ_ಠ "
];

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;
    if(message.content.includes("@someone")) {
        var users = message.guild.fetchMembers();
        var content = message.content.replace("@someone", "@someone " + ascii[Math.floor(Math.random() * ascii.length)] + "***(" + message.guild.members.random().user.username + ")***");
        message.channel.send(content);
    }
});
