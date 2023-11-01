
export const ContactPage = () => {

    return (
      <>
			<div id="main" className="wrapper style1">
					<div className="container">

					<section>

						<header class="major">	
							<h2>Contact</h2>
						</header>

							<form action="https://formsubmit.co/c_salas2011@live.cl" method="POST" >
							<div class="row gtr-uniform gtr-50">
								<div class="col-6 col-12-xsmall">
									<input type="text" name="name"  placeholder="Name" />
								</div>
								<div class="col-6 col-12-xsmall">
									<input type="email" name="email"  placeholder="Email" />
								</div>

								<div class="col-12">
									<textarea name="message" id="message" placeholder="Enter your message" rows="6"></textarea>
								</div>
								<div class="col-12">
									<ul class="actions">
										<li><input type="submit" value="Send Message" class="primary" /></li>
										<li><input type="reset" value="Reset" /></li>
									</ul>
								</div>
							</div>
							</form>
					</section>
							

					</div>
				</div>
      </>
    )
  }