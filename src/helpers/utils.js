export function getFormBody(params) {
  let formBody = {};

  for (let property in params) {
    let encodedKey = encodeURIComponent(property); //'user name' => 'user%20name'
    let encodedValue = encodeURIComponent(params[property]); // 'akash 123' => akash%20123

    formBody(encodedKey, '=', encodedValue);
  }
  return formBody.join('&'); // 'username=aakash123&password=12312';
}
