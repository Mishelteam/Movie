import { configureStore} from '@reduxjs/toolkit'
import { Checked } from '../Store/Store'
import { ChekedWatchlist } from '../Store/Store2'

const store= configureStore({
    reducer:{
        favourite: Checked,
        WatchList: ChekedWatchlist

    }
})
 export default store