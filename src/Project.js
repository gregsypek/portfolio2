import React from "react";
import ArrowLeft from "./img/11.svg";
import ArrowRigth from "./img/12.svg";
import ViewIcon from "./img/13.svg";
import GithubIcon from "./img/14.svg";

export default function Project(props) {
	return (
		<div className="projects__box projects__box--0" data-box="0">
			<div className="projects__nav">
				<span className="projects__nav--title">{props.title}</span>
				<div className="projects__icons">
					<button
						className="projects__icon projects__icon--move left--4"
						data-move-prev
						onClick={props.prevImage}
					>
						<img src={ArrowLeft} alt="arrow left" className="icon" />
					</button>

					<button
						className="projects__icon projects__icon--move right--4"
						data-move-next
						onClick={props.nextImage}
					>
						<img src={ArrowRigth} alt="arrow right" className="icon" />
					</button>

					<a
						href={props.liveLink}
						target="_blank"
						rel="noreferrer"
						className="projects__icon projects__icon--view"
					>
						<img src={ViewIcon} alt="view" className="icon" />
					</a>
					<a
						href={props.gitLink}
						target="_blank"
						rel="noreferrer"
						className="projects__icon projects__icon--github"
					>
						<img src={GithubIcon} alt="arrow view" className="icon" />
					</a>
				</div>
			</div>
			<div className="projects__info">
				<p className="projects__info--about">{props.description}</p>
				<p className="projects__info--languages">
					Languages: {props.languages}
				</p>
			</div>
			<a
				href={props.readmeLink}
				target="_blank"
				rel="noreferrer"
				className="projects__btn btn"
			>
				More
			</a>
			<img
				className="projects__img"
				src={`./screenshots/${props.images}`}
				alt="project 1"
			/>
		</div>
	);
}
