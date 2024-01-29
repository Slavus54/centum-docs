import {FeatureType} from '../types/types'

const Feature = ({headline, text}: FeatureType) => {

    return (
        <div class='item panel'>
            <h2>{headline}</h2>
            <p>{text}</p>
        </div>
    )
}

export default Feature