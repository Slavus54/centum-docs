import {MethodExampleCard} from '../types/types'

const ExampleCard = ({values, methodArguments, result} : MethodExampleCard) => {
    return (
        <div>
            [
                {methodArguments.map((argument, idx) => <p>{values[idx]}: {JSON.stringify(argument)}</p>)}
            ]
            <br />
            Result: {JSON.stringify(result)}
        </div>
    )
}

export default ExampleCard