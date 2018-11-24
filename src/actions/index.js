export const DATA_AVAILABLE = 'DATA_AVAILABLE';

import Axios from 'axios';

export const getApiData = () => {
    return (dispatch) => {
        Axios.get("https://rallycoding.herokuapp.com/api/music_albums")
        .then((response) => {
             dispatch({type: DATA_AVAILABLE, datamapfromaction:response.data});
            }
        )    
    }
}

