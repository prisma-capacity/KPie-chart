import styled from "styled-components";

interface DefaultLayout {
  columns?: number | "auto-fit";
  alignment?: string;
  autoRows?: number | string;
  templateRows?: string;
}

const defaultLayout: Required<DefaultLayout> = {
  columns: "auto-fit",
  alignment: "center",
  autoRows: "auto",
  templateRows: "auto"
};

export const KPieLayout = styled.div<DefaultLayout>`
  display: grid;
  grid-template-columns: repeat(
    ${({ columns = defaultLayout.columns }) => columns},
    minmax(100px, 1fr)
  );
  align-items: ${({ alignment = defaultLayout.alignment }) => alignment};
  justify-items: ${({ alignment = defaultLayout.alignment }) => alignment};
  grid-gap: 5%;
  grid-auto-rows: ${({ autoRows = defaultLayout.autoRows }) => autoRows};
  grid-template-rows: ${({ templateRows = defaultLayout.templateRows }) =>
    templateRows};
`;
