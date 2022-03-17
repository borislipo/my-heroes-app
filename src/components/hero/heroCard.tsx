import { Link } from 'react-router-dom'
import { Hero } from "./heroesList";

interface HeroCardProps extends Hero {
    className?: string;
}


export const HeroCard = ({ id, superhero, publisher, alter_ego, first_appearance, characters, className }: HeroCardProps) => {

    const imgPath = `/assets/heroes/${id}.jpg`

    return (
        <div className={`col ${className}`} >
            <div className="card">
                <div className="row no-gutters">
                    <div className="col-4">

                        <img src={imgPath} className="card-img-top" alt={superhero} />
                    </div>
                    <div className="col-8">
                        <div className="car-body">
                            <h5 className="card-title">{superhero}</h5>
                            <p className="card-text">{alter_ego}</p>
                            {
                                (alter_ego !== characters) &&
                                <p className="text-muted"> {characters}</p>
                            }
                            <p className="card-text">
                                <small className="text-muted">{first_appearance}</small>
                            </p>
                            <Link to={`/hero/${id}`} className="btn btn-primary">
                                Mas..
                            </Link>

                        </div>

                    </div>
                </div>
            </div>
        </div>

    )

}