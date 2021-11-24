import React from "react";
import home from "./img/home.png";

export default function Home() {
	return (
		<div className="home__main">
			<div className="home__picture-box">
				 {/* <img className="home__picture" src={home} alt="me" /> */}
				<img className="home__picture" src={home} alt="me" />
			</div>
			<div className="home__content">
				<div className="home__title">
					<h1 className="home__title--part1">Web Developer</h1>
					<h3 className="home__title--part2">& Content Creator</h3>
				</div>
				<h5 className="home__hi">
					Hi my name is Greg.
					<br /> I design and create web pages and build projects with attention
					to clarity and details.
				</h5>
				<a href="#about" className="home__btn btn">
					About Me
				</a>
			</div>
		</div>
	);
}
