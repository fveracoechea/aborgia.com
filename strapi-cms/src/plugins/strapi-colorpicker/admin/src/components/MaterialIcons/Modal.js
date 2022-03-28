import React, { useCallback, useEffect, useMemo, useState } from "react";
import { BaseButton } from "@strapi/design-system/BaseButton";
import {
  ModalLayout,
  ModalHeader,
  ModalBody,
} from "@strapi/design-system/ModalLayout";
import { Searchbar } from "@strapi/design-system/Searchbar";
import debounce from "lodash/debounce";
import chunk from "lodash/chunk";
import { defaultCellRangeRenderer, Grid } from "react-virtualized";

const cellRenderer =
  (onClick, data) =>
  ({ columnIndex, key, rowIndex, style }) => {
    const icon = data[rowIndex][columnIndex];
    if (!icon) return null;
    return (
      <div key={key} style={{ ...style, padding: "8px" }}>
        <BaseButton
          onClick={onClick(icon)}
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            overflow: "hidden",
          }}
        >
          <span
            style={{ fontSize: 48, color: "#4b4b4b" }}
            className="material-icons md-48"
          >
            {icon.value}
          </span>
          <span
            style={{
              margin: "6px 0 0 0",
              color: "#4b4b4b",
              fontSize: "12px",
            }}
          >
            {icon.name}
          </span>
        </BaseButton>
      </div>
    );
  };

const Modal = ({ onClick, searchIndex, onClose, icons }) => {
  const [keys, setKeys] = useState(null);
  const [query, setQuery] = useState("");

  const onClear = useCallback(() => {
    setQuery("");
  }, []);

  const onQueryChange = useCallback(
    (event) => setQuery(event.target.value),
    []
  );

  const updateSearchResults = useMemo(
    () =>
      debounce((value) => {
        if (value === "") {
          setKeys(null);
        } else {
          searchIndex.searchAsync(value).then((results) => {
            setKeys(results);
          });
        }
      }, 220),
    []
  );

  const data = useMemo(
    () =>
      chunk(
        keys === null
          ? icons
          : keys.map((key) => icons.find((i) => i.name === key)),
        6
      ),
    [keys]
  );

  const render = useMemo(() => cellRenderer(onClick, data), [onClick, data]);

  useEffect(() => {
    updateSearchResults(query);
    return () => {
      updateSearchResults.cancel();
    };
  }, [query, updateSearchResults]);

  return (
    <ModalLayout
      onClose={onClose}
      labelledBy="icon-modal"
      style={{ width: 1060 + 48, maxHeight: "unset" }}
    >
      <ModalHeader>
        <Searchbar
          autoFocus
          placeholder="Search icons…"
          clearLabel="clear"
          name="icon-picker"
          onClear={onClear}
          value={query}
          onChange={onQueryChange}
        >
          Material icons:
        </Searchbar>
        <h4>{icons?.length} icons</h4>
      </ModalHeader>
      <ModalBody
        style={{
          padding: 24,
          width: 1060 + 48,
          height: 680 + 48,
          maxHeight: "unset",
        }}
      >
        <Grid
          columnWidth={176}
          columnCount={data?.[0]?.length || 0}
          rowCount={data?.length || 0}
          rowHeight={113}
          height={680}
          width={1060}
          cellRenderer={render}
        />
      </ModalBody>
    </ModalLayout>
  );
};

export default Modal;
