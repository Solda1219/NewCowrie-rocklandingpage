// Set of helper functions to facilitate wallet setup

import {
  BASE_BSC_SCAN_URL,
  BASE_BSC_TESTNET_SCAN_URL,
  BASE_MATIC_SCAN_URL,
  BASE_MATIC_TESTNET_SCAN_URL,
} from "config";
import { nodes } from "./getRpcUrl";

/**
 * Prompt the user to add BSC as a network on Metamask, or switch to BSC if the wallet is on a different network
 * @returns {boolean} true if the setup succeeded, false otherwise
 */
export const setupNetwork = async (network) => {
  const provider = window.ethereum;

  if (provider) {
    const chainId = network;
    console.log(nodes);
    try {
      if (chainId == 56)
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: "Binance Smart Chain Mainnet",
              nativeCurrency: {
                name: "BNB",
                symbol: "bnb",
                decimals: 18,
              },
              rpcUrls: nodes[chainId],
              blockExplorerUrls: [`${BASE_BSC_SCAN_URL}/`],
            },
          ],
        });
      else if (chainId == 97)
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: "Binance Smart Chain Testnet",
              nativeCurrency: {
                name: "tBNB",
                symbol: "tbnb",
                decimals: 18,
              },
              rpcUrls: nodes[chainId],
              blockExplorerUrls: [`${BASE_BSC_TESTNET_SCAN_URL}/`],
            },
          ],
        });
      else if (chainId == 137)
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: "Matic Smart Chain Mainnet",
              nativeCurrency: {
                name: "MATIC",
                symbol: "matic",
                decimals: 18,
              },
              rpcUrls: nodes[chainId],
              blockExplorerUrls: [`${BASE_MATIC_SCAN_URL}/`],
            },
          ],
        });
      else if (chainId == 80001)
        await provider.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: `0x${chainId.toString(16)}`,
              chainName: "Matic Smart Chain Testnet",
              nativeCurrency: {
                name: "tMATIC",
                symbol: "tmatic",
                decimals: 18,
              },
              rpcUrls: nodes[chainId],
              blockExplorerUrls: [`${BASE_MATIC_TESTNET_SCAN_URL}/`],
            },
          ],
        });

      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  } else {
    console.error(
      "Can't setup the network on metamask because window.ethereum is undefined"
    );
    return false;
  }
};

/**
 * Prompt the user to add a custom token to metamask
 * @param tokenAddress
 * @param tokenSymbol
 * @param tokenDecimals
 * @param tokenImage
 * @returns {boolean} true if the token has been added, false otherwise
 */
export const registerToken = async (
  tokenAddress,
  tokenSymbol,
  tokenDecimals,
  tokenImage
) => {
  const tokenAdded = await window.ethereum.request({
    method: "wallet_watchAsset",
    params: {
      type: "ERC20",
      options: {
        address: tokenAddress,
        symbol: tokenSymbol,
        decimals: tokenDecimals,
        image: tokenImage,
      },
    },
  });

  return tokenAdded;
};
