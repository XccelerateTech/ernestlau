import React, {Component} from 'react'
import {
    Route,
    Link,
    match,
    Switch
} from 'react-router-dom'
import NavBar from './Navbar';
import Home from './Home';
import About from './About';
import ShoppingListApp from './ShoppingListApp'
import DisplayItem from './DisplayItem'
import NoMatch from './NoMatch'

class App extends Component {
    render() {
        return (
            <div>
                <NavBar></NavBar>
                <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route path="/about" component={About}></Route>
                <Route path="/ShoppingList" component={ShoppingListApp}> </Route>
                <Route path="/DisplayItem/:id" render={(props) => <DisplayItem {...props} isAuthed={true} />}></Route>
                <Route component={NoMatch}/>
                </Switch>
            </div>
        )
    }
}

export default App