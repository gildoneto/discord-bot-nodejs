const Discord = require('discord.js')
const bot = new Discord.Client()
const movies = require('./movies')

bot.on('message', getMessage)

/**
* Gerencia a mensagem recebida pelo BOT
* @param {Discord.Message} message - mensagem recebida pelo BOT
*/
function getMessage(message){
    if (message.author.bot == false) {
        if (message.content == '!starwars'){
            movies.map((movie) => {
                const msg = new Discord.MessageEmbed()
                msg.setTitle(movie.title)
                msg.setDescription(movie.synopsis)
                msg.setColor("#1474db")
                msg.setImage(movie.img)
                msg.setFooter(`lançado em ${movie.year}`, 'https://i.pinimg.com/originals/0c/cd/6a/0ccd6a5e74067bab2d43b4c3e7501fd1.jpg')
                //msg.setFooter(`Rating no Rotten Tomatoes: ${movie.year}`, 'https://image.freepik.com/free-photo/one-ripe-tomato-white-background-tomat-white_73289-74.jpg')
        
                message.channel.send(msg)
              })
            }
            else
            message.channel.send(`Olá ${message.author}, essa é uma resposta automática! Voce nao digitou nenhum comando. Tente digitar o comando: !starwars`)
    }
    //console.log({autor: message.author.username, conteudo:message.content})
}


bot.login('ODYyMTEyODQwMjU2NzE2ODEw.YOTnJg.CaUQywZZbu8NbjXP3lto_81wV-8');