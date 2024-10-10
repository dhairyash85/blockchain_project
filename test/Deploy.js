const { ethers } = require("hardhat");

async function main() {
  const SupplyChain = await ethers.getContractFactory("SupplyChain");
  const supplyChain = await SupplyChain.deploy();
  // await hospital.deployed();
  console.log(supplyChain)
  console.log("Hospital deployed to:", supplyChain.target);
}
main()
.then(()=>console.log("Successful")).catch(err=>console.log("errr  ",  err))