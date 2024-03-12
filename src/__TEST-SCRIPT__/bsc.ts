import { WBTC } from '../common/tokens/wbtc';
import { csl } from '../common/utils/csl';
import { ChainId } from '../enums/chain-id';
import { UniswapPairSettings } from '../factories/pair/models/uniswap-pair-settings';
import { UniswapPair } from '../factories/pair/uniswap-pair';
import {COMP, DAI, TradeDirection, USDC, USDT, UniswapVersion } from '../index';

// WBTC - 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599
// FUN - 0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b
// REP - 0x1985365e9f78359a9B6AD760e32412f4a445E862
// WETH - 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
// UNI - 0x1f9840a85d5af5bf1d1762f925bdaddc4201f984
// AAVE - 0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9
// GTC - 0xde30da39c46104798bb5aa3fe8b9e0e1f348163f

const routeTest = async () => {
  const fromTokenContractAddress = '0x2dff88a56767223a5529ea5960da7a3f5f766406'//'0xc2132d05d31c914a87c6611c10748aeb04b58e8f'; //'0xEf0e839Cf88E47be676E72D5a9cB6CED99FaD1CF';
  console.log(fromTokenContractAddress)
  const toTokenContractAddress = '0x0d8ce2a99bb6e3b7db580ed848240e4a0f9ae153'; // 0x1985365e9f78359a9B6AD760e32412f4a445E862
  const ethereumAddress = '0x89be2512aba6b6542aac5f5e5101348cf98c68a9';

  const uniswapPair = new UniswapPair({
    fromTokenContractAddress,
    toTokenContractAddress,
    ethereumAddress,
    
    chainId: ChainId.BSC,
    providerUrl:"https://bsc-dataseed1.binance.org",
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
        nameNetwork: 'BSC',
        multicallContractAddress: "0xcA11bde05977b3631167028862bE2a173976CA11",
        nativeCurrency: {
          name: 'BSC',
          symbol: 'BNB'
        },
        nativeWrappedTokenInfo: {
          chainId: 56,
          contractAddress: '0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c',
          decimals: 18,
          symbol: 'WBNB',
          name: 'Wrapped BNB'
        },
        baseTokens:{
            usdc: USDC.BSC(),
            usdt: USDT.BSC(),
            dai:DAI.BSC(),
            comp: COMP.BSC(),
            wbtc: WBTC.BSC()
        }
      },
      
      cloneUniswapContractDetails: [
        {
          v2Override:
            {
              description: 'PancakeSwap',
              routerAddress: '0x10ED43C718714eb63d5aA57B78B54704E256024E',//'0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
              factoryAddress: '0xca143ce32fe78f1f7019d7d551a6402fc5350c73',
              pairAddress: '0xca143ce32fe78f1f7019d7d551a6402fc5350c73',
              
            },
            
        }
      ],
      
    }),
  });

  const startTime = new Date().getTime();

  const uniswapPairFactory = await uniswapPair.createFactory();
  // const y = await uniswapPairFactory.findAllPossibleRoutesWithQuote('1', TradeDirection.input)
  // const z = await uniswapPairFactory.findBestRoute('1', TradeDirection.input)
  // csl('x: ', x)
  // csl( 'y', y)
  // csl( 'z', z)
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
