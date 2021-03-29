const moment = require('moment');
const fs = require('fs');
const nomePetshop = "PETSHOP AVANADE";
let bancoDeDados = fs.readFileSync("./bancoDeDados.json");

bancoDeDados = JSON.parse(bancoDeDados);

const atualizarBanco = () => {
    //conversão de objeto javascript para JSON
    let petsAtualizado = JSON.stringify(bancoDeDados);
    //atualização do arquivo bancoDeDados.json
    fs.writeFileSync('bancoDeDados.json', petsAtualizado, 'utf-8'); // 3 parâmetro: (arquivo, conteúdo, formato)
}

const listarPets = () => {
    /* for(let i = 0; i < pets.length; i++){
        console.log(pets[i].nome + " " + pets[i].raca);
        console.log(`O nome do pet é ${pets[i].nome}`);
    }*/
    for(let pet of bancoDeDados.pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
        
        for(const servico of pet.servicos) {
            console.log(`${servico.data} - ${servico.nome}`);
        }  
        pet.vacinado ? console.log('vacinado') : console.log('não vacinado');      
    }

}

const vacinarPet = (pet) => {
    if (pet.vacinado == true) {
        console.log(`Ops, ${pet.nome} já está vacinado!`);
    } else {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso!`);
    }
}

const campanhaVacina = () => {
    numPets = 0;
    for(let pet of bancoDeDados.pets) {
        if (pet.vacinado === false) {
            vacinarPet(pet);//pet.vacinado = true;
            numPets++;
        }
    }
    console.log(`${numPets} pets foram vacinados nessa campanha!`);
}

const adicionarPet = novoPet => {
    bancoDeDados.pets.push(novoPet);
    atualizarBanco();
    console.log(`${novoPet.nome} foi adicionado com sucesso!`);
}

const darBanhoPet = (pet) => {
    pet.servicos.push({
        'nome': 'banho',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de banho tomado`)
}

const tosarPet = (pet) => {
    pet.servicos.push({
        'nome': 'tosa',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está com cabelinho na régua`)
}

const apararUnhasPet = (pet) => {
    pet.servicos.push({
        'nome': 'cortar unhas',
        'data': moment().format('DD-MM-YYYY')
    });
    console.log(`${pet.nome} está de unhas aparadas!`)
}

const atenderCliente = (pet, servico) => {
    console.log(`Bem vinde, ${pet.nome}!`);
    servico(pet);
    atualizarBanco();
    console.log('Tchau!');
}

//adicionarPet('garfield', 'cachoro', 1, 'pastor alemão', 15, 'marina', '81 9876-1234', true, []);
darBanhoPet(bancoDeDados.pets[0]);
tosarPet(bancoDeDados.pets[1]);
apararUnhasPet(bancoDeDados.pets[2]);
//console.log(pets);
// campanhaVacina();
console.log('------------');
listarPets();
// vacinarPet(pets[2]);
// adicionarPet({
//     "nome": "Goose",
//     "tipo": "gato",
//     "idade": 2,
//     "raca": "SRD",
//     "peso": 1,
//     "tutor": "Carol Denvers",
//     "contato": "(33) 91111-1111",
//     "vacinado": true,
//     "servicos": []
// });
atenderCliente(bancoDeDados.pets[0], darBanhoPet);

