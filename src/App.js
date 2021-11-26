import "./scss/main.css";
import React from "react";
import data from "./data";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Project from "./Project";

function App() {
	const allPhotos = data.data.projects.map((project) => project.images);

	const setSlides = allPhotos.map((photo) => photo[0]);
	const [displayPhoto, setDisplayPhoto] = React.useState(setSlides);

	function nextImage(index) {
		const currentProject = data.data.projects[index];
		if (index === currentProject.images.length - 1) index = 0;
		let currentPhoto = displayPhoto[index];
		const currentPhotoIndex = currentProject.images.indexOf(currentPhoto);
		// console.log(displayPhoto);
		// console.log("currentPhoto", currentPhoto);
		console.log("eeeee", currentProject.images[currentPhotoIndex + 1]);

		setDisplayPhoto((prevState) =>
			prevState.map((img) =>
				img === currentPhoto
					? currentProject.images[currentPhotoIndex + 1]
					: img
			)
		);
	}

	const projects = data.data.projects.map((project, i) => (
		<Project
			key={project.id}
			title={project.title}
			description={project.description}
			liveLink={project.liveLink}
			readmeLink={project.readmeLink}
			languages={project.languages}
			// images={project.images[`${photos[i]}`]}
			images={displayPhoto[i]}
			nextImage={() => nextImage(project.id)}
		/>
	));

	return (
		<>
			<section className="home" id="home">
				<Nav />
				<Home />
			</section>
			<section className="about" id="about">
				<About />
			</section>
			<section className="projects" id="projects">
				<h2 className="projects__title">My Websites & Apps</h2>
				<div className="projects__boxes">{projects}</div>
			</section>
		</>
	);
}

export default App;
