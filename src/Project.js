import React from "react";

export default function Project() {
	return (
		<div class="projects__box projects__box--0" data-box="0">
			<div class="projects__nav">
				<span class="projects__nav--title">Schody Zalinski</span>
				<div class="projects__icons">
					<button
						class="projects__icon projects__icon--move left--4"
						data-move-prev
					>
						<img src="./public/img/11.svg" alt="arrow left" class="icon" />
					</button>

					<button
						class="projects__icon projects__icon--move right--4"
						data-move-next
					>
						<img src="./public/img/12.svg" alt="arrow right" class="icon" />
					</button>

					<a
						href="https://schody-zalinski.netlify.app"
						target="_blank"
						rel="noreferrer"
						class="projects__icon projects__icon--view"
					>
						<img src="./public/img/13.svg" alt="arrow view" class="icon" />
					</a>
					<a
						href="https://github.com/gregsypek/carpentry2"
						target="_blank"
						rel="noreferrer"
						class="projects__icon projects__icon--github"
					>
						<img src="./public/img/14.svg" alt="arrow view" class="icon" />
					</a>
				</div>
			</div>
			<div class="projects__info">
				<p class="projects__info--about">
					"A web application which I've made for a client. Simple, fully
					responsive website with a fast, scalable, and powerful Node.js RESTful
					APIs. It includes modern authentication with JWT and authorization.
					Allows for all CRUD operations with MongoDB database.",
				</p>
				<p class="projects__info--languages">
					Languages: Node, Express, MongoDB, Mongoose, RESTful API, Pug, Scss
				</p>
			</div>
			<a
				href="https://github.com/gregsypek/carpentrysite/#readme"
				target="_blank"
				rel="noreferrer"
				class="projects__btn btn"
			>
				More
			</a>
		</div>
	);
}
