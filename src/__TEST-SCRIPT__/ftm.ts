import { WBTC } from '../common/tokens/wbtc';
import { csl } from '../common/utils/csl';
import { ChainId } from '../enums/chain-id';
import { UniswapPairSettings } from '../factories/pair/models/uniswap-pair-settings';
import { UniswapPair } from '../factories/pair/uniswap-pair';
import {DAI, TradeDirection, USDC, USDT, UniswapVersion } from '../index';

// WBTC - 0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599
// FUN - 0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b
// REP - 0x1985365e9f78359a9B6AD760e32412f4a445E862
// WETH - 0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2
// UNI - 0x1f9840a85d5af5bf1d1762f925bdaddc4201f984
// AAVE - 0x7fc66500c84a76ad7e9c93437bfc5ac33e2ddae9
// GTC - 0xde30da39c46104798bb5aa3fe8b9e0e1f348163f

const routeTest = async () => {
  const fromTokenContractAddress = '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83_ETH'//'0xc2132d05d31c914a87c6611c10748aeb04b58e8f'; //'0xEf0e839Cf88E47be676E72D5a9cB6CED99FaD1CF';
  console.log(fromTokenContractAddress)
  const toTokenContractAddress = '0x4da35357f710D36c29F0234A8fC0d63dd078De23'; // 0x1985365e9f78359a9B6AD760e32412f4a445E862
  const ethereumAddress = '0x89be2512aba6b6542aac5f5e5101348cf98c68a9';

  const uniswapPair = new UniswapPair({
    fromTokenContractAddress,
    toTokenContractAddress,
    ethereumAddress,
    
    chainId: ChainId.FTM,
    providerUrl:"https://1rpc.io/ftm",
    settings: new UniswapPairSettings({
      // if not supplied it use `0.005` which iss 0.5%;
      // all figures
      slippage: 0.005,
      // if not supplied it will use 20 a deadline minutes
      deadlineMinutes: 20,
      disableMultihops: false,
      disableObserver: true,
      uniswapVersions: [UniswapVersion.v2, UniswapVersion.v3],
      
      customNetwork: {
      nameNetwork: "Fantom",
      multicallContractAddress: "0xcA11bde05977b3631167028862bE2a173976CA11",
      nativeCurrency: {
        name: "Fantom",
        symbol: "FTM",
      },
      nativeWrappedTokenInfo: {
        chainId: 250,
        contractAddress: "0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83",
        decimals: 18,
        symbol: "wFTM",
        name: "Wrapped Fantom",
      },
      baseTokens: {
        usdc: {
          ...USDC.BSC(),
          chainId: 250,
          contractAddress: "0x04068DA6C83AFCFA0e13ba15A6696662335D5B75",
        },
        usdt: {
          ...USDT.BSC(),
          chainId: 250,
          contractAddress: "0x049d68029688eabf473097a2fc38ef61633a3c7a",
        },
        dai: {
          ...DAI.BSC(),
          chainId: 250,
          contractAddress: "0x8D11eC38a3EB5E956B052f67Da8Bdc9bef8Abf3E",
        },
        wbtc: {
          ...WBTC.BSC(),
          chainId: 250,
          contractAddress: "0x321162Cd933E2Be498Cd2267a90534A804051b11",
        },
      },
    },
    cloneUniswapContractDetails: [
      {
        v2Override: {
          description: "Spooky Swap",
          routerAddress: "0xF491e7B69E4244ad4002BC14e878a34207E38c29", //'0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45',
          factoryAddress: "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
          pairAddress: "0x152eE697f2E276fA89E96742e9bB9aB1F2E61bE3",
        },
      },
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
