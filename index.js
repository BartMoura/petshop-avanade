const nomePetshop = "PETSHOP AVANADE";

let pets = [
    {
        nome: 'Thanos',
        tipo: 'cachorro',
        idade: 2,
        raca: 'Dachshund',
        peso: 7,
        tutor: 'Bart',
        contato: '(81) 99999-9999',
        vacinado: true,
        servicos: ['banho', 'tosa']
    },
    {
        nome: 'Costelinha',
        tipo: 'cachorro',
        idade: 5,
        raca: 'SRD',
        peso: 3,
        tutor: 'Doug',
        contato: '(81) 88888-8888',
        vacinado: true,
        servicos: 'tosa'
    },
    {
        nome: 'Drax',
        tipo: 'cachorro',
        idade: 1,
        raca: 'Pitbull',
        peso: 2,
        tutor: 'Bart',
        contato: '(81) 99999-9999',
        vacinado: false,
        servicos: 'banho'
    }
];

const listarPets = () => {
    /* for(let i = 0; i < pets.length; i++){
        console.log(pets[i].nome + " " + pets[i].raca);
        console.log(`O nome do pet é ${pets[i].nome}`);
    }*/
    for(let pet of pets){
        console.log(`${pet.nome}, ${pet.idade}, ${pet.tipo}, ${pet.raca}`);
    }
}

const vacinarPet = (pet) => {
    if (pet.vacinado == true) {
        console.log(`${pet.nome} já está vacinado.`);
    } else {
        pet.vacinado = true;
        console.log(`${pet.nome} foi vacinado com sucesso.`);
    }
}

const campanhaVacina = () => {
    numPets = 0;
    for(let pet of pets) {
        if (pet.vacinado === false) {
            pet.vacinado = true;
            numPets++;
        }
    }
    console.log(`${numPets} pets foram vacinados nessa campanha!`);
}

const adicionarPet = (nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos) => {
    novoPet = {nome, tipo, idade, raca, peso, tutor, contato, vacinado, servicos};
    pets.push(novoPet);
}

const darBanhoPet = (pet) => {
    pet.servicos.push('banho');
    console.log(`${pet.nome} está de banho tomado`)
}

const tosarPet = (pet) => {
    pet.servicos.push('tosa');
    console.log(`${pet.nome} está com cabelinho na régua`)
}

const apararUnhasPet = (pet) => {
    pet.servicos.push('aparar');
    console.log(`${pet.nome} está de unhas aparadas!`)
}

adicionarPet('garfield', 'cachoro', 1, 'pastor alemão', 15, 'marina', '81 9876-1234', true, []);
darBanhoPet(pets[3]);
tosarPet(pets[3]);
apararUnhasPet(pets[3]);
console.log(pets);
// campanhaVacina();
// listarPets();
// vacinarPet(pets[2]);