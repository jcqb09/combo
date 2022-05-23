import Item from "./Item.js"
function Meal(props) {
    let itemsToDisplay = props.items;
    if (props.onlyVegetarian) {
        // if onlyVegetarian is true, filter out the non-vegetarian options
        itemsToDisplay = props.items.filter((item) => item.vegetarian === true)
    }
    // what should be displayed? the meal name and the item components
    return (<>
        <h2>{props.name}</h2>
        {itemsToDisplay.map((item) => <Item info={item} />)}
    </>);
}

export default Meal;