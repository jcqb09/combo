import Meal from "./Meal.js"
import {useState} from "react"

function Menu(props) {
    // what state does the app need? whether to show vegetarian or not
    const [showOnlyVegetarian, setShowOnlyVegetarian] = useState(false);

    // what html should be displayed? -> the title, a button for the vegetarian option, and each meal component
    return (<>
    <h1>Menu</h1> 
    {}
    {showOnlyVegetarian && <button onClick={() => setShowOnlyVegetarian(false)}> Show All </button>}
    {!showOnlyVegetarian && <button onClick={() => setShowOnlyVegetarian(true)}> Show Only Vegetarian </button>}
    {}
    {Object.keys(props.menu).map((mealName) => <Meal name={mealName} items={props.menu[mealName]} onlyVegetarian={showOnlyVegetarian} />)}
    </>);
}

export default Menu;