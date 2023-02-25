export const setScoreInput = (area) => {
    if(area == 'Reps BW') {
        document.querySelector('#repsLabel').innerHTML = 'Reps';

    } else if (area == 'Lifting') {
        document.querySelector('#repsLabel').innerHTML = 'Kgs levantados';


    } else if (area == 'Statics') {
        document.querySelector('#repsLabel').innerHTML = 'Segundos';

    }
}