function Country({ country }) {
    return (
        <div>
            <h3>{country.name.common}</h3>
            <p>{country.capital[0]}</p>
            <p>{country.flag}</p>
            <p>{country.continents[0]}</p>
        </div>
    )
}
export default Country
