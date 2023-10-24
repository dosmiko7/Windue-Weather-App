import styled from "styled-components";
import PropTypes from "prop-types";
import Image from "../../ui/Image";

const ImageContainer = styled.div``;

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
