interface BotaoProps {
    children: any
    className?: string
    cor?: 'green' | 'blue' | 'gray'
    onclick?: () => void
}

export default function Botao(props: BotaoProps){
    return(
        <button onClick={props.onclick} className={`
            bg-gradient-to-r from-blue-500 to to-blue-800
            text-white px-4 py-2 rounded-md 
            ${props.className}
        `}>
            {props.children}
        </button>
    )
}