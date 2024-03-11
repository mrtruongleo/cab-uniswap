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
  /**0x3c499c542cef5e3811e1192ce70d8cc03d5c3359
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
      default:
        throw new UniswapError(
          `${chainId} is not allowed`,
          ErrorCodes.tokenChainIdContractDoesNotExist
        );
    }
  }
}
