import NavItem from './NavItem'
import {routes} from '../env/env'

const Navbar = () => {
    return (
        <div class='navbar'>
            {routes.map(el => <NavItem title={el.title} url={el.url} />)}
        </div>
    )
}

export default Navbar