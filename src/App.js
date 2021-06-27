import React, { useState, useEffect } from "react";
import axios from "axios";
import styled from "styled-components";
import "./App.css";
import Character from "./components/Character";
import Expander from "./components/Expander";

export default function App() {
	// Try to think through what state you'll need for this app before starting. Then build out
	// the state properties here.
	const [char, setChar] = useState([]);

	const [currentCharId, setCurrentCharId] = useState("");

	const openDetails = (id) => {
		setCurrentCharId(id);
	};
	const closeDetails = () => {
		setCurrentCharId(null);
	};
	// Fetch characters from the API in an effect hook. Remember, anytime you have a
	// side effect in a component, you want to think about which state and/or props it should
	// sync up with, if any.
	useEffect(() => {
		axios
			.get("https://swapi.dev/api/people")
			.then((res) => {
				console.log(res);
				setChar(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<AppContainer>
			<h1 className="Header">React Wars: Episode IV: A New Axios</h1>
			{char.map((cr) => {
				return <Expander key={cr.url} info={cr} action={openDetails} />;
			})}
			{currentCharId && (
				<Character charId={currentCharId} close={closeDetails} />
			)}
		</AppContainer>
	);
}

const AppContainer = styled.div`
	display: flex;
	align-items: center;
	justif-content: center;
	flex-direction: column;
`;
