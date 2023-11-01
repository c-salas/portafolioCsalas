import { Link, NavLink } from "react-router-dom"

export const Navbar = ({ primerapropiedad }) => {
  const propiedadmodificada = primerapropiedad.toUpperCase()
  return (
    <>
    		<header id="header">
					<h1 id="logo"><a href="index.html">C-Salas</a></h1>
					<nav id="nav">
						<ul>
							<li><a href="/">Home</a></li>
							<li><a href="projects">Projects</a></li>
							<li><a href="aboutme">Info</a></li>
							<li><a href="contactpage">Contact</a></li>
						</ul>
					</nav>
				</header>
    </>

  )
}