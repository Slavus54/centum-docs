import {useState, useMemo} from 'preact/hooks'
import MethodCard from './MethodCard'
import {getAllMethods} from '../api/api'
import {init} from '../store/store'
import {MethodType} from '../types/types'

const Docs = () => {
    const [methods, setMethods] = useState<MethodType[]>([])

    useMemo(async () => {
        let data = await getAllMethods()
        
        // get collection of methods from server
        
        setMethods(data)

        // reset method in LS
        init()
    }, [])

    return (
        <>
            {methods.length === 0 && <h2 class='pale'>Loading...</h2>}
            <div class='items'>
                {methods.map(el => <MethodCard id={el.id} title={el.title} lines={el.lines} />)}
            </div>  
        </>
    )
}

export default Docs