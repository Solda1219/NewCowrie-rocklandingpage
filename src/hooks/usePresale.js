//import { useEffect, useState } from 'react'
import { useCallback } from 'react'
//import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { getPresaleContract, getPresaleTokenContract } from 'utility/contractHelpers'
//import { BIG_ZERO } from 'utility/bigNumber'
import useWeb3 from './useWeb3'
import useRefresh from './useRefresh'
import useLastUpdated from './useLastUpdated'
import { buyPresaleToken, swapPresaleToken, airdropPresaleToken } from 'utility/callHelpers'

export const useBuyPreSale = (chainId) => {

  const web3 = useWeb3(chainId)
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  const contract = getPresaleContract(chainId, web3)
  
  const handleBuy = useCallback(
    async (ethAmount) => {
      const txHash = await buyPresaleToken(contract, ethAmount, 18, account)
      return txHash
    }, [account, contract])

  return { onBuy: handleBuy }
}

export const useSwapPreSale = (chainId) => {

  const web3 = useWeb3(chainId)
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  const contract = getPresaleContract(chainId, web3)
  
  const handleBuy = useCallback(
    async (tokenAmount) => {
      const txHash = await swapPresaleToken(contract, tokenAmount, 18, account)
      return txHash
    }, [account, contract])

  return { onSwap: handleBuy }
}

export const useAirdropPreSale = (chainId) => {

  const web3 = useWeb3(chainId)
  const { account } = useWeb3React()
  const { fastRefresh } = useRefresh()

  const contract = getPresaleContract(chainId, web3)
  
  const handleBuy = useCallback(
    async (ethAmount) => {
      const txHash = await airdropPresaleToken(contract, ethAmount, 18, account)
      return txHash
    }, [account, contract])

  return { onAirdrop: handleBuy }
}
export default useBuyPreSale
