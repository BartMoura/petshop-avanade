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

    bancoDados.pets.forEach((pet) => {

        console.log(`${pet.nome}, ${pet.idade} anos, ${pet.tipo}, ${pet.raca}, ${(pet.vacinado) ? 'vacinado': 'não vacinado'}`);
    
        pet.servicos.forEach((servico) => {
            console.log(`${servico.data} - ${servico.nome}`);
        })
    })
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
    console.log("Campanha de vacina 2021");
    console.log("vacinando...");

    let petVacinadosCampanha = 0;

    bancoDeDados.pets = bancoDeDados.pets.map((pet) => {
        if (!pet.vacinado) {
            vacinarPet(pet);
            petVacinadosCampanha++;
        }
        return pet;
    });
    // atualizarBanco();
    console.log(`${petVacinadosCampanha} pets foram vaciados nessa campanha!`);
    
};

const buscarPet = (nomePet) => {
    
    let petEncontrado = bancoDeDados.pets.find((pet) => {
        return pet.nome == nomePet;
    });

    return petEncontrado ? petEncontrado : `Nenhum pet encontrado com nome ${nomePet}`;
}

const filtraTipoPet = (tipoPet) => {

    let petsEncontrados = bancoDeDados.pets.filter((pet) => {
        return pet.tipo == tipoPet && !pet.vacinado;
    });
    return petsEncontrados;
}

const clientePremium = (pet) => {
    let nServicos = bancoDados.pets.reduce((total, pet) => {
        return total + pet.servicos.length;
    })

    if (nServicos > 5) {
        console.log(`Olá, ${pet.nome}! Você é um cliente especial e ganhou um descontão!`);
    } else {
        console.log(`Olá, ${pet.nome}! Você ainda não tem descontos disponiveis!`);
    }
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
    console.log('Até logo e volte sempre!');
}






console.log(buscarPet('Thanos'));
//adicionarPet('garfield', 'cachoro', 1, 'pastor alemão', 15, 'marina', '81 9876-1234', true, []);
// darBanhoPet(bancoDeDados.pets[0]);
// tosarPet(bancoDeDados.pets[1]);
// apararUnhasPet(bancoDeDados.pets[2]);
//console.log(pets);
// campanhaVacina();
console.log('------------');
// listarPets();
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
// atenderCliente(bancoDeDados.pets[0], darBanhoPet);
console.log('------------');
campanhaVacina();

