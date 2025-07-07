// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

contract SwiftCryptoBridge {
    address public admin;

    struct Transaction {
        string swiftReference;
        address beneficiary;
        uint256 amount;
        bool completed;
    }

    mapping(string => Transaction) public transactions;

    event ConversionInitiated(string swiftRef, address beneficiary, uint256 amount);
    event ConversionCompleted(string swiftRef);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Unauthorized");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function processConversion(
        string memory swiftRef,
        address beneficiary,
        uint256 amount
    ) public onlyAdmin {
        transactions[swiftRef] = Transaction({
            swiftReference: swiftRef,
            beneficiary: beneficiary,
            amount: amount,
            completed: false
        });

        emit ConversionInitiated(swiftRef, beneficiary, amount);
    }

    function markCompleted(string memory swiftRef) public onlyAdmin {
        require(!transactions[swiftRef].completed, "Already done");
        transactions[swiftRef].completed = true;
        emit ConversionCompleted(swiftRef);
    }
}

