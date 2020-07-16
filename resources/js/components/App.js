import React from "react";

import Header from "./Header";
import Categories from "./Categories";
import Home from "../pages/Home";
import Cart from "../pages/Cart";

import "../../sass/scss/app.scss";
import { Route } from "react-router-dom";

function App() {
    const [pizzas, setPizzas] = React.useState([]);

    React.useEffect(() => {
        axios.get("http://localhost:8000/db.json").then(({ data }) => {
            setPizzas(data.pizzas);
        });
    }, []);

    return (
        <div className="wrapper">
            <Header />
            <div className="content">
                <Route path="/" render={() => <Home items={pizzas} />} exact />
                <Route path="/cart" render={() => <Cart />} exact />
            </div>
        </div>
    );
}

export default App;
