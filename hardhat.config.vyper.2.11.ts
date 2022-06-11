import { config as dotEnvConfig } from "dotenv";
dotEnvConfig();

import "@nomiclabs/hardhat-vyper";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "@nomiclabs/hardhat-ethers";
import "hardhat-deploy";

module.exports = {
  defaultNetwork: "testnet",
  networks: {
    
    testnet: {
      url: "https://speedy-nodes-nyc.moralis.io/641e50ba92ced2bb978bf93d/bsc/testnet",
      accounts: [process.env.BSC_TESTNET_PRIVATE_KEY],
    },
   
  },

  solidity: {
    version: "0.6.6",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1,
      },
      evmVersion: "istanbul",
      outputSelection: {
        "*": {
          "": ["ast"],
          "*": [
            "evm.bytecode.object",
            "evm.deployedBytecode.object",
            "abi",
            "evm.bytecode.sourceMap",
            "evm.deployedBytecode.sourceMap",
            "metadata",
          ],
        },
      },
    },
  },
  vyper: {
    version: "0.2.11",
  },
  paths: {
    sources: "./solidity/contracts/vyper/2.11",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  typechain: {
    outDir: "./typechain",
    target: process.env.TYPECHAIN_TARGET || "ethers-v5",
  },
  mocha: {
    timeout: 50000,
  },
};
