const Discord = require('discord.js')
const bot = new Discord.Client()
const movies = require('./movies')


bot.on('message', getMessage)

function getMessage(message){
    if (message.author.bot == false) {
        if (message.content == '!starwars'){
            movies.map((movie) => {
                const msg = new Discord.MessageEmbed()
                msg.setTitle(movie.title)
                msg.setDescription(movie.synopsis)
                msg.setColor("#1474db")
                msg.setImage(movie.img)
        
                message.channel.send(msg)
              })
            }
            else
            message.channel.send('Olá, essa é uma resposta automática! Voce nao digitou nenhum comando. Tente digitar o comando: !starwars')
    }
    //console.log({autor: message.author.username, conteudo:message.content})
}


bot.login('ODYyMTEyODQwMjU2NzE2ODEw.YOTnJg.CaUQywZZbu8NbjXP3lto_81wV-8');