/* eslint-disable no-unused-vars */
/* eslint-disable no-var */
export default function handleResponseFromAPI(promise) {
  return new Promise((resolve, reject) => {
    resolve({ status: 200, body: 'Success' });
  })
    .then((data) => {
      console.log('Got a response from the API');
    })
    .catch((error) => {
      console.log(error);
    });
}
