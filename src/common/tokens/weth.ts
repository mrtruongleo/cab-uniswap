import { ChainId } from '../../enums/chain-id';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';

export const WETH_SYMBOL = 'WETH';
export const WETH_NAME = 'Wrapped Ether';

/**
 * WETH token context (called `WETHContract` so people get a breaking changes if they use the old name of `WETH`)
 */
export class WETHContract {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
      decimals: 18,
      symbol: WETH_SYMBOL,
      name: WETH_NAME,
    };
  }

  public static ROPSTEN(): Token {
    return {
      chainId: ChainId.ROPSTEN,
      contractAddress: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
      decimals: 18,
      symbol: WETH_SYMBOL,
      name: WETH_NAME,
    };
  }

  public static RINKEBY(): Token {
    return {
      chainId: ChainId.RINKEBY,
      contractAddress: '0xc778417E063141139Fce010982780140Aa0cD5Ab',
      decimals: 18,
      symbol: WETH_SYMBOL,
      name: WETH_NAME,
    };
  }

  public static GORLI(): Token {
    return {
      chainId: ChainId.GÖRLI,
      contractAddress: '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6',
      decimals: 18,
      symbol: WETH_SYMBOL,
      name: WETH_NAME,
    };
  }

  public static FUJI(): Token {
    return {
      chainId: ChainId.FUJI,
      contractAddress: '0xd00ae08403B9bbb9124bB305C09058E32C39A48c',
      decimals: 18,
      symbol: WETH_SYMBOL,
      name: WETH_NAME,
    };
  }

  public static AVALANCHE(): Token {
    return {
      chainId: ChainId.AVALANCHE,
      contractAddress: '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7',
      decimals: 18,
      symbol: 'WAVAX',
      name: 'Wrapped Avax',
    };
  }
  public static SEPOLIA(): Token {
    return {
      chainId: ChainId.SEPOLIA,
      contractAddress: '0xb16F35c0Ae2912430DAc15764477E179D9B9EbEa',
      decimals: 18,
      symbol: WETH_SYMBOL,
      name: WETH_NAME,
    }
  }
  public static POLYGON(): Token {
    return {
      chainId: ChainId.POLYGON,
      contractAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
      decimals: 18,
      symbol: 'WMATIC',
      name: 'Wrapped Matic',
    };
  }
  public static BSC(): Token {
    return {
      chainId: ChainId.BSC,
      contractAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
      decimals: 18,
      symbol: 'WBNB',
      name: 'Wrapped BNB',
    };
  }
  public static ARBITRUM(): Token {
    return {
      chainId: ChainId.ARBITRUM,
      contractAddress: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
      decimals: 18,
      symbol: WETH_SYMBOL,
      name: WETH_NAME,
    };
  }
  public static METIS(): Token {
    return {
      chainId: ChainId.METIS,
      contractAddress: '0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481',
      decimals: 18,
      symbol: 'WMETIS',
      name: 'Wrapped Metis',
    };
  }
  /**
   * Get WETH token info by chain id
   * @param chainId The chain id
   */
  public static token(chainId: ChainId | number): Token {
    switch (chainId) {
      case ChainId.MAINNET:
        return this.MAINNET();
      case ChainId.ROPSTEN:
        return this.ROPSTEN();
      case ChainId.RINKEBY:
        return this.RINKEBY();
      case ChainId.GÖRLI:
        return this.GORLI();
      case ChainId.FUJI:
        return this.FUJI();
      case ChainId.AVALANCHE:
        return this.AVALANCHE();
      case ChainId.SEPOLIA:
        return this.SEPOLIA();
      case ChainId.POLYGON:
        return this.POLYGON();
      case ChainId.BSC:
        return this.BSC();
      case ChainId.ARBITRUM:
        return this.ARBITRUM();
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
