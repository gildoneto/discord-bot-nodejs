const axios = require('axios')
const { MessageEmbed } = require('discord.js')
const baseUrl = 'https://swapi.dev/api/'
const page = `?page=`

const  getSwapi = async () => {
    let num = 1
    let next
    const elements = []

    do {let response = await axios.get(`${baseUrl}planets/${page}${num}`)
    console.log(num, response.data.name, response.data.next)
    elements.push(response.data.name)
    next = response.data.next
    num++
    } while (next != null)

    console.log(elements)
}

getSwapi()