import MarkDown from "./MarkDown";
import Viewer from "./Viewer";
import "./App.css";
import { useState } from "react";
import Marked from "marked";

function App() {
	const [text, setText] = useState(
		"# `Viewer MarkDown`\n\n### Cas d'utilisation:\n* *italique*\n* **gras**\n* `monospace`\n* ~~barré~~\n*# h1\n* ## h2\n* ### h3\n* #### etc..."
	);

	const changeHandler = (a) => setText(a);

	return (
		<div className="App">
			<MarkDown text={text} changeHandler={changeHandler} />
			<Viewer md={Marked(text)} />
		</div>
	);
}

export default App;
