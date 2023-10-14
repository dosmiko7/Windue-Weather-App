import { styled } from "styled-components";
import PropTypes from "prop-types";

const ImageContainer = styled.div``;

const Image = styled.img``;

const ForecastCondition = ({ condition }) => {
	return (
		<ImageContainer>
			<Image
				src={condition.icon}
				alt={condition.text}
			/>
		</ImageContainer>
	);
};

ForecastCondition.propTypes = {
	condition: PropTypes.object.isRequired,
};

export default ForecastCondition;
