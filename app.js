
const Discord = require('discord.js')
const bot = new Discord.Client()
const movies = require('./movies')


bot.on('message', getMessage)

function getMessage(message){

    const msgAnswer = new Discord.MessageEmbed()
    msgAnswer.setDescription(` `)

    if (message.author.bot == false) {
        if (message.content == '!GG'){
            message.channel.send("Good game, Champ!!")
        } else if (message.content == '!suave') {
            message.channel.send("Suave na nave, meu brother!")
        } else
            message.channel.send('Ola, essa eh uma resposta automatica!')
    }
    //console.log({autor: message.author.username, conteudo:message.content})
}


bot.login('ODYyMTEyODQwMjU2NzE2ODEw.YOTnJg.CaUQywZZbu8NbjXP3lto_81wV-8');