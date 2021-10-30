require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note spike prosper install cricket slot ghost'; 
let testAccounts = [
"0x6408587964235234d590ae834ae0bc4de67238c3defbb5cc66132dfaf313bee5",
"0x90900ee10b3a48fbc23e1d876c42637a5d1ea4c2e003ca712401516348ec796a",
"0x36125e5c44fc793ed88cc00ba2b08f629db7e5edeb6770f8eb79efb38327a65f",
"0xd6de86f49909dd9d62d77643592b08261905bcd7c3894d7a7fceec386e14c390",
"0x388161c40e3558a74a069876fc7621dfe4eca6a9ffa64cae01a8deb33ab06f75",
"0xf1b086d872da7d8fab3e3921b8e42f367a479cc59f533561e499a32e1168475f",
"0x3d6680b6a19f401fc12ccfb22cdfd8f3b848a2187bf2bb5596df52a5437d1568",
"0x3dcad0d814c90564e6ac3c10413a309f3512dc45ae6725b7f035969ebdbd0ab5",
"0xd62d84e59f53db0f37fdc44628f9e62107ffe787778993cc85005859b176d38b",
"0xa53c08c202ee23178889faf5017fd78417b1eb0a90461f292ac20c32ac8dd295"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

