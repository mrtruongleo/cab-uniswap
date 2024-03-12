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
  public static AVALANCHE() {
    return {
      chainId: ChainId.AVALANCHE,
      contractAddress: "0x50b7545627a5162F82A992c33b87aDc75187B218",
      decimals: 8,
      symbol: 'WBTC.e',
      name: 'Wrapped BTC',
    };
  }
  public static ARBITRUM() {
    return {
      chainId: ChainId.ARBITRUM,
      contractAddress: "0x2f2a2543B76A4166549F7aaB2e75Bef0aefC5B0f",
      decimals: 8,
      symbol: 'WBTC',
      name: 'Wrapped BTC',
    };
  }
  public static METIS() {
    return {
      chainId: ChainId.METIS,
      contractAddress: "0x433E43047B95cB83517abd7c9978Bdf7005E9938",
      decimals: 8,
      symbol: 'mWBTC',
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
