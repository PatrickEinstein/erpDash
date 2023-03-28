import React, { useState } from "react"
import { allQuestions } from "./questions"
import { Sections } from "./section"
import { Heading } from "./questionsHeading"
import { Button, IconButton, Stack, Typography } from "@mui/material"
import { Pagination } from "@mui/material"
import { useDispatch } from "react-redux"
import { setCat15 } from "../redux/result_reducer"
import {averageSum} from "./section"
import { useNavigate } from "react-router-dom"


export const Categories = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [count, setCount] = React.useState(0)
    const handlePage = (event, value) => {
        setCount(value);
    };
    const question = allQuestions[count]
    const { Q1, Q2, Q3, Q4, Q5 } = question
    const header = Heading[count]
    const { H } = header
    const C = count + 1

    const handleSubmit = ( ) =>(
        dispatch(setCat15(5)),
        alert("success"),
        navigate("/success")
    )


    return (


        <Stack marginLeft={3} justifyItems="center">

            <Typography variant="h5">{H}</Typography>

            <Sections Q1={Q1} Q2={Q2} Q3={Q3} Q4={Q4} Q5={Q5} C={C} />


            <Stack direction="row" justifyContent="center" alignItems="center">

                {
                    count < 1
                        ?
                        <IconButton >
                            <Button>Previous</Button>
                        </IconButton>
                        :
                        <IconButton onClick={() => setCount((count) => count - 1)}>
                            <Button>Previous</Button>
                        </IconButton>
                }

                {
                    count < 14 
                    ?
                    <IconButton onClick={() => setCount((count) => count + 1)} >
                        <Button>Next</Button>
                    </IconButton>
                    :
                    <IconButton onClick={handleSubmit}>
                        <Button>Submit</Button>
                    </IconButton>
                   }
                
                
                
    
                
               

            </Stack>
            {/* <Stack spacing={2}>

                <Pagination count={10} page={count} onChange={handlePage} />
            </Stack> */}
        </Stack>

    )
}

// (() => {
//     switch (count) {
//         case 0 < count <= 13:
//             return (
//                 <IconButton onClick={() =>setCount((count) => count + 1)} >
//                     <Button>Next</Button>
//                 </IconButton>
//             )
//             break;
//         case 14:
//             return (
//                 <IconButton >
//                     <Button>Submit</Button>
//                 </IconButton>
//             )
//             break;
       

//     }
// })()