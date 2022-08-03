import { useEffect, useState, useRef } from 'react'
import Web3 from 'web3'
import { useWeb3React } from '@web3-react/core'
import { getWeb3NoAccount } from 'utility/web3'

/**
 * Provides a web3 instance using the provider provided by useWallet
 * with a fallback of an httpProver
 * Recreate web3 instance only if the provider change
 */
const useWeb3 = (chainId) => {
  //const [currentChainId, setCurrentChainId] = useState(chainId)
  const { library } = useWeb3React()
  const refEth = useRef(library)
  const [web3, setweb3] = useState(library ? new Web3(library) : getWeb3NoAccount(chainId))
  
  useEffect(() => {
    if (library&&library !== refEth.current) {
      //console.log(library,refEth.current,chainId,library !== refEth.current,"library")
      setweb3(new Web3(library))
     // setweb3(library ? new Web3(library) : getWeb3NoAccount(chainId))
      refEth.current = library
    }
  }, [library, chainId])

  return web3
}

export default useWeb3
