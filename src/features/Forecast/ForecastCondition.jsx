import { styled } from "styled-components";
import PropTypes from "prop-types";

const ImageContainer = styled.div``;

const Image = styled.img``;

// TODO: transform condition into image
const ForecastCondition = ({ condition }) => {
	return (
		<ImageContainer>
			{condition.text}
			<Image />
		</ImageContainer>
	);
};

ForecastCondition.propTypes = {
	condition: PropTypes.string.isRequired,
};

export default ForecastCondition;
