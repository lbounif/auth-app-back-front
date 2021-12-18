import { useState } from "react"
import { BrowserRouter, Redirect, Route, Routes} from "react-router-dom"
import Header from "../components/Header"
import FirstStep from "../components/FirstStep"
import SecondStep from "../components/SecondStep"
import ThirdStep from "../components/ThirdStep"
import Login from "../components/Login"

const AppRouter = () => {
    return (
        <BrowserRouter>
            <div className="container">
                <Header />
            </div>
        </BrowserRouter>
    )
}
export default AppRouter