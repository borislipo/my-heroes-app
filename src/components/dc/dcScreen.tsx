import { HeroesList } from "../hero/heroesList"

export const DcScreen = () => {
    return (
        <div className="dc-screen">
            <h1>DC Screen</h1>
            <HeroesList publisher="DC Comics" />
        </div>
    )
}