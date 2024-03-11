import { ChainId } from '../../../enums/chain-id';
import { Token } from '../../../factories/token/models/token';
import { ErrorCodes } from '../../errors/error-codes';
import { UniswapError } from '../../errors/uniswap-error';

/**
 * MAI token contract
 */
export class MAI {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2',
      decimals: 18,
      symbol: 'MKR',
      name: 'MKR token',
    };
  }
  public static POLYGON(): Token {
    return {
      chainId: ChainId.POLYGON,
      contractAddress: '0x6f7c932e7684666c9fd1d44527765433e01ff61d',
      decimals: 18,
      symbol: 'MKR',
      name: 'MKR token',
    };
  }
  /**0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c
   * Get COMP token info by chain id
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
