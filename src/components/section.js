import * as React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { useState } from 'react';
import { Stack } from '@mui/material';

export const Sections = ({ Q1, Q2, Q3, Q4, Q5 }) => {

    const [value1, setValue1] = React.useState(0);
    const [value2, setValue2] = React.useState(0);
    const [value3, setValue3] = React.useState(0);
    const [value4, setValue4] = React.useState(0);
    const [value5, setValue5] = React.useState(0);
    console.log(value1)
    // console.log(value2)
    // console.log(value3)
    // console.log(value4)
    // console.log(value5)

    const handleChange1 = (event) => {
        setValue1(event.target.value);
    };
    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };
    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };
    const handleChange4 = (event) => {
        setValue4(event.target.value);
    };
    const handleChange5 = (event) => {
        setValue5(event.target.value);
    };

    return (

        <Stack direction="column" alignItems="left" justifyContent="left">
         <ol> 
            <li> <h3> {Q1}</h3> </li>

            <FormControl>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={value1}
                    onChange={handleChange1}
                >
                    <FormControlLabel value={5} control={<Radio />} label="Very high" />
                    <FormControlLabel value={4} control={<Radio />} label="High" />
                    <FormControlLabel value={3} control={<Radio />} label="Indifferent" />
                    <FormControlLabel value={2} control={<Radio />} label="Low" />
                    <FormControlLabel value={1} control={<Radio />} label="Very Low" />
                </RadioGroup>
            </FormControl>

            <li>    <h3> {Q2}</h3></li>

            <FormControl>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={value2}
                    onChange={handleChange2}
                >
                    <FormControlLabel value={5} control={<Radio />} label="Very high" />
                    <FormControlLabel value={4} control={<Radio />} label="High" />
                    <FormControlLabel value={3} control={<Radio />} label="Indifferent" />
                    <FormControlLabel value={2} control={<Radio />} label="Low" />
                    <FormControlLabel value={1} control={<Radio />} label="Very Low" />
                </RadioGroup>
            </FormControl>

            <li>  <h3> {Q3}</h3></li>
            <FormControl>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={value3}
                    onChange={handleChange3}
                >
                    <FormControlLabel value={5} control={<Radio />} label="Very high" />
                    <FormControlLabel value={4} control={<Radio />} label="High" />
                    <FormControlLabel value={3} control={<Radio />} label="Indifferent" />
                    <FormControlLabel value={2} control={<Radio />} label="Low" />
                    <FormControlLabel value={1} control={<Radio />} label="Very Low" />
                </RadioGroup>
            </FormControl>
            <li>   <h3> {Q4}</h3></li>
            <FormControl>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={value4}
                    onChange={handleChange4}
                >
                    <FormControlLabel value={5} control={<Radio />} label="Very high" />
                    <FormControlLabel value={4} control={<Radio />} label="High" />
                    <FormControlLabel value={3} control={<Radio />} label="Indifferent" />
                    <FormControlLabel value={2} control={<Radio />} label="Low" />
                    <FormControlLabel value={1} control={<Radio />} label="Very Low" />
                </RadioGroup>
            </FormControl>
            <li>  <h3> {Q5}</h3></li>
            <FormControl>

                <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    name="radio-buttons-group"
                    value={value5}
                    onChange={handleChange5}
                >
                    <FormControlLabel value={5} control={<Radio />} label="Very high" />
                    <FormControlLabel value={4} control={<Radio />} label="High" />
                    <FormControlLabel value={3} control={<Radio />} label="Indifferent" />
                    <FormControlLabel value={2} control={<Radio />} label="Low" />
                    <FormControlLabel value={1} control={<Radio />} label="Very Low" />
                </RadioGroup>
            </FormControl>

            </ol> 
        </Stack>



    )
}