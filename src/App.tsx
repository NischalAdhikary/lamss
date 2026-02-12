import { Routes, Route } from "react-router-dom"
import HomeMain from "./pages/home/Main"
import Layout from "./route/layout"
import AboutMain from "./pages/about/Main"
import BlogMain from "./pages/blogs/Main"
import IndividualMain from "./pages/blogs/blogindividual/Main"
import ContactMain from "./pages/contact/Main"
import Services from "./pages/services/Main"
import ServiceDetail from "./pages/services/serviceIndividual/Main"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route index element={<HomeMain />} />
        <Route path="/aboutus" element={<AboutMain />} />
        <Route path="/blogs" element={<BlogMain />} />
        <Route path="/contactus" element={<ContactMain />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog/:slug" element={<IndividualMain />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />

      </Route>


    </Routes>
  )
}
