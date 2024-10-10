
// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract SupplyChain {
    struct Item {
        uint256 id;
        string name;
        uint256 quantity;
    }

    Item[] public items;
    uint256 public nextItemId;

    
    event ItemAdded(uint256 id, string name, uint256 quantity);

    
    event ItemRemoved(uint256 id);

    
    function addItem(string memory _name, uint256 _quantity) public {
        items.push(Item(nextItemId, _name, _quantity));
        emit ItemAdded(nextItemId, _name, _quantity);
        nextItemId++;
    }

    
    function removeItem(uint256 _id) public {
        require(_id < items.length, "Item does not exist");

        
        for (uint256 i = _id; i < items.length - 1; i++) {
            items[i] = items[i + 1];
        }

        items.pop();  
        emit ItemRemoved(_id);
    }

    
    function getAllItems() public view returns (Item[] memory) {
        return items;
    }

    
    function getItem(uint256 _id) public view returns (Item memory) {
        require(_id < items.length, "Item does not exist");
        return items[_id];
    }
}
