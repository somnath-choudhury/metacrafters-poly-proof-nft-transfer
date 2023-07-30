# metacrafters-poly-proof-nft-transfer
# Transferring NFTs from Goerli to Mumbai Testnet

This project is part of the Polygon Proof: Proof of Stake  by Metacrafters

In this project, we had to create a ERC721 contract to mint and transfer NFTs from Goerli to Mumbai testnet. We have used an AI Image generation tool that is pinata.cloud to generate 5 images which will be used as NFTs.
&nbsp;


The images has beed stored on an IPFS, which provides a unique ID called CID for each document. Storing images on an IPFS is more efficient and cost effective as it uses less gas fee.
&nbsp;
&nbsp;

### Project Setup

- Run `npm i` to install all the packages
- Create a .env file to store the private key as `PRIVATE_KEY` and the contract address as `CONTRACT_ADDR`


### Contract Deployment

 - Run `npx hardhat compile` to compile the solidity files.
 - Deploy the contract using the following command 
   &nbsp;
   
   `npx hardhat run scripts/deploy.js --network goerli`.
 - Copy and paste the contract address in the .env file
 - Run `npx hardhat run scripts/batchMint.js --network goerli` to mint all the NFTs in a single transaction.
 - Approve and transfer the NFTs using the following command
    &nbsp;

   `npx hardhat run scripts/approveDeposit.js --network goerli`

&nbsp;

### Walkthrough Video

Part 1: https://www.loom.com/share/9980501d22094b08925ee3547ce9aee2?sid=1ce37ab9-dfc0-4a52-bcec-585591be5952
&nbsp;

Part 2: https://www.loom.com/share/742b7f4bb1ed42e9bb1d6b6e80aeaf4b?sid=fc868e46-ef5c-48f1-a42b-c0c56ce2d033
