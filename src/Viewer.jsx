import React from "react";

function Viewer(props) {
	function createMarkup() {
		return { __html: props.md };
	}

	return (
		<div className="Viewer" dangerouslySetInnerHTML={createMarkup()}></div>
	);
}

export default Viewer;
