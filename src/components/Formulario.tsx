import { useState } from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Input from "./Entrada";

interface FormularioProps {
    cliente: Cliente
    clienteMudou?: (cliente: Cliente) => void
    cancelado?: () => void
}

export default function Formulario(props: FormularioProps) {

    const id = props.cliente?.id
    const [nome, setNome] = useState(props.cliente?.nome ?? '')
    const [idade, setIdade] = useState(props.cliente?.idade ?? 0)


    return(
        <div>
            {id ? (
                <Input 
                    somenteLeitura
                    texto="Código" 
                    valor={id}
                    className="mb-5"
                />
            ) : false}
            <Input 
                texto="Nome" 
                valor={nome}
                valorMudou={setNome}
                className="mb-5"
            />
            <Input 
                texto="Idade" 
                tipo="number" 
                valor={idade}
                className="mb-5"
                valorMudou={setIdade} 
            />
            <div className="flex justify-end mt-7">
                <Botao cor="blue" className="mr-2"
                    onclick={() => props.clienteMudou?.(new Cliente(nome, idade, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </Botao>
                <Botao onclick={props.cancelado}>
                    Cancelar
                </Botao>
            </div>
        </div>
    ) 
}