import BigNumber from 'bignumber.js'
import  getWeb3NoAccount  from 'utility/web3'

import {
  getPresaleContractAddress,
  getPresaleTokenAddress,
  getMulticallAddress,
  getJazzTokenAddress,
} from './addressHelpers'

import presaleABI from 'config/abi/presale.json'
import erc20ABI from 'config/abi/erc20.json'
import multicall from 'utility/multicall'

export const fetchSaleStatus = async (chainId) => {
  const presaleContractAddress = getPresaleContractAddress(chainId)

  const calls = [
    {
      address: presaleContractAddress,
      name: 'icoAmount',
      params: [],
    },
    {
      address: presaleContractAddress,
      name: 'icoRemainAmount',
      params: [],
    },
    {
      address: presaleContractAddress,
      name: 'airdropAmount',
      params: [],
    },
    {
      address: presaleContractAddress,
      name: 'airdropRemainAmount',
      params: [],
    },
    {
      address: presaleContractAddress,
      name: 'icoAmountForJazzHolder',
      params: [],
    },
    {
      address: presaleContractAddress,
      name: 'icoRemainAmountForJazzHolder',
      params: [],
    },
    {
      address: presaleContractAddress,
      name: 'icoLive',
      params: [],
    },
    {
      address: presaleContractAddress,
      name: 'currentPhaseNum',
      params: [],
    },
    {
      address: presaleContractAddress,
      name: 'claimReady',
      params: [],
    },
  ];
  try {
    const res = await multicall(chainId, presaleABI, calls)
    const ret = [
    BigNumber(res[0]).toJSON(), BigNumber(res[1]).toJSON(),
    BigNumber(res[2]).toJSON(), BigNumber(res[3]).toJSON(),
    BigNumber(res[4]).toJSON(), BigNumber(res[5]).toJSON(),
    res[6][0],
    res[7][0],
    res[8][0]];
    return ret
  } catch {
    return [0,0,0,0,0,0, false, 0, false];
  }

}

export const fetchTokenBalances = async (chainId, account) => {
  if (!account) return [0];
  
  let jazzTokenAddress = getJazzTokenAddress(chainId)
  
  //if(chainId != 56) jazzTokenAddress = presaleTokenAddress;
  const calls = [
    {
      address: jazzTokenAddress,
      name: 'balanceOf',
      params: [account],
    },
  ];

  try {
    const rawTokenBalances = await multicall(chainId, erc20ABI, calls)
    const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
      return new BigNumber(tokenBalance).toJSON()
    })
    return parsedTokenBalances
  } catch {
    return [0]
  }
}

export const fetchPresaleTokenBalances = async (chainId, account) => {
  if (!account) return [0];
  const presaleContractAddress = getPresaleContractAddress(chainId)

  const calls = [
    {
      address: presaleContractAddress,
      name: 'getDeliverAmount',
      params: [account],
    }
  ];
  try {
    const rawTokenBalances = await multicall(chainId, presaleABI, calls)
    const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
      return new BigNumber(tokenBalance).toJSON()
    })
    return parsedTokenBalances
  } catch {
    return [0];
  }
}

export const fetchBnbBalance = async (chainId, account) => {
  
  if (!account) return 0;
  try {
    const web3 = getWeb3NoAccount(chainId)
    const walletBalance = await web3.eth.getBalance(account)
    return new BigNumber(walletBalance).toJSON()
  } catch {
    return 0;
  }
}

// export const fetchSalePrices = async (chainId, phase) => {
//   if (!account) return [0];
//   const presaleContractAddress = getPresaleContractAddress(chainId)

//   const calls = [
//     {
//       address: presaleContractAddress,
//       name: 'getDeliverAmount',
//       params: [account],
//     }
//   ];
//   try {
//     const rawTokenBalances = await multicall(chainId, presaleABI, calls)
//     const parsedTokenBalances = rawTokenBalances.map((tokenBalance) => {
//       return new BigNumber(tokenBalance).toJSON()
//     })
//     return parsedTokenBalances
//   } catch {
//     return [0];
//   }
// }
export const fetchFullSaleStatus = async (chainId, account) => {
  const sale = await fetchSaleStatus(chainId);
  const tokens = await fetchTokenBalances(chainId, account);
  const base = await fetchBnbBalance(chainId, account);
  const curSale = await fetchPresaleTokenBalances(chainId, account);
  return { sale, tokens,  base, curSale }
}
export default fetchBnbBalance
