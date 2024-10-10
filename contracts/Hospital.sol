// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

// Uncomment this line to use console.log
// import "hardhat/console.sol";

contract Hospital {
    enum Sex {
        Male,
        Female          
    }
    struct prescription{
        string medicine;
        uint prescId;
    }
    address owner=0xe0AE955311088A18BeB7c52e5844d3aF5B90d804;
    mapping (uint => prescription) prescriptions;
    mapping (uint => patient) numberOfPatient;
    mapping (address => patient) patients;
    struct patient{
        uint patientId;
        string name;
        Sex sex;
        uint age;
        string addr;
        uint[] prescid;
    }
    uint patientId=0;
    uint  presId=0;
    function addPatient(string memory _name, address _user, Sex _sex, uint _age, string memory _addr) public{
        require(msg.sender==owner,"Owner Only function");
        uint[] memory temp;
        patient memory _temp=  patient(patientId, _name, _sex, _age, _addr, temp);
        patients[_user]=_temp;
        numberOfPatient[patientId]=_temp;
        patientId++;
    }
    function addPrescription(string memory _name) public{
        require(msg.sender==owner,"Owner Only function");
        prescription memory _temp = prescription(_name, presId);
        prescriptions[presId]=_temp;
        presId++;
    }
    function assignPrescription(address _user, uint _presId) public{
        require(msg.sender==owner,"Owner Only function");
        uint[] storage temp=patients[_user].prescid;
        temp.push(_presId);
        patients[_user].prescid=temp;
    }
    function returnPatient(address _user) public view returns(patient memory){
        return patients[_user];
    }

    function returnAllPatients() public view returns(patient[] memory) {
    patient[] memory temp = new patient[](patientId);
    for(uint i = 0; i < patientId; i++) {
        temp[i] = numberOfPatient[i];
    }
    return temp;
}

}
