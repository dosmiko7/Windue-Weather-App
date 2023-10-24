import styled from "styled-components";
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import { HiXMark } from "react-icons/hi2";

import Button from "./Button";

const Overlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100vh;
	background-color: var(--backdrop-color-1);
	backdrop-filter: blur(5px);
	z-index: 10;
	transition: all 0.5s;
`;

const StyledModal = styled.div`
	position: fixed;
	left: 50%;
	top: 50%;
	transform: translate(-50%, -50%);
	border-radius: 20px;
	box-shadow: 0 5px 20px 0 var(--backdrop-color-1);
	background-color: var(--background-color-1);
	border: 1px solid var(--background-color-3);
	backdrop-filter: blur(30px);
`;

const CloseButton = styled(Button)`
	position: absolute;
	top: 0;
	right: 0;
	width: 4.8rem;
	height: 4.8rem;
	font-size: 3.2rem;
	transform: translate(50%, -50%);
	transition: all 0.3s;
`;

const ModalContext = createContext();

const Modal = ({ children }) => {
	const [modalName, setModalName] = useState("");
	const open = setModalName;
	const close = () => setModalName("");

	return <ModalContext.Provider value={{ modalName, open, close }}>{children}</ModalContext.Provider>;
};

const Open = ({ children, opens: modalName }) => {
	const { open } = useContext(ModalContext);
	return cloneElement(children, { onClick: () => open(modalName) });
};

const Window = ({ children, name }) => {
	const { modalName, close } = useContext(ModalContext);

	if (name !== modalName) return null;

	return createPortal(
		<Overlay>
			<StyledModal>
				<CloseButton
					type="close"
					onClick={close}
				>
					<HiXMark />
				</CloseButton>
				{children}
			</StyledModal>
		</Overlay>,
		document.body
	);
};

Modal.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};
Open.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	modalName: PropTypes.string,
};
Window.propTypes = {
	children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
	name: PropTypes.string,
};

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
