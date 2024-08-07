
const prompt= require("prompt-sync")()
const residencias=[]
let ultimoId = 0;


function getIndice(id) {
  const indice = residencias.findIndex((el) => el.id == id);

  if (indice == -1) {
    console.log("ID inexistente");
  }
  return indice;
}


const modelo =( id = ++ultimoId) => {
    const bairro = prompt(" qual o bairro? ")
    const rua = prompt("Qual é a rua da residencia? ")
    const numero = +prompt("Qual é o numero? ")


    const moradores=[]
    while(true){
        const nome = prompt("Qual o nome do morador? Ou digite 0 para sair ")
        if (nome ==0) {
            break;
        } else{
            moradores.push(nome)
        }
    }
if (bairro!== "" &&
    rua!=="" &&
    !isNaN(numero) &&
    moradores!==""){
    
   return {
    bairro,
    rua,
    numero,
    moradores,
    id
   }}else{
    console.log("dados invalidos")
   }
}

const criar=()=>{
const residencia= modelo()
if (residencia!==undefined) {
residencias.push(residencia) 
console.log("residencia cadastrada com sucesso!")
}
}

const listar = () => {
    if (residencias.length === 0) {
        console.log("nenhuma residencia cadastrada.")
    }
    residencias.forEach((residencia) => {
    console.log(`${residencia.id}. Bairro: ${residencia.bairro}, Rua: ${residencia.rua}, Número: ${residencia.numero}`
    );

    residencia.moradores.forEach((morador, indice) => {
        console.log(`Morador ${indice}: ${morador}`);
    });
    })
}

const atualizar = () => {
    listar();

    const id = +prompt("Digite o ID: ");

    const indice = getIndice(id);

    if (indice != -1) {
      const novo = modelo(id);

      if (novo) {
        residencias[indice] = novo;
        console.log("Atualizado com sucesso");
      }
    }
}



const remover =()=>{
    listar()
const id = +prompt("Digite o ID: ");
        
const indice = getIndice(id);
            
 if(indice != -1) {
residencias.splice(indice, 1);
console.log("Removido com sucesso");
}

}
        


module.exports={
    criar,
    listar,
    atualizar,
    remover
}


