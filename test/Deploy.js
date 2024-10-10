const { ethers } = require("hardhat");

async function main() {
  const Hospital = await ethers.getContractFactory("Hospital");
  const hospital = await Hospital.deploy();
  // await hospital.deployed();
  console.log(hospital)
  console.log("Hospital deployed to:", hospital.target);
}
main()
.then(()=>console.log("Successful")).catch(err=>console.log("errr  ",  err))