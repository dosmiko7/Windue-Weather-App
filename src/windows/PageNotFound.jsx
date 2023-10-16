import { styled } from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack";

import Container from "../ui/Container";
import Button from "../ui/Button";

const StyledPageNotFound = styled(Container)`
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1.6rem;
	text-align: center;
	width: 80rem;
	height: 60rem;
	padding: 3rem;
`;

const Heading = styled.h1`
	font-size: 4rem;
`;

const PageNotFound = () => {
	const moveBack = useMoveBack();

	return (
		<StyledPageNotFound>
			<Heading as="h1">The page you are looking for could not be found 😢</Heading>
			<Button
				onClick={moveBack}
				type="common"
			>
				&larr; Go back
			</Button>
		</StyledPageNotFound>
	);
};

export default PageNotFound;
