import React from "react";
import styled from "styled-components";

export default function Expander({ info, action }) {
	return (
		<Character>
			{info.name}:
			<Expand onClick={() => action(info.url)}>Imperial Database Entry</Expand>
		</Character>
	);
}

const Character = styled.div`
	font-size: 2rem;
	font-weight: bold;
`;
const Expand = styled.button`
	background-color: maroon;
	border-radius: 20%;
	display: inline-flex;
	font-size: 1.2rem;
`;
