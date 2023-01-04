import type { Chain } from '../types/chain';
import {
  getAddress as storeGetAddress,
  setChain,
  watchAddress as storeWatchAddress,
  watchCluster
} from '../store';
import { withConnector } from '../utils/connector';

export async function connect() {
  return withConnector(async connector => {
    return connector.enable();
  });
}

/**
 * This method returns the underlying CIP-30 implementation
 * for whichever connector is active.
 * This method may be all we need to allow the WC modal and dapps
 * to use these connectors.
 * @returns EnabledAPI
 */
export async function getCardanoAPI() {
  return withConnector(async connector => {
    return Promise.resolve(connector.getConnectorAPI());
  });
}

export async function signMessage(addr: string, payload: string) {
  return withConnector(async connector => {
    return connector.getConnectorAPI()?.signData(addr, payload);
  });
}

export async function getChangeAddress() {
  return withConnector(async connector => {
    return connector.getConnectorAPI()?.getChangeAddress();
  });
}

export async function getRewardAddress() {
  return withConnector(async connector => {
    return connector.getConnectorAPI()?.getRewardAddress();
  });
}

export async function getRewardAddresses() {
  return withConnector(async connector => {
    return connector.getConnectorAPI()?.getRewardAddresses();
  });
}

export async function getBalance() {
  return withConnector(async connector => {
    return connector.getConnectorAPI()?.getBalance();
  });
}

export async function getCollateral() {
  return withConnector(async connector => {
    return connector.getConnectorAPI()?.getCollateral();
  });
}

export async function getUsedAddresses() {
  return withConnector(async connector => {
    return connector.getConnectorAPI()?.getUsedAddresses();
  });
}

export function getAddress() {
  return storeGetAddress();
}

export function watchAddress(callback: (address?: string) => void) {
  return storeWatchAddress(callback);
}

export function switchNetwork(chain: Chain) {
  setChain(chain);
}

export async function getNetworkId() {
  return withConnector(async connector => {
    return connector.getConnectorAPI()?.getNetworkId();
  });
}

export function watchNetwork(callback: (cluster: Chain) => void) {
  return watchCluster(callback);
}

export async function disconnect() {
  return withConnector(async connector => {
    return connector.disconnect();
  });
}
