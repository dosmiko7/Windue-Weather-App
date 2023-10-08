import { styled } from "styled-components";
import Container from "../ui/Container";
import Logo from "../ui/Logo";
import Button from "../ui/Button";
import Window from "../ui/Window";
import { Link } from "react-router-dom";

const StyledStarter = styled(Window)`
	display: flex;
	padding: 3.2rem;
	gap: 2rem;
`;

const ImageContainer = styled(Container)`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
`;
const Image = styled.img`
	height: 100%;
	max-width: auto;
`;

const MessageContainer = styled(Container)`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	background-color: inherit;
`;

const Title = styled.h1`
	margin-top: 1.6rem;
`;

const Subtitle = styled.h3`
	font-weight: var(--font-weight-500);
	font-size: 1.8rem;
	margin-top: 1.6rem;
	margin-bottom: 4.8rem;
`;

const StarterButton = styled(Button)`
	padding: 1.2rem 4.2rem;
`;

const Starter = () => {
	return (
		<StyledStarter>
			<ImageContainer>
				<Image src="/starter.png" />
			</ImageContainer>
			<MessageContainer>
				<Logo variant="huge" />
				<Title>Breeze</Title>
				<Subtitle>Weather App</Subtitle>
				<StarterButton type="common">
					<Link to="/weather">Get started</Link>
				</StarterButton>
			</MessageContainer>
		</StyledStarter>
	);
};

export default Starter;
