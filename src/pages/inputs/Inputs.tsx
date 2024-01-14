import { useState,useEffect } from "react"
import Topo from "@/components/Topo"
import Globais from "@/components/Globais"
const cursos=["HTML","React","C++","Javascript","Arduino","CSS"]

export default function Inputs(){
    const [nome,setNome]=useState<string>("")
    const [curso,setCurso]=useState<string>("")

    useEffect(()=>{
        Globais.curso="React"
    },[])

    function fcursos(){ 
        return cursos.map((c:any)=>{
            return <option value={c} key={Math.random()*9999999999999}>{`Curso de ${c}`}</option>
        })
        
    }

    return(
        <div>
            <Topo/>
            <div className="campoForm">
                <label>Nome</label>
                <input type="text" value={nome} onChange={(evt)=>setNome(evt.target.value)}/>
            </div>
            <div className="campoForm">
                <label>Curso</label>
                <select value={curso} onChange={(evt)=>setCurso(evt.target.value)}>
                    {
                        fcursos()
                    }
                </select>
            </div>
            <div>
                Nome digitado: {nome}
            </div>
            <div>
                Curso escolhido: {curso}
            </div>
            <div>
                <p>{Globais.canal}</p>
                <p>{Globais.curso}</p>
                <p>{Globais.ano}</p>
            </div>
        </div>

    )
}