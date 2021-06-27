// Write your Character component here
import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import empimg from "./img/implogo.jpg";

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
		<div>
			<Container>
				<Details>Details</Details>
				{details && (
					<>
						<CharInfo>
							Identification: {details.name}
							<br></br>
							Birth Year: {details.birth_year}
							<br></br>
							Height: {details.height}cm Weight: {details.mass} kg
							<br></br>
							Gender Identification: {details.gender} <br></br>
							Epidermal color: {details.skin_color}
							<br></br>
							Hair Color: {details.hair_color}
							<br></br>
							Eye Color: {details.eye_color}
						</CharInfo>
					</>
				)}
				<Close onClick={close}>Close Database Entry</Close>
			</Container>
		</div>
	);
}

const Container = styled.div`
	display: flex;
	align-items: center;
	border: 2px solid black;
	flex-direction: column;
	width: 20rem;
	background-color: white;
	background-image: url(${empimg});
	background-size: 100% 100%;
	margin: 1%;
`;

const Details = styled.h2`
	color: white;
	text-shadow: 2px 1px #a50202;
`;

const CharInfo = styled.p`
	color: white;
	text-shadow: 2px 1px #a50202;
	padding: 1%;
`;

const Close = styled.button`
	background-color: maroon;
	border-radius: 25%;
	display: inline-flex;
`;
