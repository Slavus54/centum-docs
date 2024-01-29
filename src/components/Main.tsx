//@ts-ignore
import Centum from 'centum.js'
import Feature from './Feature'
import {features, NPM_ICON, NPM_URL} from '../env/env'

const Main = () => {

    const centum = new Centum()

    const onView = () => {
        centum.go(NPM_URL)
    }

    return (
        <>
            <h1>Centum.JS</h1>
            <h3 class='pale'>Little polyfunctional library on JS for using in building webapps and just coding</h3>
            <img onClick={onView} src={NPM_ICON} alt='npm icon' />
           
            <h1>Features</h1>
            <div class='items half'>
                {features.map(el => <Feature headline={el.headline} text={el.text} />)}
            </div>            
        </>
    )
}

export default Main