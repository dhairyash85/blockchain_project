import React, { useState, useEffect } from 'react';
import {  contractAbi, contractAddress } from './Constants';
import { ethers } from 'ethers';

 // Replace with your contract address

const SupplyChainApp = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const [loading, setLoading] = useState(false);

  // Initialize the provider and contract
  const loadBlockchainData = async () => {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(contractAddress, contractAbi, signer);
      return contract;
    } else {
      alert('Please install MetaMask!');
    }
  };

  // Fetch all items from the contract
  const fetchItems = async () => {
    const contract = await loadBlockchainData();
    const itemsList = await contract.getAllItems();
    setItems(itemsList);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  // Add an item to the contract
  const addItem = async (e) => {
    e.preventDefault();
    if (name === '' || quantity === '') {
      alert('Please fill in both fields');
      return;
    }
    setLoading(true);
    const contract = await loadBlockchainData();
    const txn = await contract.addItem(name, quantity);
    await txn.wait();
    fetchItems();
    setName('');
    setQuantity('');
    setLoading(false);
  };

  // Remove an item by ID
  const removeItem = async (id) => {
    setLoading(true);
    const contract = await loadBlockchainData();
    const txn = await contract.removeItem(id);
    await txn.wait();
    fetchItems();
    setLoading(false);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Supply Chain Management</h1>

      <form onSubmit={addItem} className="mb-6">
        <div className="flex items-center gap-4 mb-4">
          <input
            type="text"
            className="border p-2 rounded w-full"
            placeholder="Item Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            className="border p-2 rounded w-full"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded"
            disabled={loading}
          >
            {loading ? 'Adding...' : 'Add Item'}
          </button>
        </div>
      </form>

      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">Name</th>
            <th className="border p-2">Quantity</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.length === 0 ? (
            <tr>
              <td colSpan="4" className="text-center p-4">
                No items found.
              </td>
            </tr>
          ) : (
            items.map((item, index) => (
              <tr key={index}>
                <td className="border p-2">{item.id.toString()}</td>
                <td className="border p-2">{item.name}</td>
                <td className="border p-2">{item.quantity.toString()}</td>
                <td className="border p-2">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="bg-red-500 text-white p-2 rounded"
                    disabled={loading}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default SupplyChainApp;
