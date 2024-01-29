import {useLocation} from 'wouter'
import {NavigatorPropsType} from '../types/types'

const RouterNavigator: React.FC<NavigatorPropsType> = ({title, url}) => {
    const [loc, setLoc] = useLocation()

    return <button onClick={() => setLoc(url)}>{title}</button>
}

export default RouterNavigator