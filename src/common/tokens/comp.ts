import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

/**
 * COMP token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class COMP {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xc00e94Cb662C3520282E6f5717214004A7f26888',
      decimals: 18,
      symbol: 'COMP',
      name: 'Compound',
    };
  }
  public static POLYGON(): Token {
    return {
      chainId: ChainId.POLYGON,
      contractAddress: '0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c',
      decimals: 18,
      symbol: 'COMP',
      name: 'Compound',
    };
  }
  public static BSC() {
    return {
      chainId: ChainId.BSC,
      contractAddress: "0x8505b9d2254a7ae468c0e9dd10ccea3a837aef5c",
      decimals: 18,
      symbol: "COMP",
      name: "Compound",
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
