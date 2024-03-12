export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  SEPOLIA = 11155111,
  FUJI = 43113,
  AVALANCHE = 43114,
  POLYGON = 137,
  BSC = 56,
  ARBITRUM = 42161,
  METIS = 1088
}

export const ChainNames = new Map<number, string>([
  [ChainId.MAINNET, 'mainnet'],
  [ChainId.ROPSTEN, 'ropsten'],
  [ChainId.RINKEBY, 'rinkeby'],
  [ChainId.GÖRLI, 'görli'],
  [ChainId.SEPOLIA, 'sepolia'],
  [ChainId.FUJI, 'fuji'],
  [ChainId.AVALANCHE, 'avalanche'],
  [ChainId.POLYGON, 'polygon'],
  [ChainId.BSC, 'bsc'],
  [ChainId.ARBITRUM, 'arbitrum'],
  [ChainId.METIS, 'metis']
]);
