const button = document.querySelector('button');

const addLoad = () => {
  button.innerHTML = '<img src="./img/loading.gif" class="loading">'
}

const removeLoad = () => {
  button.innerHTML = 'Enviar'
}

const handleSubmit = (event) => {
  event.preventDefault();
  // addLoad();

  const Nome = document.querySelector('input[name=Name').value;
    if( Nome == '' || Nome == null) {
      return alert('Favor preencher o nome');
    }

  const Data = document.querySelector('input[name=Date').value;
    if( Data == '' || Data == null) {
      return alert('Favor informar a data');
    }

  const Campus = document.querySelectorAll('input[type="radio"]');
  if (Campus[0].checked == false && Campus[1].checked == false) {
    return alert('Por favor, selecione o Campus.');
  }

  const Periodo = document.getElementById('periodo').value;
    if( Periodo == '' || Periodo == null) {
      return alert('Favor selecionar o período');
    }

  fetch('https://api.sheetmonkey.io/form/3AG2eoVzAZSA2SUhedsnX5', {
    
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ Nome, Data, Campus, Periodo }),
  }).then(() => removeLoad());

  alert('Dados enviados com sucesso!');
}
  
document.querySelector('form').addEventListener('submit', handleSubmit)