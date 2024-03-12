import { ChainId } from '../../enums/chain-id';
import { NativeCurrencyInfo } from '../../factories/pair/models/custom-network';
import { Token } from '../../factories/token/models/token';
import { ErrorCodes } from '../errors/error-codes';
import { UniswapError } from '../errors/uniswap-error';
import { deepClone } from '../utils/deep-clone';

const ETH_PREFIX = '_ETH';
export const ETH_SYMBOL = 'ETH';
export const ETH_NAME = 'Ethers';

export const appendEthToContractAddress = (contractAddress: string): string => {
  return `${contractAddress}${ETH_PREFIX}`;
};

export const removeEthFromContractAddress = (
  contractAddress: string
): string => {
  return contractAddress
    .replace(ETH_PREFIX, '')
    .replace(ETH_PREFIX.toLowerCase(), '');
};

export const isNativeEth = (contractAddress: string): boolean => {
  return contractAddress.includes(ETH_PREFIX);
};

export const turnTokenIntoEthForResponse = (
  token: Token,
  nativeCurrencyInfo?: NativeCurrencyInfo
): Token => {
  const clone = deepClone(token);
  // clear down contract address
  clone.contractAddress = 'NO_CONTRACT_ADDRESS';
  if (nativeCurrencyInfo) {
    clone.symbol = nativeCurrencyInfo.symbol;
    clone.name = nativeCurrencyInfo.name;
  } else {
    clone.symbol = ETH_SYMBOL;
    clone.name = ETH_NAME;
  }

  return clone;
};

/**
 * ETH token info
 */
export class ETH {
  public static MAINNET(): Token {
    return {
      chainId: ChainId.MAINNET,
      contractAddress: appendEthToContractAddress(
        '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2'
      ),
      decimals: 18,
      symbol: ETH_SYMBOL,
      name: ETH_NAME,
    };
  }

  public static ROPSTEN(): Token {
    return {
      chainId: ChainId.ROPSTEN,
      contractAddress: appendEthToContractAddress(
        '0xc778417E063141139Fce010982780140Aa0cD5Ab'
      ),
      decimals: 18,
      symbol: ETH_SYMBOL,
      name: ETH_NAME,
    };
  }

  public static RINKEBY(): Token {
    return {
      chainId: ChainId.RINKEBY,
      contractAddress: appendEthToContractAddress(
        '0xc778417E063141139Fce010982780140Aa0cD5Ab'
      ),
      decimals: 18,
      symbol: ETH_SYMBOL,
      name: ETH_NAME,
    };
  }

  public static GORLI(): Token {
    return {
      chainId: ChainId.GÖRLI,
      contractAddress: appendEthToContractAddress(
        '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6'
      ),
      decimals: 18,
      symbol: ETH_SYMBOL,
      name: ETH_NAME,
    };
  }

  public static SEPOLIA(): Token {
    return {
      chainId: ChainId.SEPOLIA,
      contractAddress: appendEthToContractAddress(
        '0xb16F35c0Ae2912430DAc15764477E179D9B9EbEa'
      ),
      decimals: 18,
      symbol: ETH_SYMBOL,
      name: ETH_NAME,
    };
  }

  public static FUJI(): Token {
    return {
      chainId: ChainId.FUJI,
      contractAddress: appendEthToContractAddress(
        '0xd00ae08403B9bbb9124bB305C09058E32C39A48c'
      ),
      decimals: 18,
      symbol: 'AVAX',
      name: 'Avalanche coin',
    };
  }

  public static AVALANCHE(): Token {
    return {
      chainId: ChainId.AVALANCHE,
      contractAddress: appendEthToContractAddress(
        '0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7'
      ),
      decimals: 18,
      symbol: 'AVAX',
      name: 'Avalanche coin',
    };
  }
  public static POLYGON(): Token {
    return {
      chainId: ChainId.POLYGON,
      contractAddress: appendEthToContractAddress(
        '0x0d500b1d8e8ef31e21c99d1db9a6444d3adf1270'
      ),
      decimals: 18,
      symbol: 'MATIC',
      name: 'Matic Network',
    };
  }
   public static BSC(): Token {
    return {
      chainId: ChainId.BSC,
      contractAddress: appendEthToContractAddress(
        '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c'
      ),
      decimals: 18,
      symbol: 'BNB',
      name: 'Binance coin',
    };
  }
   public static ARBITRUM(): Token {
    return {
      chainId: ChainId.ARBITRUM,
      contractAddress: appendEthToContractAddress(
        '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1'
      ),
      decimals: 18,
      symbol: ETH_SYMBOL,
      name: ETH_NAME,
    };
  }
  public static METIS(): Token {
    return {
      chainId: ChainId.METIS,
      contractAddress: appendEthToContractAddress(
        '0x75cb093E4D61d2A2e65D8e0BBb01DE8d89b53481'
      ),
      decimals: 18,
      symbol: 'METIS',
      name: 'Metis network',
    };
  }
  /**
   * Get ETH token info by chain id
   * @param chainId The chain id
   */
  public static info(
    chainId: ChainId | number,
    customNetworkNativeWrappedTokenInfo?: Token | undefined
  ): Token {
    if (customNetworkNativeWrappedTokenInfo) {
      return {
        ...customNetworkNativeWrappedTokenInfo,
        contractAddress: appendEthToContractAddress(
          customNetworkNativeWrappedTokenInfo.contractAddress
        ),
      };
    }
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
