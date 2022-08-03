import BigNumber from 'bignumber.js/bignumber'
import { BIG_TEN } from 'utility/bigNumber'

BigNumber.config({
    EXPONENTIAL_AT: 1000,
    DECIMAL_PLACES: 80,
  })

export const BASE_URL = 'https://pancakeswap.finance'
export const BASE_BSC_SCAN_URL = 'https://bscscan.com'
export const BASE_BSC_TESTNET_SCAN_URL = 'https://testnet.bscscan.com'
export const BASE_MATIC_SCAN_URL = 'https://polygonscan.com'
export const BASE_MATIC_TESTNET_SCAN_URL = 'https://mumbai.polygonscan.com'
export const DEFAULT_TOKEN_DECIMAL = BIG_TEN.pow(18)
export const DEFAULT_GAS_LIMIT = 200000
export const DEFAULT_GAS_PRICE = 5
export const BINANCE_SMART_CHAINID = 56

