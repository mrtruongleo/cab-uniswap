import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

/**
 * USDC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class USDC {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    };
  }
  public static POLYGON(): Token {
    return {
      chainId: ChainId.POLYGON,
      contractAddress: '0x3c499c542cef5e3811e1192ce70d8cc03d5c3359',
      decimals: 6,
      symbol: 'USDC',
      name: 'USD Coin',
    };
  }
  public static BSC() {
    return {
      chainId: ChainId.BSC,
      contractAddress: "0x3c499c542cef5e3811e1192ce70d8cc03d5c3359",
      decimals: 18,
      symbol: "USDC",
      name: "USD Coin",
    };
  }
  public static AVALANCHE() {
    return {
      chainId: ChainId.AVALANCHE,
      contractAddress: "0xB97EF9Ef8734C71904D8002F8b6Bc66Dd9c48a6E",
      decimals: 6,
      symbol: "USDC",
      name: "USD Coin",
    };
  }
  public static ARBITRUM() {
    return {
      chainId: ChainId.ARBITRUM,
      contractAddress: "0xaf88d065e77c8cC2239327C5EDb3A432268e5831",
      decimals: 6,
      symbol: "USDC",
      name: "USD Coin",
    };
  }
  public static METIS() {
    return {
      chainId: ChainId.METIS,
      contractAddress: "0xEA32A96608495e54156Ae48931A7c20f0dcc1a21",
      decimals: 6,
      symbol: "mUSDC",
      name: "USD Coin",
    };
  }
  /**0xEA32A96608495e54156Ae48931A7c20f0dcc1a21
   * Get USDC token info by chain id
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
