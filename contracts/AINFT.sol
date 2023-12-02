// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract AINFT is ERC1155, Ownable {
    uint256 public constant LOGO = 0;

    // URI for token metadata
    constructor() ERC1155("https://alefinvest.xyz/nft/logo/{id}") Ownable() {
        // Mint 1000 tokens of ID 0 and assign them to the contract owner
        _mint(msg.sender, LOGO, 1000, "");
    }

    // Function to mint more tokens, restricted to the contract owner
    function mint(address account, uint256 id, uint256 amount) external onlyOwner {
        _mint(account, id, amount, "");
    }

    // Function to update the URI, restricted to the contract owner
    function setURI(string memory newURI) external onlyOwner {
        _setURI(newURI);
    }
}