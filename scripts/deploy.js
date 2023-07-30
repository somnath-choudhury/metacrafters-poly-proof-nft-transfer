const { ethers } = require("hardhat");
const fs = require('fs');

async function main() {
  const somContractNFT = await ethers.getContractFactory("SomContract");
  const nft = await somContractNFT.deploy();
  await nft.deployed();

  console.log("NFT and contract deployed to:", nft.address);

  fs.writeFileSync('metadata/contractAddress.js', `export const nftAddress = "${nft.address}" `);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
