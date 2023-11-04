import { Link, NavLink } from "react-router-dom"
<link rel="stylesheet" href="assets/css/main.css" />

export const Navbar = ({ primerapropiedad }) => {
  const propiedadmodificada = primerapropiedad.toUpperCase()
  return (
    <>	
			<div className="box">
    			<header id="header">
			
					<h1 className="neon" id="logo"><a href="/">C-Salas</a></h1>
						<nav id="nav">
									<ul>
										<li><a href="/">Home</a></li>
										<li><a href="projects">Projects</a></li>
										<li><a href="aboutme">Info</a></li>
										<li><a href="contactpage">Contact</a></li>
									</ul>
							
								<span className="border-top"></span>
								
								<span className="border-bottom"></span>

							
						</nav>
					
				</header>
			</div>
    </>
					



			
  )
}