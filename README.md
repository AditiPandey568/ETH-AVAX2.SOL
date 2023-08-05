# Smart Contract and Management


 It includes a frontend interface built with HTML, CSS, and JavaScript, and a smart contract written in Solidity.

## Description

The project consists of three main components:

1. *HTML*: The HTML file (`index.html`) sets up the structure of the web page. The user interface elements are positioned to provide a clear and intuitive user experience.

2. *JavaScript*: The JavaScript code is contained in the `index.js` file. It handles the interaction with the smart contract and user actions. It includes functions in the HTML file.

3. *Solidity*: The Solidity code is implemented . It defines the smart contract.

## Getting Started

### Prerequisites
- MetaMask browser extension
  
### Executing Program
To run the solidity code, you can use Remix, an online Solidity IDE. To get started, go to the Remix website at https://remix.ethereum.org/.

Steps to interact with the contract using Remix:

1. Open the contract file in Remix IDE.
2. Select the appropriate compiler version.
3. Compile the contract.
4. Click on the "Deploy & Run Transactions" tab in the Remix editor. From the "Environment" dropdown, select the desired development       
   environment (Injected Web3).
5. Ensure that you have the contract deployed
6. Provide the correct contract address in the frontend code `(<Your Contract Address>)`
   
   
   const createContractInstance = () => {
      const contractAddress = '<Your Contract Address>'; //write deployed contract address
      const contract = new web3.eth.Contract(contractABI, contractAddress);
      return contract;
    };
   


### Installation
1. Clone the repository or download the source code files.
shell
git clone https://github.com/your-code address

2. Open the project directory in a code editor.

3. Open `index.html` in a web browser.


## Author 
Aditi Pandey

## License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).
