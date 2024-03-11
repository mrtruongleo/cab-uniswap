import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

/**
 * WBTC token context
 */
export class WBTC {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x2260fac5e5542a773aa44fbcfedf7c193bc2c599',
      decimals: 8,
      symbol: 'WBTC',
      name: 'Wrapped BTC',
    };
  }
  public static POLYGON(): Token {
    return {
      chainId: ChainId.POLYGON,
      contractAddress: '0x1bfd67037b42cf73acf2047067bd4f2c47d9bfd6',
      decimals: 8,
      symbol: 'WBTC',
      name: 'Wrapped BTC',
    };
  }
  public static BSC(): Token {
    return {
      chainId: ChainId.BSC,
      contractAddress: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
      decimals: 8,
      symbol: 'BTCB',
      name: 'Wrapped BTC',
    };
  }

  /**
   * Get WBTC token info by chain id
   * @param chainId The chain id
   */
  public static token(chainId: ChainId | number): Token {
    switch (chainId) {
      case ChainId.MAINNET:
        return this.MAINNET();
      case ChainId.POLYGON:
        return this.POLYGON();
      default:
        throw new UniswapError(
          `${chainId} is not allowed`,
          ErrorCodes.tokenChainIdContractDoesNotExist
        );
    }
  }
}
