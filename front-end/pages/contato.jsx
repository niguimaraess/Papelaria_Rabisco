import Titulo from '@/components/Titulo'
import Headerb from '../components/Headerb'
import CardListFuncionarios from '@/components/CardListFuncionarios';

import {useState, useEffect } from 'react'
import { getFuncionarios } from '@/services/apiReqres'

export default function funcionarios() {
  const [funcionarios, setFuncionarios] = useState([])
  async function buscaFuncionarios() {
      try {
          const data = await getFuncionarios()
          console.log(data)
          // Atualizamos o estado 'produtos' com os dados recebidos
          setFuncionarios(data)
      } catch (error) {
          // Se houver algum erro, exibimos no console
          console.error('Erro ao buscar funcionarios:', error)
      }
  }
  // O useEffect é usado para realizar efeitos colaterais, como chamadas de API
  useEffect(() => {
      // Chamamos a função 'buscaProdutos' assim queo componente é montado
      buscaFuncionarios()
      // Configuramos um intervalo para chamar 'buscaProdutos' a cada 5 segundos
      const atualiza = setInterval(buscaFuncionarios, 5000)
      // Retornamos uma função de limpeza que cancela o intervalo quando o componente é desmontado
      return function () {
          clearInterval(atualiza)
      }
  }, []) // O array vazio significa que este efeito só é executado uma vez após a montagem
  // Renderizamos os componentes na tela
  return (
      <>
          <Headerb/>
          <Titulo texto="Entre em contato conosco!"/>
          <CardListFuncionarios funcionarios={funcionarios}/>
      </>
  )
}