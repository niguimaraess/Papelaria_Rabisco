import CardFuncionarios from "./CardFuncionarios";

export default function CardListFuncionarios(props){
    const {funcionarios} = props
    return (
        <div className="container">
            <div className="row">
                {/* Estrutura de repetição map */}
                {funcionarios.map(function (funcionario, index){
                    return(
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={index}>
                            <CardFuncionarios 
                            nome={`${funcionario.first_name} ${funcionario.last_name}`} 
                            avatar={funcionario.avatar} 
                            email={funcionario.email} 
                            />
                        </div>
                    )})}
            </div>
        </div>
    )
}