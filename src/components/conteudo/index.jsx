import Styles from './conteudo.module.css'

function Conteudo() {
    function primaryRequest() {
        const valores= fetch('https://opentdb.com/api.php?amount=30&category=15').then(valor=>
        valor.json().then(filtrar=>{
            console.log(filtrar.data)
            var btn=document.querySelector('#category')
            btn.addEventListener('click',()=>{
                    var categoria = document.querySelector('#category')
                    categoria.innerHTML = ${data.Conteudo}
                    resposta()
            })
        function resposta() {
            fetch('https://opentdb.com/api.php?amount=30&category=15').then(resposta => resposta.json().then(data=>{
                var correto = document.querySelector("correct_answer")
                correto.innerHTML = ${data.Conteudo}
            }))
        }
        }))
return(
primaryRequest()
)
}}