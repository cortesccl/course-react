import { Link } from "react-router-dom"

const CharactersByHero = ({alter_ego,  characters}) => {
    // if (alter_ego === characters) return (<></>)
    // return <p> { characters } </p>
    return (alter_ego === characters) 
        ? <></>
        : <p> { characters } </p>
}

export const HeroCard = ( {hero} ) => {

    const heroImageUrl = `/assets/heroes/${ hero.id}.jpg`

    // const charactersByHero = (<p>{hero.characters}</p>)
    return (
        <div className="col animate__animated animate__fadeIn">
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">
                        <img src={heroImageUrl} className="card-img" alt={ hero.superhero} />
                    </div>
                    <div className="col-8">
                        <div className="card-body">
                            <h5 className="card-title">{hero.superhero}</h5>
                            <p className="card-text">{hero.alter_ego}</p>

                            {/* {
                                (hero.alter_ego !== hero.characters) && charactersByHero
                            } */}
                            
                            <CharactersByHero characters={hero.characters} alter_ego={hero.alter_ego} />

                            <p className="card-text">
                                <small className="text-muted">{hero.first_appearance}</small>
                            </p>
                            <Link to={`/hero/${hero.id}`}>
                                Más ...
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
