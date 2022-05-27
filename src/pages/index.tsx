import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Cliente from "../core/Cliente"

export default function Home() {

  const clientes = [
    new Cliente ('Ana', 34, '1'),
    new Cliente ('Bia', 45, '2'),
    new Cliente ('Carlos', 54, '3'),
    new Cliente ('Pedro', 34, '4')
  ]

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente.nome)
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir... ${cliente.nome}`)
  }

  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-blue-500 to-purple-600
      text-white
    `}>
      <Layout titulo="Cadastro">
          <Tabela clientes={clientes} 
            clienteSelecionado={clienteSelecionado}
            clienteExcluido={clienteExcluido}
          />
      </Layout>
    </div>
  )
}
