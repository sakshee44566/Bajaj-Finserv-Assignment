const axios = require('axios');

const BASE_URL = 'http://localhost:3000';

// Test data from the assignment examples
const testCases = [
  {
    name: "Example A",
    data: ["a", "1", "334", "4", "R", "$"]
  },
  {
    name: "Example B", 
    data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
  },
  {
    name: "Example C",
    data: ["A", "ABcD", "DOE"]
  }
];

async function testAPI() {
  console.log('🚀 Testing Bajaj Finserv API...\n');
  
  for (const testCase of testCases) {
    try {
      console.log(`📝 Testing ${testCase.name}:`);
      console.log(`Input: ${JSON.stringify(testCase.data)}`);
      
      const response = await axios.post(`${BASE_URL}/bfhl`, {
        data: testCase.data
      });
      
      console.log(`✅ Status: ${response.status}`);
      console.log(`Response: ${JSON.stringify(response.data, null, 2)}`);
      console.log('---\n');
      
    } catch (error) {
      console.log(`❌ Error in ${testCase.name}:`);
      if (error.response) {
        console.log(`Status: ${error.response.status}`);
        console.log(`Error: ${JSON.stringify(error.response.data, null, 2)}`);
      } else {
        console.log(`Error: ${error.message}`);
      }
      console.log('---\n');
    }
  }
}

// Test health endpoint
async function testHealth() {
  try {
    console.log('🏥 Testing Health Endpoint...');
    const response = await axios.get(`${BASE_URL}/health`);
    console.log(`✅ Health Status: ${response.status}`);
    console.log(`Response: ${JSON.stringify(response.data, null, 2)}`);
    console.log('---\n');
  } catch (error) {
    console.log('❌ Health check failed:', error.message);
  }
}

// Test root endpoint
async function testRoot() {
  try {
    console.log('🏠 Testing Root Endpoint...');
    const response = await axios.get(`${BASE_URL}/`);
    console.log(`✅ Root Status: ${response.status}`);
    console.log(`Response: ${JSON.stringify(response.data, null, 2)}`);
    console.log('---\n');
  } catch (error) {
    console.log('❌ Root endpoint failed:', error.message);
  }
}

// Run all tests
async function runAllTests() {
  try {
    await testHealth();
    await testRoot();
    await testAPI();
    console.log('🎉 All tests completed!');
  } catch (error) {
    console.log('💥 Test suite failed:', error.message);
  }
}

// Check if server is running before testing
async function checkServer() {
  try {
    await axios.get(`${BASE_URL}/health`);
    console.log('✅ Server is running, starting tests...\n');
    await runAllTests();
  } catch (error) {
    console.log('❌ Server is not running. Please start the server first:');
    console.log('   npm start');
    console.log('   or');
    console.log('   npm run dev');
  }
}

// Run the test suite
checkServer();
