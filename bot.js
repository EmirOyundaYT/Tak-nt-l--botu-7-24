const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');

var prefix = ayarlar.prefix

client.on('ready', () => {
  console.log(`(BOT) ${client.user.tag} ADI İLE GİRİŞ YAPTI!`);
});

client.on('message', msg => {
  if (msg.content === '-ping') {
    msg.channel.send('Bu Botun Pingi! ' + client.ping + 'ms');
  }
  
  if (msg.content === "-takıntılı") {
    msg.reply('Aga be Çok Takıntılıyım!');
  }
  
  if (msg.content === '-fotom') {
    msg.channel.send(msg.author.avatarURL);
  }
  
  if (msg.content === "-kral") {
    msg.reply('Kral Monster Army');
  }	
  
  if (msg.content === "-yapımcı") {
    msg.reply('Emir: !ΜΔ↬ | ＩＴＡＬＹＡＮ|ＶＥＶＯ');
  }  
 
});

client.login(ayarlar.token);
