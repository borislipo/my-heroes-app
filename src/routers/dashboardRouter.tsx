import { Routes, Route } from 'react-router-dom'
import { DcScreen } from '../components/dc/dcScreen'
import { HeroScreen } from '../components/hero/heroScreen'
import { MarvelScreen } from '../components/marvel/marvelScreen'
import { SearchScreen } from '../components/search/searchScreen'
import { NavBar } from "../components/ui/navBar"

export const DashboardRouter = () => {
    return (
        <div>
            <NavBar />
            <div className='container'>
                <Routes>
                    <Route path="marvel" element={<MarvelScreen />} />
                    <Route path="dc" element={<DcScreen />} />
                    <Route path="search" element={<SearchScreen />} />
                    <Route path="hero/:heroId" element={<HeroScreen />} />
                    <Route path="*" element={<h1>Not found</h1>} />
                    <Route path="/" element={<MarvelScreen />} />
                </Routes>
            </div>

        </div>
    )
}