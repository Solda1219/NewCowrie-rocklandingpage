//import Web3 from 'web3'
//import { AbiItem } from 'web3-utils'
import web3NoAccount from 'utility/web3'

// Addresses
import {
  getAddress,
  getJazzTokenAddress,
  getPresaleTokenAddress,
  getPresaleContractAddress,
  getSwapContractAddress,
  getMulticallAddress,
} from 'utility/addressHelpers'

import bep20Abi from 'config/abi/erc20.json'
import presaleAbi from 'config/abi/presale.json'

import { DEFAULT_GAS_PRICE } from 'config'
import { getSettings, getGasPriceInWei } from './settings'

const getContract = (abi, address, web3, account) => {
  const _web3 = web3 ?? web3NoAccount
  const gasPrice = account ? getSettings(account).gasPrice : DEFAULT_GAS_PRICE
  try {
    return new _web3.eth.Contract(abi, address, {
      gasPrice: getGasPriceInWei(gasPrice).toString(),
    })
  } catch {
    return null;
  }

}

export const getBep20Contract = (address, web3) => {
  return getContract(bep20Abi, address, web3)
}

export const getPresaleContract = (chainId, web3) => {
  return getContract(presaleAbi, getPresaleContractAddress(chainId), web3)
}

export const getPresaleTokenContract = (chainId, web3) => {
  return getContract(bep20Abi, getPresaleTokenAddress(chainId), web3)
}

export const getJazzTokenContract = (chainId, web3) => {
  return getContract(bep20Abi, getJazzTokenAddress(chainId), web3)
}
