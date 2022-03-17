import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { getHeroById } from '../../helpers/getHeroById';

export const HeroScreen = () => {

    const { heroId } = useParams();
    const hero = heroId && getHeroById(heroId);
    const navigate = useNavigate()


    const handleReturn = () => {
        navigate(-1) //vuelve a la pagina anterior
    }

    if (!hero) {
        return <Navigate to="*" />
    }

    const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
    const imgPath = `/assets/heroes/${hero.id}.jpg`

    return (
        <div className='row mt-5 '>
            <div className='col-4 animate__animated animate__fadeInLeft'>
                <img src={imgPath} alt={superhero} className='img-thumbnail' />

            </div>
            <div className='col-8'>
                <h3>{superhero}</h3>
                <ul className='list-group list-group-flus'>
                    <li className='item'><b>Alter ego: {alter_ego}</b></li>
                    <li className='item'><b>Publisher: {publisher}</b></li>
                    <li className='item'><b>First Appearence: {first_appearance}</b></li>
                </ul>
                <h5>Characters</h5>
                <p>{characters}</p>

                <button className='btn btn-outline-info' onClick={handleReturn}>Come back</button>

            </div>

        </div>
    )
}