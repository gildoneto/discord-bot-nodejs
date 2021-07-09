const axios = require('axios')
const { MessageEmbed } = require('discord.js')
const baseUrl = 'https://swapi.dev/api/'
const page = '/?page='

const getSwapi = async (param) => {
    let num = 1
    let next
    const elements = []

    do { let response = await axios.get(getUrl(param, num))
    const {data} = response
    data.results.map(item => elements.push(item.name ))
    //console.log(num, elements)
    next = data.next
    num++
    } while (next != null)

    console.log(elements)
}

const getUrl = (endpoint, num) => { 
    return `${baseUrl}${endpoint}${page}${num}`
}

//getSwapi('people')
//getSwapi('planets')
//getSwapi('starships')
// getSwapi('species')
getSwapi('vehicles')