import React, { useState } from "react"
import { allQuestions } from "./questions"

import { Sections } from "./section"
import { Heading } from "./questionsHeading"
import { Button, IconButton, Stack, Typography } from "@mui/material"

export const Categories = () => {

    const [count, setCount] = useState(0)
    console.log(count)


    const question = allQuestions[count]
    

    const { Q1, Q2, Q3, Q4, Q5 } = question

    const header = Heading[count]
    console.log(header)
    const { H } = header

    return (

        
        <Stack marginLeft={3} justifyItems="center">

            <Typography variant ="h5">{H}</Typography>
            
                <Sections Q1={Q1} Q2={Q2} Q3={Q3} Q4={Q4} Q5={Q5} />
                
            
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
                    count > 0
                        ?
                        <IconButton >
                            <Button>Next</Button>
                        </IconButton>
                        :
                        <IconButton onClick={() => setCount((count) => count + 1)}>
                            <Button>Next</Button>
                        </IconButton>
                }

            </Stack>

        </Stack>
       
    )
}
