import Country from "./Country";

function ListCountries ({ countries }) {
    //console.log(countries); Verifica si 'countries' tiene los datos
    return (
        <section>
            {countries.map((country) => (
                <Country key={country.name.common} country={country} />
            ))}
        </section>
    );
}
export default ListCountries