import React, {useState, useEffect} from "react"; //<- useEffect permite que você execute efeitos colaterais: buscar dados, atualizar diretamente o DOM e temporizadores.

function Relogio(){
    const [hora, setHora] = useState(new Date().toLocaleTimeString()); //<- new Date() get today's date as a readable string. O método toLocaleTimeString() retorna uma string representando o tempo como uma cadeia de caracteres (escrito por extenso)
    useEffect(() =>{
        const interval = setInterval(() => {
            setHora(new Date().toLocaleTimeString());
        }, 1000);

        return() => clearInterval(interval);
    },[]);

    return(
        <div className="relogio">
            <h2>Relógio Digital</h2>
            <p className="hora">{hora}</p>
        </div>
    );

}

export default Relogio;