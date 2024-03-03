import {MethodExampleCard} from '../types/types'

const ExampleCard = ({values, methodArguments, result} : MethodExampleCard) => {
    return (
        <div class='example'>
            [
                {methodArguments.map((argument, idx) => <p>{values[idx]}: {JSON.stringify(argument)}&nbsp;</p>)}
            ],
            Result: {JSON.stringify(result)}
        </div>
    )
}

export default ExampleCard