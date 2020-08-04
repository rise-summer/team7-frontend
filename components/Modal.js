import React from "react";
import { View } from "react-native";
import { Button } from "@chakra-ui/core";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const ModalContent = styled.View`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Overlay = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
`;

function ModalView({ show, setShow, children, buttonText, handleButtonClick }) {
  //const [show,setShow] = useState(true);

  const handleClick = () => {
    setShow(false);
    if (handleButtonClick) handleButtonClick();
  };

  if (!show) {
    return;
  }
  return (
    <>
      <Overlay />
      <ModalContent>
        <View>{children}</View>
        <Button onClick={handleClick}>{buttonText}</Button>
      </ModalContent>
    </>
  );
}

ModalView.propTypes = {
  show: PropTypes.bool,
  setShow: PropTypes.func,
  children: PropTypes.View,
  buttonText: PropTypes.any,
  handleButtonClick: PropTypes.bool.isRequired,
};

export default ModalView;
