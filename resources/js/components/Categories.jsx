import React, { useEffect } from "react";

function Categories({ items, activeItem, onClick }) {
    return (
        <div className="categories">
            <ul>
                <li className={activeItem === null ? "active" : ""}>All</li>
                {items &&
                    items.map((name, index) => (
                        <li
                            key={`${name}_${index}`}
                            className={activeItem === index ? "active" : ""}
                            onClick={() => onClick(index)}
                        >
                            {name}
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default Categories;

// const [activeItem, setActiveItem] = React.useState(null);
// const [filteredItems, setFilteredItems] = React.useState([]);
// //got items from parent
// const onSelectItem = index => {
//     setActiveItem(index);
// };

// className={activeItem === null ? "active" : ""}

// className={activeItem === index ? "active" : ""}
// onClick={() => onSelectItem(index)}
// key={`${name}_${index}`}
