import {Navigate, Route, Routes} from 'react-router-dom';
import Error404 from './pages/Error404';
import Junior from './pages/Junior';
import Juniorplus from './pages/Juniorplus';
import PreJunior from './pages/PreJunior';

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/junior',
    JUNIOR_PLUS: '/juniorplus',
    NOTFOUND: '/*',
    DEFAULT: '/'
}

export function Routers() {
    return (
        <div>
            <Routes>
                <Route path={PATH.DEFAULT } element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<Juniorplus/>}/>
                <Route path={PATH.NOTFOUND} element={<Error404/>} />
            </Routes>
        </div>
    )
}


