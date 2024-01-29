import {useState, useMemo} from 'preact/hooks'
import {getCurrentMethod} from '../api/api'
import {update} from '../store/store'
import {ComponentPropsType, MethodType} from '../types/types'
import ExampleCard from './ExampleCard'
import RouterNavigator from './RouterNavigtor'

const MethodComponent = ({params}: ComponentPropsType) => {
    const [method, setMethod] = useState<MethodType | null>(null)

    useMemo(async () => {
        let data = await getCurrentMethod(params.id)

        setMethod(data)

        update({currentMethod: data.title, values: data.values})
    }, [])

    return (
        <>
            {method !== null &&
                <>
                    <h1>.{method.title}()</h1> 
                    <h3 class='text pale'>{method.description} ({method.lines}*)</h3>

                    <h2>#Arguments</h2>
                    <div class='items half'>
                        {method.values.map(el => <div class='item label'>{el}</div>)}
                    </div>

                    <h2>#Examples</h2>
                    <div class='items half'>
                        {method.examples.map(el => <ExampleCard values={method.values} methodArguments={el.methodArguments} result={el.result} /> )}
                    </div>
                    
                    <div class='items small'>    
                        <RouterNavigator title='Back' url='/docs' />
                        <RouterNavigator title='Try' url='/codebox' />
                    </div>   

                    <p class='text detail pale'>* Length of code</p>
                </>
            }
        </>
    )
}

export default MethodComponent