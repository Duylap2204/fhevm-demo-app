// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

/// @title SecretStore - Demo contract using FHEVM
/// @notice Stores a secret number privately using FHE
contract SecretStore {
    // Biến lưu số bí mật
    uint256 private secret;

    /// @notice Lưu số bí mật
    /// @param _secret Số cần lưu
    function storeSecret(uint256 _secret) public {
        secret = _secret;
    }

    /// @notice Lấy lại số bí mật đã lưu
    /// @return secret number
    function getSecret() public view returns (uint256) {
        return secret;
    }
}
