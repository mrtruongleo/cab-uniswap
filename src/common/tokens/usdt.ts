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
      default:
        throw new UniswapError(
          `${chainId} is not allowed`,
          ErrorCodes.tokenChainIdContractDoesNotExist
        );
    }
  }
}
