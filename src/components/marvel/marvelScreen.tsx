import { HeroesList } from "../hero/heroesList"

export const MarvelScreen = () => {
    return (
        <div className="dc-screen">
            <h1>Marvel Screen</h1>
            <HeroesList publisher="Marvel Comics" />
        </div>
    )
}