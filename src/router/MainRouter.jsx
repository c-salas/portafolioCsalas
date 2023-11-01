import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { Projects } from "../pages/Projects"
import { AboutMe } from "../pages/AboutMe";
import { ContactPage } from "../pages/ContactPage";
import { useState } from "react"



 export const MainRouter = () => {
 const [user, setUser] = useState(null)

return(
 <>
<Routes>
<Route path="/" element={<HomePage/>}/> 
<Route path="/projects" element={<Projects/>}/> 
<Route path="/aboutme" element={<AboutMe/>}/> 
<Route path="/contactpage" element={<ContactPage/>}/> 



</Routes>
 </>
) }