import axios from 'axios'

const baseDomain = 'http://18.139.217.160:1234/'
const baseURL = `${baseDomain}`

export default axios.create({
  baseURL
})
