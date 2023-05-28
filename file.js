const btn = document.getElementById ("btn");


document.getElementById ("btn").addEventListener ('click', convert);

function convert (){
  const amount = document.getElementById ("amount").value;
  const input = document.getElementById ("input").value;
  const output = document.getElementById ("output").value;
  
  let apiUrl = `https://api.exchangerate-api.com/v4/latest/${input}`;
  
  fetch(apiUrl).then (response => response.json ())
  .then (data => {
    const rate = data.rates[output];
    const result = amount * rate;
    document.getElementById ('result').innerHTML = `Result is ${result}`;
  })
}

