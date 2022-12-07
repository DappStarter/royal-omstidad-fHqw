require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success street repeat soccer minor good arctic army gasp'; 
let testAccounts = [
"0x7e45ed619258250323e9fabbde84512b44175e31193d0bd63ee5fd93c12cca03",
"0xa43217f7a13503f565178244152ed0aafed410f8c4b214e5920e498455504b59",
"0x741189b2e1733a1c9fbf4acc29425b8e156c7ce303b8c387c340f6b86b2f0f82",
"0xe6509b8410cc7c99bc29c7cdb5b8f87509130408a33cd384b212b1f2aaa581cc",
"0xb98773732fd4fc8d826441ac756853dd9f4fcee2a643717b12fe490fed344da8",
"0xfa5f6bc10a77ec51cba4a9622c73286d539e8dc60158a4c477ba69576fedfd41",
"0x34a7bf30bea970966276e8a6df6e6585c4e87b383cf191fe3b24a81839b7777c",
"0xe7499b9a698decc8afb007c641e41a64b1666ebae6c04bed80a786649853c8f0",
"0x34f51ab70103166f2a3775529a8ebaa81e7346453aea3722002bc2ac9b870e07",
"0xc49cdcb44772df729bf3a7754ec2fd3b8b3323113af55afde0fb0437e5fcbaf3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

