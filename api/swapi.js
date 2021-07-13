const axios = require('axios')
const { MessageEmbed } = require('discord.js')
const baseUrl = 'https://swapi.dev/api/'
const page = '/?page='

const getAllPages = async (channel, endpoint, title, thumb) => {
    let pageNumber = 1
    let next
    let elements = []    
    do {
        const data = await doRequest(endpoint,pageNumber)
        elements = elements.concat(data.results)
        next = data.next
        pageNumber++
    } while (next != null)

    sendMessage(channel,thumb,title,elements)    
}

const getPage = async (channel, endpoint, title, thumb, pageNumber) => { 
    const data = await doRequest(endpoint,pageNumber)
    sendMessage(channel, thumb, title, data.results)
}

const doRequest = async(endpoint,pageNumber) => {
    const response = await axios.get(getUrl(endpoint, pageNumber))
    const { data } = response
    return data
}

const getUrl = (endpoint, pageNumber) => {
    return `${baseUrl}${endpoint}${page}${pageNumber}`
}

const sendMessage = (channel, thumb, title, elements) => {
    channel.send(new MessageEmbed()
        .setThumbnail(thumb)
        .setTitle(`Lista de ${title}`)
        .setDescription(elements.map(element => `▫ ${element.name}`))
        .setFooter(`TOTAL: ${elements.length}`)
    )
}

module.exports = { getAllPages, getPage }

