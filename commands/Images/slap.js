module.exports.run = async (bot, message,args)  =>{
  var {get} = require ("snekfetch")
  var Discord = require('discord.js')
    if(message.author.bot) return;
    let member = message.mentions.users.first(); 
            if(!member) {
              get('https://nekos.life/api/v2/img/slap').then(r => { 
                const embed = new Discord.RichEmbed()
                .setDescription(`<:slap:473882521008865280> **${message.author.username}**  donne une claque à Beebop`)
                .setImage(r.body.url)
                .setColor('BLACK')
                .setFooter(`© Éffectué par ${message.author.username}`)  
               message.channel.send({embed})          
              })
            } 
          
            if(member) {
              get('https://nekos.life/api/v2/img/slap').then(r => { 
                    const embed = new Discord.RichEmbed()
                    .setDescription(`<:slap:473882521008865280> **${message.author.username}**  donne une claque à ${member} `)
                    .setImage(r.body.url)
                    .setColor('BLACK')
                    .setFooter(`© Éffectué par ${message.author.username}`)  
                   message.channel.send({embed})
            
              })
            }  
        }
    module.exports.help = {
        name : 'slap'
    }