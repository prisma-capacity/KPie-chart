import styled, { DefaultLayout } from "styled-components";

const defaultLayout: DefaultLayout = {
  columns: 'auto-fit',
  alignment: 'center',
  autoRows: 'auto',
  templateRows: 'auto'
}

export const KPieLayout = styled.div<DefaultLayout>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || defaultLayout.columns}, minmax(100px, 1fr));
  align-items: ${props => props.alignment || defaultLayout.alignment};
  justify-items: ${props => props.alignment || defaultLayout.alignment};
  grid-gap: 5%;
  grid-auto-rows: ${props => props.autoRows || defaultLayout.autoRows};
  grid-template-rows: ${props => props.templateRows || defaultLayout.templateRows};
`
