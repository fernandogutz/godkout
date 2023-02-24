import { useState } from "react";
import useFetch from "../../hooks/useFetch";
import HeaderHome from "../../ui/components/HeaderHome"
import ListOfAthletes from "../components/ListOfAthletes"
import SearchBar from "../components/SearchBar"

const Search = () => {
  const athletes = useFetch('https://young-falls-69772.herokuapp.com/api/users');
  const [query, setQuery] = useState();

  console.log(query);
  
  const onSetQuery = (query) => {
    setQuery(query);
  }

  return (
    <>
      <HeaderHome></HeaderHome>
      <div className="content">
        <h1 className="title__page">Buscar</h1>
        <SearchBar onSetQuery={onSetQuery}></SearchBar>
        <ListOfAthletes athletes={athletes} query={query}></ListOfAthletes>
      </div>
    </>
  )
}

export default Search