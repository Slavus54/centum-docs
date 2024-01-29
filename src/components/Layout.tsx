import {Route} from 'wouter'
import Navbar from '../components/Navbar'
import Main from './Main'
import Docs from './Docs'
import MethodComponent from './MethodComponent'
import Codebox from './Codebox'

const Layout = () => {
    return (
        <>
            <Navbar />

            <Route path='/' component={Main} />
            <Route path='/docs' component={Docs} />
            <Route path='/method/:id' component={MethodComponent} />
            <Route path='/codebox' component={Codebox} />
        </>
    )
}

export default Layout