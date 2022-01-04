/**
 * ATIVIDADE 1 - MAPS
 * Criar uma função que retorne os nomes dos membros de um Map com papel de ADMIN.
 * A função deve ter o nome getAdmins()
 * Deve receber como parâmetro um objeto Map
 * A função deve retornar uma lista de usuários com papel "ADMIN"
 */
function getAdmins(lista){
    // lista de valores únicos
    let listaAdmins = new Set();

    for(let [chave, valor] of lista){
        if(valor == "ADMIN".toLowerCase()){
            listaAdmins.add(chave);
        }
    }

    return listaAdmins;
}

// criação da lista de valores usando objeto Map()
let listaUsuarios = new Map();
listaUsuarios.set("loliveira","user");
listaUsuarios.set("lsondermann","admin");
listaUsuarios.set("gsondermann","user");
listaUsuarios.set("apacheco","user");
listaUsuarios.set("calmeida","admin");
listaUsuarios.set("asondermann","admin");
listaUsuarios.set("btenorio","user");

// debugging do conteúdo da variável
console.log(listaUsuarios);

// chamada da função e mostrando o resultado do processamento
console.log(getAdmins(listaUsuarios));


/**
 * ATIVIDADE 2 - SETS
 * A partir do array abaixo, criar um array de valores únicos usando o objeto Set()
 * [30,30,40,5,223,2049,3034,5]
 */

// declarando a função...
function getUniqueValues(vlista){
    let total = vlista.length;
    let vnovalista = new Set();
    
    for(let i = 0; i < total; i++){
        vnovalista.add(vlista[i]);
    }

    return vnovalista;
}

// invocando ("testando") a função...
let dados = [30,30,40,5,223,2049,3034,5];
let res = getUniqueValues(dados);
console.log(res);