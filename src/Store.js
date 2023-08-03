import {configureStore} from "@reduxjs/toolkit"
import ipfsDataSlice  from "./slices/ipfsData"
import utilsSlice  from "./slices/utilsSilce"
import  getterSlice  from "./slices/contractGetterSlice"

const store = configureStore({
    reducer: {
        custom : ipfsDataSlice,
        utils : utilsSlice,
        getterFunc: getterSlice
        
    }
})

export default store