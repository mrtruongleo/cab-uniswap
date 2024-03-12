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
  public static AVALANCHE() {
    return {
      chainId: ChainId.AVALANCHE,
      contractAddress: "0xd586E7F844cEa2F87f50152665BCbc2C279D8d70",
      decimals: 18,
      symbol: "DAI.e",
      name: "Dai Stablecoin",
    };
  }
  public static ARBITRUM() {
    return {
      chainId: ChainId.ARBITRUM,
      contractAddress: "0xDA10009cBd5D07dd0CeCc66161FC93D7c9000da1",
     decimals: 18,
      symbol: "DAI",
      name: "Dai Stablecoin",
    };
  }
  public static METIS() {
    return {
      chainId: ChainId.METIS,
      contractAddress: "0x4c078361FC9BbB78DF910800A991C7c3DD2F6ce0",
      decimals: 18,
      symbol: "mDAI",
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
