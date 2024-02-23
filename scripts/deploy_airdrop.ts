import { ethers } from "hardhat";

async function main() {
 
  const lockedAmount = ethers.parseEther("0.001");


  const lock = await ethers.deployContract("Airdrop", ["0x97cF38bB06Da57b6418083998b09976eC40A90a3"], {
  });

  await lock.waitForDeployment();

  console.log(
   `contract deployed to ${lock.target}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

 