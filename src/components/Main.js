import React, { useRef } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import { setUser } from '../redux/result_reducer'
import '../styles/Main.css'
import { useState } from 'react'
import { Button, IconButton, useTheme } from '@mui/material'
import { useDispatch } from 'react-redux'

export default function Main() {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

// const theme = useTheme()
// console.log(theme)
    // function to sumbit this will be called here
    const handleSubmit =( ) =>(
dispatch(setUser({firstName, lastName, email, phone})),
navigate("/quiz")
)


    return (
        <div className='container'>
            <h1 className='title text-light'>Export Readiness Assessment</h1>

            <ol>
                <li>You will be asked 75 questions in total and in 15 categories .</li>
                <li>Each category has 5 questions only.</li>
                <li>You can review and change answers before the quiz finish.</li>
                <li>The result will be declared at the end of the quiz.</li>
            </ol>

            <form id="form" style={{ display: "flex", flexDirection: "column", marginLeft: "30%" }}>
                <input
                    style={{ marginBottom: "3%" }}
                    className="userid"
                    type="text"
                    placeholder='First Name'
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                <input
                    style={{ marginBottom: "3%" }}
                    className="userid"
                    type="text"
                    placeholder='Last Name'
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                <input
                    style={{ marginBottom: "3%" }}
                    className="userid"
                    type="text"
                    placeholder='E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    style={{ marginBottom: "3%" }}
                    className="userid"
                    type="text"
                    placeholder='Phone'
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
            </form>

            <IconButton onClick={handleSubmit}>
                <Button >
                    Start
                </Button>
            </IconButton>
        </div>
    )
}
