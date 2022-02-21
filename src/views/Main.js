import React from 'react'
import { Switch, Route} from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import Material from './Material'

const Main = () => (
    <main>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/category/:id" component={Category} />
            <Route exact path="/material/:material" component={Material} />
        </Switch>
    </main>
)

export default Main
