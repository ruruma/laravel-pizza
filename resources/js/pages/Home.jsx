import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import PizzasBlock from "../components/PizzasBlock";

function Home({ items }) {
    const [activeItem, setActiveItem] = React.useState(null);
    const [filteredItems, setFilteredItems] = React.useState([]);
    //got items from parent
    const onSelectItem = index => {
        setActiveItem(index);
    };

    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeItem={activeItem}
                    onClick={onSelectItem}
                    items={["Vegeterian ", "Meat", "Chicken", "Spicy"]}
                ></Categories>
                <Sort items={["Alphabet", "Price"]} />
            </div>
            <div className="content__items">
                {items.map(obj => (
                    <PizzasBlock key={obj.id} {...obj} />
                ))}
            </div>
        </div>
    );
}

export default Home;
