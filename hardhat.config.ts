import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from 'dotenv';

dotenv.config()


const { API_URL, API_KOVAN_URL, API_RINKEBY_URL, PRIVATE_KEY, PRIVATE_KEY_DEV, API_MUMBAI_URL, API_POLYGON_URL, POLYGONSCAN_API_KEY, ETHERSCAN_API_KEY, API_GOERLI_URL} = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.20",
    settings: {
       optimizer: {
          enabled: true,
          runs: 200
       },
    },
  },  defaultNetwork: "hardhat",
    networks: {
       hardhat: {},
       rinkeby: {
          url: API_RINKEBY_URL,
          accounts: [`0x${PRIVATE_KEY_DEV}`]
       },
       kovan: {
        url: API_KOVAN_URL,
        accounts: [`0x${PRIVATE_KEY_DEV}`]
      },
      goerli: {
        url: API_GOERLI_URL,
        accounts: [`0x${PRIVATE_KEY_DEV}`]
      },
       mainnet: {
         url: API_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
       mumbai: {
          url: API_MUMBAI_URL,
          accounts: [`0x${PRIVATE_KEY_DEV}`]
       },
       polygon: {
         url: API_POLYGON_URL,
         accounts: [`0x${PRIVATE_KEY_DEV}`]
       }
    },
    etherscan: {
       apiKey: ETHERSCAN_API_KEY
    },
};

export default config;
