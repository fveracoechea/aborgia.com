import React, { useState, useCallback, useEffect } from "react";
import { Index as FlexSearchIndex } from "flexsearch";
import { TextInput } from "@strapi/design-system/TextInput";
import { Button } from "@strapi/design-system/Button";
import styled from "styled-components";
import { useMaterialIcons } from "./hooks";
import Modal from "./Modal";

const searchIndex = new FlexSearchIndex({
  tokenize: "full",
});

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;

  & > div {
    margin-right: 12px;
  }
`;

export const MaterialIcons = (props) => {
  const [value, setValue] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const icons = useMaterialIcons(searchIndex);

  const onClose = useCallback(() => setIsVisible(false), []);
  const onOpen = useCallback(() => setIsVisible(true), []);
  const onClick = useCallback(
    ({ value }) =>
      () => {
        props.onChange({ target: { name: props.name, value } });
        setValue(value);
        onClose();
      },
    [props.nam, onClose]
  );

  useEffect(() => {
    if (props.value) {
      setValue(props.value);
    }
  }, []);

  return (
    <Wrapper>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      <TextInput
        disabled
        value={value}
        label={props.name}
        name={props.name}
        required={props.required}
      />

      <Button onClick={onOpen} style={{ height: 40 }}>
        Select icon
      </Button>

      {value && (
        <span
          style={{
            fontSize: 36,
            color: "#4b4b4b",
            display: "inline-block",
            paddingLeft: "8px",
          }}
          className="material-icons md-48"
        >
          {value}
        </span>
      )}

      {isVisible && (
        <Modal
          searchIndex={searchIndex}
          icons={icons}
          onClick={onClick}
          onClose={onClose}
        />
      )}
    </Wrapper>
  );
};

