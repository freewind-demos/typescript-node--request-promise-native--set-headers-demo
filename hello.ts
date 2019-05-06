import request from 'request-promise-native';

async function run() {
  const response = await request("https://postman-echo.com/get?hello=request", {
    headers: {
      "myheader": "header1"
    }
  });
  console.log(typeof response)
  console.log(response)
}

run();

