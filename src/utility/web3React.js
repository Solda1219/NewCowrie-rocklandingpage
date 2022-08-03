import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { BscConnector } from "@binance-chain/bsc-connector";
import { ConnectorNames } from "@pancakeswap-v3/uikit";
import Web3 from "web3";
import getNodeUrl from "./getRpcUrl";

const POLLING_INTERVAL = 12000;

const injected = (network)=>{
  return (new InjectedConnector({ supportedChainIds: [network] }));
}

const walletconnect =(network)=> new WalletConnectConnector({
  rpc: { [network]: getNodeUrl(network) },
  qrcode: true,
  pollingInterval: POLLING_INTERVAL,
});

const bscConnector = (network)=>new BscConnector({ supportedChainIds: [network] });

export const connectorsByName = (network) => {
  if (network == 56 && network == 97)
    return {
      [ConnectorNames.Injected]: injected(network),
      [ConnectorNames.WalletConnect]: walletconnect(network),
      [ConnectorNames.BSC]: bscConnector(network),
    };
  else
    return {
      [ConnectorNames.Injected]: injected(network),
      [ConnectorNames.WalletConnect]: walletconnect(network)
    };
};

export const getLibrary = (provider) => {
  return provider;
};
