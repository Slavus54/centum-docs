import Centum from 'centum.js'
import {NPM_ICON, NPM_URL, topics} from '../env/env'

const Main = () => {

    const centum = new Centum()

    const onView = () => {
        centum.go(NPM_URL)
    }

    return (
        <>
            <h1>Centum.js</h1>
            <h3 class='pale'>
                Little polyfunctional library on JavaScript for better building web apps. <br />
                There are more than <b>36/100</b> methods <span class='italic'>(lat. "centum" - 1 hundred)</span>
            </h3>
            <img onClick={onView} src={NPM_ICON} alt='npm icon' />       

            <h2>Get Started</h2>

            <div class='items half'>
                <div class='item'>import Centum from 'centum.js'</div>

                <div class='item'>const centum = new Centum()</div>
            </div>
            
            <h2>Topics</h2>
            <div class='items half'>
                {topics.map(el => 
                    <div class='item card'>
                        {el}
                    </div>    
                )}
            </div>
        </>
    )
}

export default Main