import addresses from 'config/constants/contracts'
import tokens from 'config/constants/tokens'

export const getAddress = (address,chainId) => {
  return address[chainId]
}

export const getRockAddress = (chainId) => {
  return getAddress(tokens.rock.address, chainId)
}

export const getPresaleTokenAddress = (chainId) => {
  return getAddress(tokens.presale.address, chainId)
}

export const getJazzTokenAddress = (chainId) => {
  return getAddress(tokens.jazz.address, chainId)
}
export const getPresaleContractAddress = (chainId) => {
  return getAddress(addresses.presale, chainId)
}

export const getSwapContractAddress = (chainId) => {
  return getAddress(addresses.swap_real, chainId)
}

export const getMulticallAddress = (chainId) => {
  return getAddress(addresses.multiCall ,chainId)
}

