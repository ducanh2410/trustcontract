import axios from 'axios'

const baseDomain = 'http://13.250.42.213:1234/'
const baseURL = `${baseDomain}`

export default axios.create({
  baseURL
})
