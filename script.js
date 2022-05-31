const button = document.querySelector('button');

const addLoad = () => {
  button.innerHTML = '<img src="./img/loading.gif" class="loading">'
}

const removeLoad = () => {
  button.innerHTML = 'Enviar'
}

const handleSubmit = (event) => {
  event.preventDefault();
  addLoad();

  const Name = document.querySelector('input[name=Name').value;
  const Email = document.querySelector('input[name=Email').value;
  const Date = document.querySelector('input[name=Date').value;
  const Campus = document.querySelector('input[name=Campus').value;
  const Periodo = document.getElementById('periodo').value;

  fetch('https://api.sheetmonkey.io/form/3AG2eoVzAZSA2SUhedsnX5', {
    
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Name, Email, Date, Campus, Periodo }),
  }).then(() => removeLoad());

  alert('Dados enviados com sucesso!');
}

document.querySelector('form').addEventListener('submit', handleSubmit)