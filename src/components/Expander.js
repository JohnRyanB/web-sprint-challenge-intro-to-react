import React from "react";

export default function Expander({ info, action }) {
	return (
		<div className="Character">
			{info.name}
			<button onClick={() => action(info.url)}>Imperial Database Entry</button>
		</div>
	);
}
