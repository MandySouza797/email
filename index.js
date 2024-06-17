let usuarios = [
    {nome: "Luis", email: "luis@gmail.com", idade: 21},
    {nome: "Joao", email: "joao@gmail.com", idade: 25},
    {nome: "Lucas", email: "lucas@gmail.com", idade: 24}
];

console.log("Digite o email do usuário:");

process.stdin.on("data", function(data){
    let entrada = data.toString().trim();
    
    let usuarioEncontrado = usuarios.find(usuario => usuario.email === entrada);
    
    if(usuarioEncontrado) {
        console.log(`Nome: ${usuarioEncontrado.nome}, Idade: ${usuarioEncontrado.idade}`);
    } else {
        console.log("Usuário não encontrado.");
    }

    process.exit();
})