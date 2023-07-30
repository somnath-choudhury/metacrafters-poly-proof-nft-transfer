const { ethers } = require("hardhat");
const fxRootContractABI = require("../fxRootContractABI.json");
require('dotenv').config();

async function main() {
  try {
    const networkAddress = 'https://ethereum-goerli.publicnode.com'; // Goerli network RPC URL
    const privateKey = process.env.PRIVATE_KEY;
    const provider = new ethers.providers.JsonRpcProvider(networkAddress);

    const walletAddress = '0x7cab39e4d5209CbFc006544055B063009BD3d68a';
    const wallet = new ethers.Wallet(privateKey, provider);

    const signer = wallet.connect(provider);
    
    // Get the contract instance
    const somContractNFT = process.env.CONTRACT_ADDR;
    const NFT = await ethers.getContractFactory("SomContract");
    const nft = NFT.attach(somContractNFT)

    // Get the FxPortalBridge contract
    const fxPortalBridgeAddress = '0xF9bc4a80464E48369303196645e876c8C7D972de';
    const fxPortalBridge = await hre.ethers.getContractAt(fxRootContractABI, fxPortalBridgeAddress);

    await nft.connect(signer).setApprovalForAll(fxPortalBridgeAddress, true);
    console.log(`NFTs are ready and approved for transfer.`);

    for (let i = 0; i < 5; i++) {
      const data = "NFT Deposit";
      const gasPrice = ethers.utils.parseUnits("50", "gwei");
      const depositTx = await fxPortalBridge.connect(signer).deposit(somContractNFT, walletAddress, i, "0x6550",{ gasPrice });
      await depositTx.wait();
      console.log(`Token: ${i} deposited`);
    }
    
    console.log("NFTs deposited to the mumbai network for transfer.");
  } catch (error) {
    console.error(error);
  }
}
main();
