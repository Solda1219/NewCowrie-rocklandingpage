import BigNumber from 'bignumber.js'
import { DEFAULT_GAS_LIMIT, DEFAULT_TOKEN_DECIMAL } from 'config'
import { ethers } from 'ethers'
// import { getLpContract, getMasterchefContract } from 'utility/contractHelpers'
// import { getAddress, getCakeAddress } from 'utils/addressHelpers'
// import tokens from 'config/constants/tokens'
// import pools from 'config/constants/pools'
// //import sousChefABI from 'config/abi/sousChef.json'
// import multicall from './multicall'
// import { getWeb3NoAccount } from './web3'
// import { getBalanceAmount } from './formatBalance'
// import { BIG_TEN, BIG_ZERO } from './bigNumber'

export const approve = async (lpContract, masterChefContract, account) => {
  return lpContract.methods
    .approve(masterChefContract.options.address, ethers.constants.MaxUint256)
    .send({ from: account })
}

export const buyPresaleToken = async (presaleContract, amount, decimals = 18, account) => {
  return presaleContract.methods
    .buyTokens()
    .send({ value:amount, from:account , gas: DEFAULT_GAS_LIMIT*5 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const swapPresaleToken = async (presaleContract, amount, decimals = 18, account) => {
  return presaleContract.methods
    .airdropForJazzHolders(amount)
    .send({from:account , gas: DEFAULT_GAS_LIMIT*5 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

export const airdropPresaleToken = async (presaleContract, amount, decimals = 18, account) => {
  return presaleContract.methods
    .buyTokensToJazzHolders()
    .send({ value:amount, from:account , gas: DEFAULT_GAS_LIMIT*5 })
    .on('transactionHash', (tx) => {
      return tx.transactionHash
    })
}

