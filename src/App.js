import "./scss/main.css";
import React from "react";
import data from "./data";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import More from "./More";
import Footer from "./Footer";

function App() {
	const allPhotos = data.data.projects.map((project) => project.images);

	//Set first picture for each project
	const setSlides = allPhotos.map((photo) => photo[0]);

	const [displayPhoto, setDisplayPhoto] = React.useState(setSlides);

	let currentProject, currentPhoto, currentPhotoIndex;

	function findCurrentPhotoIndex(projectId) {
		currentProject = data.data.projects[projectId];
		currentPhoto = displayPhoto[projectId];
		currentPhotoIndex = currentProject.images.indexOf(currentPhoto);
	}

	function nextImage(projectId) {
		findCurrentPhotoIndex(projectId);
		if (currentPhotoIndex === currentProject.images.length - 1) {
			currentPhotoIndex = 0;
		} else {
			currentPhotoIndex = currentPhotoIndex + 1;
		}

		setDisplayPhoto((prevState) =>
			prevState.map((img) =>
				img === currentPhoto ? currentProject.images[currentPhotoIndex] : img
			)
		);
	}
	function prevImage(projectId) {
		findCurrentPhotoIndex(projectId);
		if (currentPhotoIndex === 0) {
			currentPhotoIndex = currentProject.images.length - 1;
		} else currentPhotoIndex = currentPhotoIndex - 1;

		setDisplayPhoto((prevState) =>
			prevState.map((img) =>
				img === currentPhoto ? currentProject.images[currentPhotoIndex] : img
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
			images={displayPhoto[i]}
			nextImage={() => nextImage(project.id)}
			prevImage={() => prevImage(project.id)}
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
			<section className="more" id="contact">
				<More />
			</section>
			<Footer />
		</>
	);
}

export default App;
