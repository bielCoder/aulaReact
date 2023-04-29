function Pessoa({photo,name,age,jobs})
{
    return (
        <div>
            <img src={photo}/>
            <h2>Nome: {name}</h2>
            <p>Idade: {age}</p>
            <p>Profissão: {jobs}</p>
        </div>
    )
}

export default Pessoa;