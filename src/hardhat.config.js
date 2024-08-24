require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.18",
  networks: {
    fuji: { // Red de pruebas de Avalanche
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATE_KEY]
    },
    avalanche: { // Red principal de Avalanche
      url: "https://api.avax.network/ext/bc/C/rpc",
      accounts: [process.env.PRIVATE_KEY]
    }
  }
};
