const axios = require('axios')
const { MessageEmbed } = require('discord.js')
const baseUrl = 'https://swapi.dev/api/'
const page = `?page=`
let elements = []

const getSwapi = async () => {
    let num = 1
    let next

    do { let response = await axios.get(`${baseUrl}planets/${page}${num}`)
    const {data} = response
    data.results.map(item => elements.push(item.name ))
    //console.log(num, elements)
    next = data.next
    num++
    } while (next != null)

    console.log(elements)
}

const testando = async () => {
    let planets = []
    let num = 1
    let response = await axios.get(`${baseUrl}planets/${page}${num}`)
    const {data} = response
    data.results.map(item => planets.push(item.name) )

    console.log(planets)
    console.log(planets[0])
}

getSwapi()