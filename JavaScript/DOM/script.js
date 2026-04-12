let table = document.getElementById('table')

let tbody = document.createElement('tbody')
table.appendChild(tbody)

let api = 'https://api.escuelajs.co/api/v1/products'
let products = [] // Store fetched products globally

// Fetch and display products
async function fetchData() {
  try {
    let response = await fetch(api)
    products = await response.json() // Store products globally
    console.log(products)

    displayProducts(products) // Display all products initially
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

function displayProducts(data) {
  tbody.innerHTML = ''

  data.forEach((product) => {
    let tr = document.createElement('tr')

    tr.innerHTML = `
      <td>${product.id}</td>
      <td>${product.title}</td>
      <td>${product.price}</td>
      <td>${product.slug}</td>
      <td>${product.description}</td>
    `

    tbody.appendChild(tr)
  })
}

function searchProductById() {
  let searchInput = document.getElementById('searchInput').value
  let productId = parseInt(searchInput, 10)

  if (!isNaN(productId)) {
    let product = products.find((p) => p.id === productId)

    if (product) {
      displayProducts([product])
    } else {
      alert('Product not found!')
    }
  } else {
    alert('Please enter a valid product ID!')
  }
}

function resetTable() {
  displayProducts(products)
}

document
  .getElementById('searchBtn')
  .addEventListener('click', searchProductById)
document.getElementById('resetBtn').addEventListener('click', resetTable)

fetchData()
