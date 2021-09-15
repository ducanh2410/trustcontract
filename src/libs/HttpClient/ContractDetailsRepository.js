import Repository from './Repository'

const resource = '/contract-details'
export default {
  getList () {
    return Repository.get(`${resource}`)
  },
  getOne (id) {
    return Repository.get(`${resource}/${id}`)
  },
  create (payload) {
    return Repository.post(`${resource}`, payload)
  }
}
