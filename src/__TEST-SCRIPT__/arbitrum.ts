import { csl } from '../common/utils/csl';
import { ChainId } from '../enums/chain-id';
import { UniswapPairSettings } from '../factories/pair/models/uniswap-pair-settings';
import { UniswapPair } from '../factories/pair/uniswap-pair';
import {TradeDirection, UniswapVersion } from '../index';

// WBTC - 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599
// FUN - 0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b
// REP - 0x1985365e9f78359a9B6AD760e32412f4a445E862
// WETH - 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
// UNI - 0x1f9840a85d5af5bf1d1762f925bdaddc4201f984
// AAVE - 0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9
// GTC - 0xde30da39c46104798bb5aa3fe8b9e0e1f348163f

const routeTest = async () => {
  const fromTokenContractAddress = '0x3082cc23568ea640225c2467653db90e9250aaa0'//'0xc2132d05d31c914a87c6611c10748aeb04b58e8f'; //'0xEf0e839Cf88E47be676E72D5a9cB6CED99FaD1CF';
  console.log(fromTokenContractAddress)
  const toTokenContractAddress = '0x6740acb82ac5c63a7ad2397ee1faed7c788f5f8c'; // 0x1985365e9f78359a9B6AD760e32412f4a445E862
  const ethereumAddress = '0xd5c1b0b852754ccdc613e9f1aed933e500353fe2';

  const uniswapPair = new UniswapPair({
    fromTokenContractAddress,
    toTokenContractAddress,
    ethereumAddress,
    chainId: ChainId.ARBITRUM,
    providerUrl:"https://1rpc.io/arb",
    settings: new UniswapPairSettings({
      // if not supplied it use `0.005` which iss 0.5%;
      // all figures
      slippage: 0.005,
      // if not supplied it will use 20 a deadline minutes
      deadlineMinutes: 20,
      disableMultihops: false,
      disableObserver: true,
      uniswapVersions: [UniswapVersion.v2, UniswapVersion.v3],
      customNetwork:{
        nameNetwork: 'Arbitrum',
        multicallContractAddress: "0xcA11bde05977b3631167028862bE2a173976CA11",
        nativeCurrency: {
          name: 'Arbitrum',
          symbol: 'ARB'
        },
        nativeWrappedTokenInfo: {
          chainId: ChainId.ARBITRUM,
          contractAddress: '0x82aF49447D8a07e3bd95BD0d56f35241523fBab1',
          decimals: 18,
          symbol: 'WETH',
          name: 'Wrapped ETH'
        }
      },
      cloneUniswapContractDetails: [
        {
          v2Override:
            {
              description: 'Camelot',
              routerAddress: '0xc873fEcbd354f5A56E00E710B90EF4201db2448d',
              factoryAddress: '0x6EcCab422D763aC031210895C81787E87B43A652',
              pairAddress: '0x6EcCab422D763aC031210895C81787E87B43A652',
              
            },
        }
      ],
      
    }),
  });

  const startTime = new Date().getTime();

  const uniswapPairFactory = await uniswapPair.createFactory();
  const trade = await uniswapPairFactory.trade('1', TradeDirection.input);

  console.log(new Date().getTime() - startTime);
  csl(trade);

  // console.log(JSON.stringify(trade, null, 4));
  // console.log(trade);
  // console.log(
  //   trade.allTriedRoutesQuotes.filter(
  //     (c) => c.uniswapVersion === UniswapVersion.v3
  //   )
  // );

  // const ethers = new EthersProvider({ chainId: ChainId.POLYGON });
  // await ethers.provider.estimateGas(trade.transaction);
  // console.log(
  //   'gas',
  //   (await ethers.provider.estimateGas(trade.transaction)).toHexString()
  // );

  // process.stdin.resume();

  // console.log(JSON.stringify(trade));

  // const data = await uniswapPairFactory.generateApproveMaxAllowanceData();
  // console.log(data);

  // const toToken = uniswapPairFactory.toToken;
  // console.log(toToken);

  // const fromToken = uniswapPairFactory.fromToken;
  // console.log(fromToken);

  // const tokenContractAddress = '0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b';

  // const tokenFactoryPublic = new TokenFactoryPublic(
  //   fromTokenContractAddress,
  //   ChainId.MAINNET
  // );

  // console.log(
  //   await tokenFactoryPublic.getAllowanceAndBalanceOf(ethereumAddress)
  // );

  // // the contract address for which you are allowing to move tokens on your behalf
  // const spender = '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D';

  // // the amount you wish to allow them to move, this example just uses the max
  // // hex. If not each time they do a operation which needs to move tokens then
  // // it will cost them 2 transactions, 1 to approve the allowance then 1 to actually
  // // do the contract call to move the tokens.
  // const value =
  //   '0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff';

  // const data = tokenFactoryPublic.generateApproveAllowanceData(spender, value);
  // console.log(data);
};

routeTest();
