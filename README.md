# Alpaca Contract

## Local Development
The following assumes the use of `node@>=14`.  
### Install Dependencies
 1. Copy `.env.example` file and change its name to `.env` in the project folder
 2. Run `yarn` to install all dependencies
### Compile Contracts
`yarn compile`

Note: There will be a new folder called `typechain` generated in your project workspace. You will need to navigate to `typechain/index.ts` and delete duplicated lines inside this file in order to proceed.
### Run Tests with hardhat
`yarn test`

## Testing with Forge
### Install Forge

### Test
```
$ forge test
```

## Contracts

 debtibWBNB <br/>
>> Deployed at 0xdD34FC0AB5390AEfa550dCf28CFd8a82B6A05762 <br/>
 upgradable Vault contract for LINK-WBNB <br/>
>> Deployed at 0x9CF76779f81f0138ceff00cf39467CF8046De50B <br/>

Vault-config <br/>
upgradable configurableInterestVaultConfig contract <br/>
Deployed at 0x70A8994C904334B955136fBB6eb0a88CeCC1869e <br/>

AutomatedController <br/>
upgradable AutomatedVaultController <br/>
>> Deployed at 0x142CbA43190e25Eaecb004e0ab1C51BCDA2d7390 <br/>
>> Deployed block: 20098702 <br/>
>> SET AVController to file > 0x142CbA43190e25Eaecb004e0ab1C51BCDA2d7390 <br/>

