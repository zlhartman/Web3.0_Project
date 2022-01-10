// https://eth-ropsten.alchemyapi.io/v2/iXZNVEj7rFIvibMb-Co1vxu0vLWZddpe

require('@nomiclabs/hardhat-waffle')

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/iXZNVEj7rFIvibMb-Co1vxu0vLWZddpe',
      accounts: [ '9b979e85ffa5df914b8ba89678c62c5ce0fa947a923d97e9c4684565d7f0721f' ]
    }
  }
}