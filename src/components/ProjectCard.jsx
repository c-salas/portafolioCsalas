
export const ProjectCard = () => {
    return (
        <>
			<div id="main" className="wrapper style1">
				<div className="container">

						<section>
							<header className="major">
								<h2>Projects (Desing & Develop)</h2>

							</header>
								<p>.</p>
								<p>
									Currently my knowledge includes:
									<li>Html5, Css3 & Js</li>
									<li>ReactJS</li>
									<li>ExpresJs</li>
									<li>MongoDB</li>
									<li>Nodejs</li>
									
								</p>
								<p>.</p>
								<p>.</p>
								<hr/>


						</section>
				</div>
			</div>


						<section id="one" className="spotlight style2 right">
					<span className="image fit main"><img src="../assets/images/pic06.jpg" alt="" /></span>
					<div className="content">
						<header>
							<h3>Samodata Landing Page</h3>
								<p> Static landing page using html5 and css3 for IT client.</p>
						</header>
						<ul className="actions">
							<li><a href="https://samodata.cl" className="button">Visit Here</a></li>
							<li><a href="https://github.com/c-salas/Samodata" className="button icon brands alt fa-github"> GitHub</a></li>
						</ul>
					</div>
				</section>

						<section id="two" className="spotlight style3 left">
					<span className="image fit main bottom"><img src="../assets/images/pic07.jpg" alt="" /></span>
					<div className="content">
						<header>
							<h3>Coffee Cats E-Commerce</h3>
							<p>E-Commerce page using Html5/Css3, Nodejs, ExpresJs, ReactJS and MongoDB technologies.</p>
						</header>
						<ul className="actions">
							<li><a href="https://guileless-salamander-3923bc.netlify.app" className="button">Visit Demo</a></li>
							<li><a href="https://github.com/c-salas/CarritoCompras-UDD-C-salas" className="button icon brands alt fa-github">GitHub</a></li>
						</ul>
					</div>
				</section>
        </>
    )
}