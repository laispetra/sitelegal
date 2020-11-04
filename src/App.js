import React from 'react'
import styled from "styled-components"

const AppContainer = styled.div`
	text-align: center;
	display: flex;
	flex-direction: column;
	margin-top: 10%;
	align-items: center;
`

function App() {
	return (
        <AppContainer>
			<input placeholder={"Email"}/>
			<input placeholder={"Senha"}/>
			<button>Login</button>
		</AppContainer>

	)
}

export default App
