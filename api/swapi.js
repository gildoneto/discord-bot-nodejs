const axios = require('axios')
const { MessageEmbed } = require('discord.js')
const baseUrl = 'https://swapi.dev/api/'
const page = '/?page='

const getAllPages = async (channel, param, title, thumb) => {
    let pageNumber = 1
    let next
    let count
    const elements = []

    do { let response = await axios.get(getUrl(param, pageNumber))
        const {data} = response
        data.results.map(item => elements.push(item.name ))
        next = data.next
        pageNumber++
    } while (next != null)

    // console.table(elements)
    channel.send(new MessageEmbed()
    .setThumbnail(thumb)
    .setTitle(`Lista de ${title}`)
    .setDescription(elements)
    .setFooter(`TOTAL: ${elements.length}`)
    )
}

const getPage = async (param, pageNumber) => {
    const elements = []

    const response = await axios.get(getUrl(param, pageNumber))
    const {data} = response
    data.results.map(item => elements.push(item.name))
    console.table(elements)

    // channel.send(new MessageEmbed()
    // .setDescription(elements.map(element => `${element.name}`))
    // )
}

const getUrl = (endpoint, pageNumber) => { 
    return `${baseUrl}${endpoint}${page}${pageNumber}`
    
}

//getAllPages('people')
// getAllPages('planets')
// getAllPages('starships')
// getAllPages('species')
// getAllPages('vehicles')
// getPage('people', 3)

const getPeople = async (channel, pageNumber) => await getPage(channel, 'people', pageNumber)
const getPlanets = async (channel, pageNumber) => await getPage(channel, 'planets', pageNumber)
const getSpecies = async (channel, pageNumber) => await getPage(channel, 'species', pageNumber)
const getVehicle = async (channel, pageNumber) => await getPage(channel, 'vehicles', pageNumber)
const getStarship = async (channel, pageNumber) => await getPage(channel, 'starships', pageNumber)

module.exports = {getAllPages, getPage}