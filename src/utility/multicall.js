import { AbiItem } from 'web3-utils'
import { Interface } from '@ethersproject/abi'
import { getWeb3NoAccount } from 'utility/web3'
import MultiCallAbi from 'config/abi/Multicall.json'
import { getMulticallAddress } from 'utility/addressHelpers'


const multicall = async (chainId, abi, calls) => {
  const web3 = getWeb3NoAccount(chainId)
  const multi = new web3.eth.Contract(MultiCallAbi, getMulticallAddress(chainId))
  const itf = new Interface(abi)

  const calldata = calls.map((call) => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)])
  const { returnData } = await multi.methods.aggregate(calldata).call()
  const res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call))

  return res
}

/**
 * Multicall V2 uses the new "tryAggregate" function. It is different in 2 ways
 *
 * 1. If "requireSuccess" is false multicall will not bail out if one of the calls fails
 * 2. The return inclues a boolean whether the call was successful e.g. [wasSuccessfull, callResult]
 */
export const multicallv2 = async (chainId, abi, calls, requireSuccess = true) => {
  const web3 = getWeb3NoAccount(chainId)
  const multi = new web3.eth.Contract(MultiCallAbi, getMulticallAddress())
  const itf = new Interface(abi)

  const calldata = calls.map((call) => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)])
  const returnData = await multi.methods.tryAggregate(requireSuccess, calldata).call()
  const res = returnData.map((call, i) => {
    const [result, data] = call
    return {
      result,
      data: itf.decodeFunctionResult(calls[i].name, data),
    }
  })

  return res
}
export default multicall
