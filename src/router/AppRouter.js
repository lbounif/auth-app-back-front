import { useState } from "react"
import { BrowserRouter, Redirect, Route, Routes} from "react-router-dom"
import Header from "../components/Header"
import FirstStep from "../components/FirstStep"
import SecondStep from "../components/SecondStep"
import ThirdStep from "../components/ThirdStep"
import Login from "../components/Login"

const AppRouter = () => {
    const [user, setUser] = useState({})

    const updateUser = (data) => {
        setUser((prevUser)=> ({...prevUser, ...data}))
    }

    return (
        <BrowserRouter>
            <div className="container">
                <Header />
                <Routes>
                    <Route
                        // render={(props)=> (
                        //     <FirstStep {...props} user={user}/>
                        // )}
                        element={<FirstStep user={user} updateUser={updateUser}/>}
                        path="/"
                        exact/>
                    <Route
                        element={<SecondStep/>}
                        path="/second"
                        exact={true}/>
                    <Route
                        element={<ThirdStep/>}
                        path="/third"
                        exact={true}/>
                    <Route
                        element={<Login/>}
                        path="/login"
                        exact={true}/>
                    {/* <Route render={() => <Redirect to="/" />} /> */}
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default AppRouter