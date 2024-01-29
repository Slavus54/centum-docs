import {useState, useMemo} from 'preact/hooks'
//@ts-ignore
import Centum from 'centum.js'
import RouterNavigator from './RouterNavigtor'
import {gain} from '../store/store'
import {argument_types} from '../env/env'
import {CodeBoxArgumentInterface} from '../types/types'

const Codebox = () => {
    const [data, setData] = useState<any | null>(null)
    const [argType, setArgType] = useState<CodeBoxArgumentInterface | null>(argument_types[0])
    const [argTitle, setArgTitle] = useState<string>('')
    const [isValueAppend, setIsValueAppend] = useState<boolean>(false)
    const [result, setResult] = useState<any>('?')
    const [value, setValue] = useState<any | null>(null)
    const [values, setValues] = useState<string[]>([])

    const centum = new Centum()

    useMemo(() => {
        let result: any = gain()

        if (result !== null) {
            result = JSON.parse(result)

            if (result.currentMethod !== '') {
                setData(result)
            }
        }
    }, [])

    useMemo(() => {
        if (data !== null) {   
            let length = values.length

            setArgTitle(data.values[length])
            setArgType(argument_types[0])

            setIsValueAppend(length < data.values.length)

            if (result !== '?') {
                setResult('?')
            }
        }        
    }, [values])

    useMemo(() => {
        if (data !== null && !isValueAppend) {
            let info = centum[data.currentMethod](...values)
        
            setResult(info)
        }
    }, [isValueAppend])

    const onArgument = (flag: boolean) => {
        if (flag) {
            let result: any = argType?.isBrackets ? `[${value}]` : value

            result = argType?.title === 'number' ? parseFloat(result) : result

            setValues([...values, result])
        } else {
            setValues(isValueAppend ? values.slice(0, values.length - 1) : [])
        }

        setValue(null)
    }

    return (
        <>
           {data !== null &&
                <>
                    <h2>Create Data for .{data.currentMethod}()</h2>
                    <h3 class='pale'>Choose {argTitle}'s argument type</h3>
                    
                    <div class='items small'>
                        {argument_types.map(el => <div onClick={() => setArgType(el)} class={el.title === argType?.title ? 'item label active' : 'item label'}>{el.title}</div>)}
                    </div>
                    
                    <textarea value={value} onInput={(e: any) => setValue(e.target.value)} placeholder='Content of argument' />
                                        
                    <div class='items small'>
                        <button onClick={() => onArgument(false)}>Reset</button>
                        <button onClick={() => onArgument(true)}>+</button>
                    </div>
                  
                   
                    <h2>Result - {result}</h2> 

                    <RouterNavigator title='Back' url='/docs' />
                </>
           }
        </>
    )
}

export default Codebox