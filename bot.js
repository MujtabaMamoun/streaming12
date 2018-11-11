const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", message => {
 var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
var prefix = "*";//عدل البرفكس
if (message.content.startsWith(prefix + 'stream')) {
if (message.author.id !== '470423111221772298') return message.reply('** هذا الأمر فقط لصاحب البوت و شكراًً **')
    client.user.setGame(`${argresult}`,"http://twitch.tv/S-F")
 message.channel.sendMessage(`**${argresult}** : تم تغيير الستريمنق الى`)
}

 });
 
client.login(NTAyODk4MTU1ODMxMTY0OTU3.Dsna5A.sHhOAmljfHudIULCl18tlg5wIL4);