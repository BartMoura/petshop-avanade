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

const adicionarPet = (nomePet, tipoPet, idadePet, racaPet, pesoPet, tutorPet, contatoPet, vacinadoPet, 
    servicosPet) => {
    novoPet ={nomePet, tipoPet, idadePet, racaPet, pesoPet, tutorPet, contatoPet, vacinadoPet, 
        servicosPet};
    pets.push(novoPet);
}

darBanhoPet(pet)

tosarPet(pet)

apararUnhasPet(pet)



adicionarPet('Garfield', 'gato', 5, 'SRD', '2', 'Jon Arbuckle', '11 93333-3333', true, '');
console.log(pets);
// campanhaVacina();
// listarPets();
// vacinarPet(pets[2]);