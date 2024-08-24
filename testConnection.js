require('dotenv').config();
const { ethers } = require('ethers');

// Configuración para la red de pruebas Fuji
const providerUrl = 'https://api.avax-test.network/ext/bc/C/rpc';
const provider = new ethers.JsonRpcProvider(providerUrl);

async function testConnection() {
  try {
    // Verificar la conexión con un simple `eth_blockNumber`
    const blockNumber = await provider.getBlockNumber();
    console.log("Conectado a Avalanche Fuji. Número de bloque actual:", blockNumber);

    // Ejemplo adicional: obtener información de un bloque específico
    const block = await provider.getBlock(blockNumber);
    console.log("Información del bloque:", block);

  } catch (error) {
    console.error("Error conectando a Avalanche:", error);
  }
}

testConnection();
