import {Link} from 'wouter'
import {RouteType} from '../types/types'

const NavItem = ({title, url}: RouteType) => <Link href={url} class='nav_item'>{title}</Link>

export default NavItem