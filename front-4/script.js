// criando variavel 
const nome = document.getElementById("nome");

const cidade = document.getElementById("cidade");

const resultado =  document.getElementById("resultado");

const resultadoCid = document.getElementById("resultadoCid");

// criando funcao
function limparCampos(){
    // limpando campos
   nome.value = "";
   cidade.value = "";

}
function mudar(event) {
   event.preventDefault();
   

   // imprimir nome na tela
   resultado.innerHTML = nome.value;
   resultadoCid.innerHTML = cidade.value;

   // limpar campos
   limparCampos();


}

