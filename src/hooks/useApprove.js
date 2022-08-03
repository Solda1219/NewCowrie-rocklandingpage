import { useCallback, useEffect, useState } from 'react'
import { useWeb3React } from '@web3-react/core'
import { Contract } from 'web3-eth-contract'
import { ethers } from 'ethers'
import { approve } from 'utility/callHelpers'
import useWeb3 from './useWeb3'
import { getPresaleContract, getJazzTokenContract } from 'utility/contractHelpers'

// Approve a Farm
export const useApproveJazz = (chainId) => {
  const web3 = useWeb3(chainId);
  const { account } = useWeb3React()
  const presaleContract = getPresaleContract(chainId, web3)
  const jazzContract = getJazzTokenContract(chainId, web3)

  const handleApprove = useCallback(async () => {
    try {
      const tx = await approve(jazzContract, presaleContract, account)
      return tx
    } catch (e) {
      return false
    }
  }, [account, chainId, jazzContract, presaleContract])

  return { onApprove: handleApprove }
}
