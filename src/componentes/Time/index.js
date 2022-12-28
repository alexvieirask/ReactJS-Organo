import hexToRgba from 'hex-to-rgba'
import Colaborador from '../Colaborador'
import './time.css'

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {

    return (
        colaboradores.length > 0 && <section className='time' style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor:hexToRgba(time.cor,'0.6') }}>
            <input value={time.cor} onChange={event => mudarCor(event.target.value, time.id)} type='color' className='input-color'/>
            <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
            <div className='colaboradores'>
                {colaboradores.map((colaborador, indice) => <Colaborador key={indice} colaborador={colaborador} corDeFundo={time.cor} aoDeletar={() => {aoDeletar(colaborador.id)}}/>)}
            </div>
        </section>

    )
}

export default Time