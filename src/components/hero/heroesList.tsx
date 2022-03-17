import { getHeroesByPublisher } from "../../helpers/getHeroByPublisher";
import { HeroCard } from "./heroCard";

export interface Hero {
    id: string,
    superhero: string,
    publisher: string,
    alter_ego: string,
    first_appearance: string,
    characters: string
}
interface HeroesListProps {
    heroes?: Hero[] | [];
    publisher: string;

}

export const HeroesList = ({ publisher }: HeroesListProps) => {

    const heroes = getHeroesByPublisher(publisher)

    return (
        <div className="container animate__animated animate__fadeIn ">
            <h1>Heroes {publisher}</h1>
            <div className=" row rows-cols-1 row-cols-md-4 g-3 ">

                {
                    heroes.map(hero => (
                        <HeroCard key={hero.id} {...hero} />
                    ))
                }


            </div>
        </div>

    )

}