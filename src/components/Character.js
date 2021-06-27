// Write your Character component here
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

export default function Character(props) {
	const { charId, close } = props;
	const [details, setDetails] = useState(null);

	useEffect(() => {
		axios
			.get(`${charId}`)
			.then((data) => {
				console.log(data.data);
				setDetails(data.data);
			})
			.catch((err) => console.log(err));
	}, [charId]);
	return (
		<div className="Container">
			<h2 className="Details">Details</h2>
			{details && (
				<>
					<p className="CharInfo">
						Name: {details.name}
						<br></br>
						Height: {details.height}cm
					</p>
				</>
			)}
			<button onClick={close}>Close</button>
		</div>
	);
}
