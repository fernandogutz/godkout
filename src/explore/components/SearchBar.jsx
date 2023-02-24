
const SearchBar = ({onSetQuery}) => {


    return (
        <>
            <div className="wrapper-input">
                <span className='searchIcon'><i className="fa-solid fa-magnifying-glass"></i></span>
                <input
                    className="card__input searchBar"
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Buscar Atleta..."
                    onChange={e => onSetQuery(e.target.value)}
                    />
            </div>
        </>
        


    )
}

export default SearchBar