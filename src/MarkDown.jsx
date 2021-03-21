import React from "react";

function MarkDown(props) {
	return (
		<div className="MarkDown">
            <h1><code>Copier ici votre MarkDown</code></h1>
			<textarea
				value={props.text}
				onChange={(e) => props.changeHandler(e.target.value)}></textarea>
		</div>
	);
}

export default MarkDown;
