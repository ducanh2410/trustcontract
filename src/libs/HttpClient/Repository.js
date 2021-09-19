import axios from 'axios'

const baseDomain = 'http://18.139.217.160:1234/'
const baseURL = `${baseDomain}`

export default axios.create({
  baseURL,
  headers: { Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNDBhNzMwNGFlYmVjM2M0YzZmNTkwYSIsImlhdCI6MTYzMTgxMzM5Mn0.Q4aj7tFF2zXa2TCMEkaeHZjEPKjCYuVqrzqKEtSiOPM' }
})
