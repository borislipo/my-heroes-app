import { useMemo } from 'react';
import queryString from 'query-string';
import { useNavigate, useLocation } from 'react-router-dom'
import { getHeroesByName } from "../../helpers/getHeroesByName"
import { useForm } from "../../hooks/useForm"
import { HeroCard } from "../hero/heroCard"

export const SearchScreen = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { q } = queryString.parse(location.search)
    let heroSearchName = q ? q.toString() : '' // q es un string


    const [values, handleInputChange, reset] = useForm({ search: heroSearchName })
    const { search } = values


    const heroesFiltered = useMemo(() => getHeroesByName(heroSearchName), [heroSearchName])


    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        navigate(`?q=${search}`)
    }

    return (
        <div className="search-screen">
            <h1>Search</h1>
            <hr />
            <div className="row">
                <div className="col-5 ">
                    <h4>Search Form</h4>
                    <hr />
                    <form onSubmit={handleSubmit}>
                        <input
                            className="form-control"
                            placeholder="Search Your hero"
                            name="search"
                            autoComplete="off"
                            value={search}
                            onChange={handleInputChange}
                            type="text" />
                        <button
                            className="btn btn-outline-primary mt-1"
                            type="submit">Search</button>
                    </form>
                </div>
                <div className="col-7">
                    <h4>Results</h4>
                    <hr />
                    {
                        (heroSearchName === "") ?
                            <div className='animate__animated animate__fadeIn alert alert-info'>
                                Search a hero
                            </div>
                            : (heroesFiltered?.length === 0) &&
                            <div className='animate__animated animate__fadeIn alert alert-danger'>Hero {heroSearchName} Not Found</div>
                    }
                    {

                        heroesFiltered?.map(hero => (
                            <HeroCard
                                className="animate__animated animate__fadeIn"
                                key={hero.id}
                                {...hero}
                            />
                        ))

                    }

                </div>

            </div>
        </div>
    )
}