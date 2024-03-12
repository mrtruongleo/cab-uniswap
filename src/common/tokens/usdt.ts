import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

/**
 * USDT token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class USDT {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xdAC17F958D2ee523a2206206994597C13D831ec7',
      decimals: 6,
      symbol: 'USDT',
      name: 'Tether USD',
    };
  }
  public static POLYGON(): Token {
    return {
      chainId: ChainId.POLYGON,
      contractAddress: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
      decimals: 6,
      symbol: 'USDT',
      name: 'Tether USD',
    };
  }
   public static BSC() {
    return {
      chainId: ChainId.BSC,
      contractAddress: "0xc2132d05d31c914a87c6611c10748aeb04b58e8f",
      decimals: 18,
      symbol: "USDT",
      name: "Tether USD",
    };
  }
  public static AVALANCHE() {
    return {
      chainId: ChainId.AVALANCHE,
      contractAddress: "0x9702230A8Ea53601f5cD2dc00fDBc13d4dF4A8c7",
      decimals: 6,
      symbol: "USDT",
      name: "Tether USD",
    };
  }
  public static ARBITRUM() {
    return {
      chainId: ChainId.ARBITRUM,
      contractAddress: "0xFd086bC7CD5C481DCC9C85ebE478A1C0b69FCbb9",
      decimals: 6,
      symbol: "USDT",
      name: "Tether USD",
    };
  }
  public static METIS() {
    return {
      chainId: ChainId.METIS,
      contractAddress: "0xbB06DCA3AE6887fAbF931640f67cab3e3a16F4dC",
      decimals: 6,
      symbol: "mUSDT",
      name: "Tether USD",
    };
  }
  /**0xc2132d05d31c914a87c6611c10748aeb04b58e8f
   * Get USDT token info by chain id
   * @param chainId The chain id
   */
  public static token(chainId: ChainId | number): Token {
    switch (chainId) {
      case ChainId.MAINNET:
        return this.MAINNET();
      case ChainId.POLYGON:
        return this.POLYGON();
      case ChainId.BSC:
        return this.BSC();
      case ChainId.ARBITRUM:
        return this.ARBITRUM();
      case ChainId.AVALANCHE:
        return this.AVALANCHE();
      case ChainId.METIS:
        return this.METIS()
      default:
        throw new UniswapError(
          `${chainId} is not allowed`,
          ErrorCodes.tokenChainIdContractDoesNotExist
        );
    }
  }
}
