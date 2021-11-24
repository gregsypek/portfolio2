import React from "react";
import about from "./img/about.png";
import about2 from "./img/about2.png";

export default function About() {
	return (
		<div className="about__wrapper">
			<div className="about__picture-box">
				 
				<img
					className="about__picture about__picture--1"
					src={about}
					alt="mauntain trail sign"
				/>
				<h2 className="about__title">About Me</h2>
				 
				<img
					className="about__picture about__picture--2"
					src={about2}
					alt="Me on the mountain "
				/>
			</div>
			<div className="about__text-box">
				<h5 className="about__text about__text--1">
					I live in a small town of Mielec in Poland. In my spare time I love
					listening to progressive rock, reading books and hiking in the
					mountains.
				</h5>
				<h5 className="about__text about__text--2">
					Currently, I work as a carpenter, but after hours I am
					<span>coding</span> my projects. I am a self-taught learner who loves{" "}
					<span>computers.</span>
				</h5>
				<h5 className="about__text about__text--3">
					I am willing <span>to cooperate</span> to start my adventure with IT
					and develop further in this direction.
				</h5>
				<a href="#contact" className="about__btn btn">
					Contact
				</a>
			</div>
		</div>
	);
}
