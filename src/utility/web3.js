import Web3 from 'web3'
import getRpcUrl from 'utility/getRpcUrl'

const getWeb3NoAccount = (chainID) => {
    const httpProvider = new Web3.providers.HttpProvider(getRpcUrl(chainID), { timeout: 10000 })
    const web3NoAccount = new Web3(httpProvider);
    return  web3NoAccount;
}
export { getWeb3NoAccount }
export default getWeb3NoAccount



