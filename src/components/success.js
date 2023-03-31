import { Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { setTotalResult, setTotalAveragePercentage } from "../redux/result_reducer";
import { useDispatch, useSelector } from "react-redux";



export const Success = ( ) => {

    const dispatch = useDispatch()

    const User = useSelector((state) => state.result.user)
    const cat1 = useSelector((state) => state.result.cat1)
    const cat2 = useSelector((state) => state.result.cat2)
    const cat3 = useSelector((state) => state.result.cat3)
    const cat4 = useSelector((state) => state.result.cat4)
    const cat5 = useSelector((state) => state.result.cat5)
    const cat6 = useSelector((state) => state.result.cat6)
    const cat7 = useSelector((state) => state.result.cat7)
    const cat8 = useSelector((state) => state.result.cat8)
    const cat9 = useSelector((state) => state.result.cat9)
    const cat10 = useSelector((state) => state.result.cat10)
    const cat11 = useSelector((state) => state.result.cat11)
    const cat12 = useSelector((state) => state.result.cat12)
    const cat13 = useSelector((state) => state.result.cat13)
    const cat14 = useSelector((state) => state.result.cat14)
    const cat15 = useSelector((state) => state.result.cat15)

const totalResults = [
    (+cat1), (+cat2), (+cat3), (+cat4), (+cat5), (+cat6), (+cat7), (+cat8), (+cat9), (+cat10), (+cat11), (+cat12), (+cat13), (+cat14), (+cat15)
]
console.log(totalResults)
const TotalResult = totalResults.reduce(function (total, amount) {
    return total + amount
});
console.log(TotalResult)
const totalAveragePercentage = TotalResult/75*100
console.log(totalAveragePercentage)


try{
    dispatch(setTotalResult(TotalResult))
    dispatch(setTotalAveragePercentage(totalAveragePercentage))
}catch(err){
console.log(err)
}



    return(
        <Stack>
        <Typography> Dear {User} </Typography>

        </Stack>
        

    )
}