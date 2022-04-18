import React from "react"
import {Routes, Route} from "react-router-dom"

import Details from "./Details"
import Products from "./Products"

export default (
    <Routes>
        <Route path="/" element={<Products />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
    </Routes>
)