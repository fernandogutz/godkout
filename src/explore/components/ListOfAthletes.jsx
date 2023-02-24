import AthleteCard from './AthleteCard';
import './SearchBar.css';

const ListOfAthletes = ({ athletes, query }) => {
    let filterAthletes = athletes;

    if (query) {
        return (
            <div>
                {filterAthletes.map(athlete => (

                    athlete.username.includes(query)
                        ? <AthleteCard athlete={athlete}></AthleteCard>
                        : null

                ))}
            </div>
        )

    } else {
        return (
            <div>
                {filterAthletes.map(athlete => <AthleteCard athlete={athlete}></AthleteCard> )}
            </div>
        )
    }


}

export default ListOfAthletes