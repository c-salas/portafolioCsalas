
export const ProjectCard = ({img}) => {
    return (
        <>
			<div id="main" class="wrapper style1">
				<div class="container">		
						<section>
							<a href="#one" class="goto-next scrolly">Next</a>
						</section>
				</div>
			</div>


			
			<section id="one" className="spotlight style2 right">
				<span className="image fit main"><img src="..\assets\images\pic06.jpg" alt="" /></span>
				<div className="content">
					<header>
						<h3>Samodata Landing Page</h3>
							<p> Static landing page using html5 and css3 for IT client.</p>
					</header>
					<ul className="actions">
						<li><a href="https://samodata.cl" class="button">Visit Here</a></li>
						<li><a href="https://github.com/c-salas/Samodata" class="button icon brands alt fa-github"> GitHub</a></li>
					</ul>
				</div>
				<a href="#two" className="goto-next scrolly">Next</a>
			</section>

			<section id="two" className="spotlight style3 left">
				<span className="image fit main bottom"><img src="../assets/images/pic07.jpg" alt="" /></span>
				<div className="content">
					<header>
						<h3>Coffee Cats E-Commerce</h3>
						<p>E-Commerce page using Html5/Css3, Nodejs, ExpresJs, ReactJS and MongoDB technologies.</p>
					</header>
					<ul className="actions">
						<li><a href="https://guileless-salamander-3923bc.netlify.app" class="button">Visit Demo</a></li>
						<li><a href="https://github.com/c-salas/CarritoCompras-UDD-C-salas" class="button icon brands alt fa-github">GitHub</a></li>
					</ul>
				</div>
			</section>
        </>
    )
}