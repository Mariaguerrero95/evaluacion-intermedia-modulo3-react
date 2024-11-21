import "../scss/App.scss";
import countriesData from "../services/data.json";
import ListCountries from "./ListCountries";


function App() {
    //console.log(countriesData);
    return (
        <>
            <header>
                <h1>Country Info App</h1>
            </header>
            <main>
                <ListCountries countries={countriesData} />
            </main>
        </>
    )
}
export default App