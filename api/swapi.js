const axios = require('axios')
const { MessageEmbed } = require('discord.js')
const baseUrl = 'https://swapi.dev/api/'
const page = '/?page='

const getAllPages = async (channel, endpoint, title, thumb) => {
    let pageNumber = 1
    let next
    const elements = []

    do { let response = await axios.get(getUrl(endpoint, pageNumber))
        const {data} = response
        data.results.map(item => elements.push(item.name ))
        next = data.next
        pageNumber++
    } while (next != null)

    channel.send(new MessageEmbed()
    .setThumbnail(thumb)
    .setTitle(`Lista de ${title}`)
    .setDescription(elements.map(element => `▫ ${element}`))
    .setFooter(`TOTAL: ${elements.length}`)
    )
}



const getPage = async (channel, endpoint, title, thumb, pageNumber) => {
    const elements = []

    const response = await axios.get(getUrl(endpoint, pageNumber))
    const {data} = response
    data.results.map(item => elements.push(item.name))
    // console.table(elements)
    sendMessage(channel, thumb, title, elements)
}

const getUrl = (endpoint, pageNumber) => { 
    return `${baseUrl}${endpoint}${page}${pageNumber}`
    
}

const sendMessage = (channel, thumb, title, elements) => {
    channel.send(new MessageEmbed()
    .setThumbnail(thumb)
    .setTitle(`Lista de ${title}`)
    .setDescription(elements.map(element => `▫ ${element}`))
    .setFooter(`TOTAL: ${elements.length}`)
    )
}

module.exports = {getAllPages, getPage}

