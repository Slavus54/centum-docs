import {useLocation} from 'wouter'
import {MethodCardProps} from '../types/types'

const MethodCard = ({id, title, lines}: MethodCardProps) => {
    const [loc, setLoc] = useLocation()

    return (
        <div onClick={() => setLoc(`/method/${id}`)} class='item card'>
            {title}
            <p>{lines} lines</p>
        </div>
    )
}

export default MethodCard