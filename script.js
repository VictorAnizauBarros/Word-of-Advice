const btnAdviceButton = document.querySelector('#getAdviceButton');
const adviceElement = document.querySelector('#advice'); 
const loadingElement = document.querySelector('#loading');
const url = 'https://api.adviceslip.com/advice';


btnAdviceButton.addEventListener('click',()=>{
        loadingElement.style.display = 'block';
        adviceElement.textContent = ''; 

    axios.get(url)
    .then(response => {
        const adviceText = response.data.slip.advice;
        adviceElement.textContent = adviceText;
        })
    .catch(error=>{
        console.error('Erro ao buscar conselho:', error);
    })
    .finally(() => {
        loadingElement.style.display = 'none';
    })


});