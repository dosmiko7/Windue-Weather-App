import { styled } from "styled-components";
import PropTypes from "prop-types";

import List from "../../ui/List";

const StyledForecastList = styled(List)`
	height: 100%;
	padding-bottom: 1.6rem;
	font-size: 1.6rem;
`;

const ForecastList = ({ orientation, internalEls }) => {
	return <StyledForecastList orientation={orientation}>{internalEls}</StyledForecastList>;
};

ForecastList.propTypes = {
	orientation: PropTypes.string,
	internalEls: PropTypes.node.isRequired,
};

/*
<Modal>
	<Modal.Open opens={`${forecast.day}`}>
		<ForecastElement
			key={Math.random()}
			data={item}
			elementType={elementOrientation}
		/>
	</Modal.Open>
	<Modal.Window name={`${forecast.day}`}>
		<ForecastDayDetails details={details} />
	</Modal.Window>
</Modal> 
*/
/*
{forecast.map((item) => (
				<Modal key={Math.random()}>
					<Modal.Open opens={item.day}>
						<ForecastElement
							data={item}
							elementType={elementOrientation}
						/>
					</Modal.Open>
					<Modal.Window name={item.day}>
						<ForecastDayDetails details={item.day} />
					</Modal.Window>
				</Modal>
			))} */

export default ForecastList;
