# Datamorphic

We define a new protocol for NFTs so it allows dynamic information.

When you feed the right decryption key, you can see hidden an updated NFT with hidden information. It makes an addition to OpenSea's metadata standard. 

## Encrypting files

openssl enc -aes-256-cbc -in FILENAME.png -pass pass:"password" | base64 | tr -d '\n' > pup.enc

## We minted one NFT as proof of concept:

The ERC-721 smart contract is minted on Rinkeby testnet: https://rinkeby.etherscan.io/address/0x7876c6581a909ff33522f739f918543f791b911d

The NFT is visible on OpenSea's testnet: https://testnets.opensea.io/assets/rinkeby/0x7876c6581a909ff33522f739f918543f791b911d/0

## Minimalistic interface

This allows us to display the NFT. It requires to manualy enter the NFT URI, instead of connecting to the contract and calling the function directly.

The interface is hosted on replit: https://datamorphic.ben132333.repl.co/

To test it out, you can enter 
- URI: https://ipfs.filebase.io/ipfs/QmTKQhL6bap8hfJASKkJkzmNgDRSExWcJhBThYdePG4QTb
- Description Key: meta

