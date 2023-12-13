export async function postData(url,{username, email, password}) {
    const response = await fetch(url, {
      // method: 'GET',
      // body: JSON.stringify({ username, email, password }),
    })
    .then((res) => res.json())
    .then(data => console.log(data))
    .catch (error => console.log(error)); 
}