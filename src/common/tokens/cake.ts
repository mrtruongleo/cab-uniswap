import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

/**
 * USDC token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class CAKE {
  public static BSC(): Token {
    return {
      chainId: ChainId.BSC,
      contractAddress: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
      decimals: 18,
      symbol: 'CAKE',
      name: 'Pancake Swap',
    };
  }
  /**0x3c499c542cef5e3811e1192ce70d8cc03d5c3359
   * Get USDC token info by chain id
   * @param chainId The chain id
   */
  public static token(chainId: ChainId | number): Token {
    switch (chainId) {
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
