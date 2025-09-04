// SecretStore.test.js
// Simple test for SecretStore.sol using Hardhat framework

const { expect } = require("chai");

describe("SecretStore", function () {
  let SecretStore, secretStore, owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    SecretStore = await ethers.getContractFactory("SecretStore");
    secretStore = await SecretStore.deploy();
    await secretStore.waitForDeployment();
  });

  it("Should allow storing and retrieving a secret", async function () {
    await secretStore.connect(owner).storeSecret("mySecret");
    const storedSecret = await secretStore.getSecret(owner.address);
    expect(storedSecret).to.equal("mySecret");
  });
});
