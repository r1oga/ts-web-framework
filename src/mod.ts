const API_URL = 'http://localhost:8000/'
;(async () => {
  await fetch(`${API_URL}users`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: 'r1oga',
      age: 50
    })
  })
  const response = await fetch(API_URL)
  const data = await response.json()
  console.log(data)
})()
// http://localhost:8000/
