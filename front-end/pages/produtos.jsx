import Headerb from '../components/Headerb'
import Titulo from '../components/Titulo'
import CardList from '@/components/CardList'
// Importamos os Hooks do React, useState e useEffect
import {useState, useEffect } from 'react'
// Importamos a função getProdutos de nosso arquivo apiRabisco
import { getProdutos } from '@/services/apiRabisco'

export default function produtos() {
    const [produtos, setProdutos] = useState([])
    async function buscaProdutos() {
        try {
            const data = await getProdutos()
            console.log(data)
            // Atualizamos o estado 'produtos' com os dados recebidos
            setProdutos(data)
        } catch (error) {
            // Se houver algum erro, exibimos no console
            console.error('Erro ao buscar produtos:', error)
        }
    }
    // O useEffect é usado para realizar efeitos colaterais, como chamadas de API
    useEffect(() => {
        // Chamamos a função 'buscaProdutos' assim queo componente é montado
        buscaProdutos()
        // Configuramos um intervalo para chamar 'buscaProdutos' a cada 5 segundos
        const atualiza = setInterval(buscaProdutos, 5000)
        // Retornamos uma função de limpeza que cancela o intervalo quando o componente é desmontado
        return function () {
            clearInterval(atualiza)
        }
    }, []) // O array vazio significa que este efeito só é executado uma vez após a montagem
    // Renderizamos os componentes na tela
    return (
        <>
            <Headerb/>
            <Titulo texto="Conheça nossos produtos!"/>
            <CardList produtos={produtos}/>
        </>
    )
}