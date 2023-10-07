import { styled } from "styled-components";
import Search from "../features/Search";
import BasicInfo from "../features/BasicInfo";
import Container from "./Container";
import TodayForecast from "../features/Forecast/TodayForecast";
import AirCondition from "../features/Air/AirConditions";

const StyledMain = styled(Container)`
	display: grid;
	grid-template-rows: 1fr 4fr 4fr 4fr;
	row-gap: 1.2rem;
	background-color: transparent;
	padding-top: 0;
	padding-bottom: 0;
`;

const Main = () => {
	return (
		<StyledMain>
			<Search />
			<BasicInfo />
			<TodayForecast />
			<AirCondition />
		</StyledMain>
	);
};

export default Main;
