import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

/**
 * DAI token context CHANGE CONTRACT ADDRESS INFO ETC
 */
export class DAI {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0x6B175474E89094C44Da98b954EedeAC495271d0F',
      decimals: 18,
      symbol: 'DAI',
      name: 'Dai Stablecoin',
    };
  }
  public static POLYGON(): Token {
    return {
      chainId: ChainId.POLYGON,
      contractAddress: '0x8f3cf7ad23cd3cadbd9735aff958023239c6a063',
      decimals: 18,
      symbol: 'DAI',
      name: 'Dai Stablecoin',
    };
  }
  public static BSC() {
    return {
      chainId: ChainId.BSC,
      contractAddress: "0x8f3cf7ad23cd3cadbd9735aff958023239c6a063",
      decimals: 18,
      symbol: "DAI",
      name: "Dai Stablecoin",
    };
  }
  /**0x8f3cf7ad23cd3cadbd9735aff958023239c6a063
   * Get DAI token info by chain id
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
