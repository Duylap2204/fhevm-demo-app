// app.js
async function connectWallet() {
  if (window.ethereum) {
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    alert("Connected: " + accounts[0]);
  } else {
    alert("MetaMask not detected!");
  }
}
