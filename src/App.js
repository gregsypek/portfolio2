import "./scss/main.css";
import data from "./data";
import Nav from "./Nav";
import Home from "./Home";
import About from "./About";
import Project from "./Project";

function App() {
	const projects = data.data.projects.map((project) => (
		<Project
			title={project.title}
			description={project.description}
			liveLink={project.liveLink}
			readmeLink={project.readmeLink}
			languages={project.languages}
			images={project.images[0]}
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
