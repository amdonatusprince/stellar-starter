// ------------------------- TODOS (1)  ---------------------------
/* Install and import dependencies */



// Explain testnet and Mainnet
// Explain why we use tokens in the blockchain


// Simple function to fund an address with fake XLM token for testing
async function fundAccountWithFriendbot(address) {
  // Set up the Friendbot URL endpoint
  const friendbotUrl = `https://friendbot.stellar.org?addr=${address}`;
  try {
    let response = await fetch(friendbotUrl);
    if (response.ok) {
      console.log(`Account ${address} successfully funded.`);
      return true;
    } else {
      console.log(`Something went wrong funding account: ${address}.`);
      return false;
    }
  } catch (error) {
    console.error(`Error funding account ${address}:`, error);
    return false;
  }
}


// ------------------------- TODOS (2)  ---------------------------
/* Generate Keypair for liquidity pool and trader */


// ------------------------- TODOS (3)  ---------------------------
/* Send test XLM token from testnet faucet to address */


// ------------------------- TODOS (4)  ---------------------------
// Set up the Stellar testnet server and account


// ------------------------- TODOS (5)  ---------------------------
// Create your Asset 


// ------------------------- TODOS (6)  ---------------------------
// Define the LiquidityPoolAsset 


// ------------------------- TODOS (7)  ---------------------------
// Get the LP ID


// ------------------------- TODOS (8)  ---------------------------
// Build Transaction to create liquidity pool on the Stellar network
// Create a trustline for the liquidity pool shares
// Make an initial deposit into the liquidity pool
// Sign and Submit transaction to the Stellar network
 


// ------------------------- TODOS (9)  ---------------------------
// Initiate transaction on the Liquidty Pool
// Trade some amount of XLM for some amount of EkoLance
    // Generate a trader account
    // Build, sign, and submit this transaction.


// ------------------------- TODOS (10)  ---------------------------
// Withdrawing funds from the Liquidity Pool
  // Build, sign, and submit this transaction.
