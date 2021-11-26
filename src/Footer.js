import React from "react";

export default function About() {
	const year = new Date().getFullYear();

	return (
		<footer className="footer more__wrapper">
			<div className="footer__wrapper">
				<div className="footer__left">
					<p className="footer__copyright">
						© <span className="year">{year}</span>&nbsp;Created by gregsypek
					</p>
				</div>
				<div className="footer__right">
					<ul className="footer__nav">
						<li className="footer__square footer__square--about">
							<a
								href="https://gregsypek.github.io/CV"
								className="footer__item footer__item--about"
							>
								CV
							</a>
						</li>
						<li className="footer__square footer__square--works">
							<a href="#projects" className="footer__item footer__item--works">
								Works
							</a>
						</li>
						<li className="footer__square footer__square--back-up">
							<a href="#home" className="footer__item footer__item--back-up">
								Back up
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
