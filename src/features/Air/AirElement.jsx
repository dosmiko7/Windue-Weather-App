import { styled } from "styled-components";
import PropTypes from "prop-types";

const StyledAirElement = styled.div`
	display: flex;
	gap: 1.2rem;
`;

const SymbolContainer = styled.div``;

const Info = styled.div`
	display: flex;
	flex-direction: column;
	gap: 0.6rem;
	padding-bottom: 0.8rem;
`;

const InfoTitle = styled.h5`
	font-weight: var(--font-weight-400);
`;

const InfoData = styled.span`
	color: var(--font-color-2);
	font-weight: var(--font-weight-500);
	font-size: 3.2rem;
`;

const additionalSymbols = {
	"Real Feel": "℃",
	Humidity: "%",
	Pressure: "hPa",
};

const AirElement = ({ symbol, title, data }) => {
	const additionalSymbol = additionalSymbols[title] || "";

	return (
		<StyledAirElement>
			<SymbolContainer>{symbol}</SymbolContainer>
			<Info>
				<InfoTitle>{title}</InfoTitle>
				<InfoData>
					{data} {additionalSymbol}
				</InfoData>
			</Info>
		</StyledAirElement>
	);
};

AirElement.propTypes = {
	symbol: PropTypes.node.isRequired,
	title: PropTypes.string.isRequired,
	data: PropTypes.number.isRequired,
};

export default AirElement;
