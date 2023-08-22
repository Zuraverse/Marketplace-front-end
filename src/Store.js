import {configureStore} from "@reduxjs/toolkit"
import ipfsDataSlice  from "./slices/ipfsData"
import utilsSlice  from "./slices/utilsSilce"
import  getterSlice  from "./slices/contractGetterSlice"
import backenedSlice  from "./slices/backened"

const store = configureStore({
    reducer: {
        custom : ipfsDataSlice,
        utils : utilsSlice,
        getterFunc: getterSlice,
        backenedFunc: backenedSlice
        
    }
})

export default store