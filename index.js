const contractAddress = "CONTRACT_ADDRESS"; // Replace with your contract address
const contractABI = []; // Replace with your contract's ABI

const contract = new ethers.Contract(contractAddress, contractABI, ethers.provider);

async function setValue() {
    const newValue = document.getElementById("newValue").value;
    const transaction = await contract.setValue(newValue);
    await transaction.wait();
    await updateValue();
}

async function updateValue() {
    const currentValue = await contract.getValue();
    document.getElementById("currentValue").innerText = currentValue.toString();
}

document.addEventListener("DOMContentLoaded", () => {
    updateValue();
});
