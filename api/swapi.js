const axios = require('axios')
const { MessageEmbed } = require('discord.js')
const baseUrl = 'https://swapi.dev/api/'
const page = `?page=`
let elements = []

const  getSwapi = async () => {
    let num = 1
    let next

    do { let response = await axios.get(`${baseUrl}planets/${page}${num}`)
    const {data} = response
    elements.push(data.results.map(item => item.name ))
    console.log(num, elements)
    next = data.next
    num++
    } while (next != null)

    // console.log(elements)
}

getSwapi()