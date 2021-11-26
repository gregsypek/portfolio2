import React from "react";

export default function About() {
	return (
		<div className="more__wrapper">
			<h3 className="more__title">Reach out for more?</h3>
			<div className="more__box">
				<p className="more__info">
					I am available on twitter and linkedin. You can also drop me an email
				</p>
				<div className="more__left"></div>
				<div className="more__right">
					<ul className="more__nav">
						<li className="more__square more__square--email">
							<a
								href="mailto:gregsypek@gmail.com"
								className="more__item more__item--email"
							>
								Email
							</a>
						</li>
						<li className="more__square more__square--twitter">
							<a
								href="https://twitter.com/gregsypek"
								className="more__item more__item--twitter"
							>
								Twitter
							</a>
						</li>
						<li className="more__square more__square--linkedin">
							<a
								href="https://www.linkedin.com/in/grzegorz-sypek-47472a194/"
								className="more__item more__item--linkedin"
							>
								Linkedin
							</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
