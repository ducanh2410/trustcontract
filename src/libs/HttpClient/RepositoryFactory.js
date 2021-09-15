import ContractDetailsRepository from './ContractDetailsRepository'

const repositories = {
  contracts: ContractDetailsRepository
}

export const RepositoryFactory = {
  get: name => repositories[name]
}
