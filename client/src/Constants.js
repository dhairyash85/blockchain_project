export const abi=[
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "enum Hospital.Sex",
          "name": "_sex",
          "type": "uint8"
        },
        {
          "internalType": "uint256",
          "name": "_age",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_addr",
          "type": "string"
        }
      ],
      "name": "addPatient",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        }
      ],
      "name": "addPrescription",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "_presId",
          "type": "uint256"
        }
      ],
      "name": "assignPrescription",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "returnAllPatients",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "patientId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "enum Hospital.Sex",
              "name": "sex",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "age",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "addr",
              "type": "string"
            },
            {
              "internalType": "uint256[]",
              "name": "prescid",
              "type": "uint256[]"
            }
          ],
          "internalType": "struct Hospital.patient[]",
          "name": "",
          "type": "tuple[]"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_user",
          "type": "address"
        }
      ],
      "name": "returnPatient",
      "outputs": [
        {
          "components": [
            {
              "internalType": "uint256",
              "name": "patientId",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "name",
              "type": "string"
            },
            {
              "internalType": "enum Hospital.Sex",
              "name": "sex",
              "type": "uint8"
            },
            {
              "internalType": "uint256",
              "name": "age",
              "type": "uint256"
            },
            {
              "internalType": "string",
              "name": "addr",
              "type": "string"
            },
            {
              "internalType": "uint256[]",
              "name": "prescid",
              "type": "uint256[]"
            }
          ],
          "internalType": "struct Hospital.patient",
          "name": "",
          "type": "tuple"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    }
  ]


export const address="0xf9bA07BDa49A2DaC8cab4A2b9c1bBceE1A2Ba9fA"