import React, { useState, useEffect, useCallback } from "react";
import { ChromePicker } from "react-color";
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;
`;

const Title = styled.h5`
  font-weight: 600;
  color: #32324d;
  font-size: 0.75rem;
  line-height: 1.33;
  span {
    color: #d02b20;
    font-size: 0.875rem;
    line-height: 0;
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  margin-top: 4px;
  width: auto;
  align-items: center;
  border: 1px solid #dcdce4;
  border-radius: 4px;
  background: #ffffff;
  height: 2.5rem;
  outline: none;
  max-width: 12.4rem;
`;

const Message = styled.p`
  font-weight: 600;
  color: #32324d;
  font-size: 0.8rem;
  padding-right: 1rem;
  padding-left: 1rem;
`;

const ColorWindow = styled.button`
  background-color: ${(props) => props.color};
  width: 4rem;
  height: 1.8rem;
  border-radius: 0.4rem;
  &:hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.6);
  }
`;

const PopOver = styled.div`
  position: absolute;
  z-index: 20;
  top: -30px;
  left: 0;
`;

const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
`;

const ColorPicker = (props) => {
  const [showPicker, setShowPicker] = useState(false);
  const [currentColor, setCurrentColor] = useState(
    props.value || props.attribute.default || "#FFFFFF"
  );

  /**
   * Makes the color value available to the document for database update
   * @param {string} colorValue - in hex format
   */
  const updateColorValue = useCallback(
    (colorValue) => {
      props.onChange({ target: { name: props.name, value: colorValue } });
    },
    [props.onChange, props.name]
  );

  /**
   * Handle color change from the the color picker
   * @param {string} color - in hex format
   */
  const handleChangeComplete = useCallback((result) => {
    const { r, g, b, a } = result.rgb;
    const color = `rgba(${r}, ${g}, ${b}, ${a})`;
    setCurrentColor(color);
    updateColorValue(color)
  }, []);

  useEffect(() => {
    if (!props.value) {
      updateColorValue(currentColor);
    }
  }, []);

  return (
    <Wrapper>
      <Title>
        {props.name}
        {props.required && <span>*</span>}
      </Title>
      <InnerWrapper>
        <Message>Select a color: </Message>
        <ColorWindow color={currentColor} onClick={() => setShowPicker(true)} />
      </InnerWrapper>
      {showPicker ? (
        <PopOver>
          <Cover onClick={() => setShowPicker(false)} />
          <ChromePicker color={currentColor} onChange={handleChangeComplete} />
        </PopOver>
      ) : null}
    </Wrapper>
  );
};

export default ColorPicker;
