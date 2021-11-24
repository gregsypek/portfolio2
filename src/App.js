import "./scss/main.css";

function App() {
	return (
		// <div className="App">
		<nav className="home__nav">
			<ul className="home__nav-list">
				<li className="home__nav--name">Grzegorz Sypek</li>
				<li className="home__nav--title">Frontend Developer</li>
				<li className="home__nav--about">
					<a href="#projects" className="home__nav--link">
						Projects
					</a>
				</li>
			</ul>
		</nav>
	);
}

export default App;
