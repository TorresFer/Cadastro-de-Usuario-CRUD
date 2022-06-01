import Cliente from "./Cliente"

export default interface ClienteRepositorio {
    salvar(cliente: Cliente): Promise<Cliente>
    excluir(cliente: Cliente): Promise<void>
    obterTodos(): Promise<Cliente[]>
}

//Interface criada direta no TS para se referir ao DB do Firebase com o intuito
//de facilitar caso eu queira continuar ampliando o projeto; caso contrário
//poderia simplesmente fazer em um componente.