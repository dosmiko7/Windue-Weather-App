import styled from "styled-components";
import PropTypes from "prop-types";

import List from "../../ui/List";
import ListElement from "../../ui/ListElement";
import Container from "../../ui/Container";

const detailsName = {
	carbon: "Carbon Monoxide",
	nitrogen: "Nitrogen dioxide",
	ozone: "Ozone",
	sulphur: "PM10",
	pm10: "PM2.5",
	pm2_5: "Sulphur dioxide",
};

const StyledAirDetails = styled(Container)`
	width: 42rem;
	height: 48rem;
`;

const DetailList = styled(List)`
	height: 100%;
`;

const DetailElement = styled(ListElement)`
	justify-content: space-around;
`;

const DetailName = styled.h4`
	color: var(--font-color-1);
`;

const DetailValue = styled.span`
	color: var(--font-color-2);
	font-weight: var(--font-weight-500);
`;

const AirDetails = ({ details }) => {
	return (
		<StyledAirDetails>
			<DetailList orientation="vertical">
				{Object.keys(details).map((key) => (
					<DetailElement key={Math.random()}>
						<DetailName>{detailsName[key]} (μg/m3)</DetailName>
						<DetailValue>{details[key]}</DetailValue>
					</DetailElement>
				))}
			</DetailList>
		</StyledAirDetails>
	);
};

AirDetails.propTypes = {
	details: PropTypes.object,
};

export default AirDetails;
