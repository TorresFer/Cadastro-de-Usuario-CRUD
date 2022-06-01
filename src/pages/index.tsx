import Layout from "../components/Layout"
import Tabela from "../components/Tabela"
import Botao from "../components/Botao"
import Formulario from "../components/Formulario"

import useClientes from "../hook/useClientes"

export default function Home() {

  const { 
    cliente, 
    clientes, 
    novoCliente, 
    salvarCliente, 
    selecionarCliente, 
    excluirCliente, 
    tabelaVisivel, 
    exibirTabela
  } = useClientes()

  return (
    <div className={`
      flex h-screen justify-center items-center 
      bg-gradient-to-r from-blue-500 to-purple-600
      text-white
    `}>
      <Layout titulo="Cadastro">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="mb-4"
                onclick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela clientes={clientes} 
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            />
          </>
        ) : (
            <Formulario 
              cliente={cliente} 
              clienteMudou={salvarCliente}
              cancelado={exibirTabela}
            />
        )}
      </Layout>
    </div>
  )
}
