import { useState } from "react"


function App(){




const Formulário = (props) => {

  const [nome, setNome] = useState('Ronaldo')

return (
<div>
<h3>{props.titulo}</h3>
<input className="nome"
 placeholder="Digite seu nome..."
 onChange={(e)=>{setNome(e.target.value)}}
 name="nome"
 type="text" />
 <button className="botao" onClick={
  ()=> {
  if(props.mensagem.lenght > 0)
  alert(nome)
else 
   alert(props.mensagem)
  }
}>

CLIQUE AQUI
 </button>
</div>

)


}

  return (
 <div>
 <h3>Pizzaria 2B</h3>
 <Formulário titulo = "Nome" mensagem = "Santos falido" />
 <Formulário titulo = "E-mail" mensagem = "Palmeiras" />
 <Formulário titulo = "CPF"  mensagem = "Ameriacanas"/>
 <Formulário />
 </div>
  )
}
export default App 
