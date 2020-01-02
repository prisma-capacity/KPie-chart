import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const KPieLayout = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, minmax(100px, 1fr));
  align-items: ${props => props.alignment};
  justify-items: ${props => props.alignment};
  grid-gap: 1%;
  grid-auto-rows: ${props => props.autoRows};
  grid-template-rows: ${props => props.templateRows};
`

KPieLayout.defaultProps = {
    columns: 'auto-fit',
    alignment: 'center',
    autoRows: 'auto',
    templateRows: 'auto'
}

export class KPie extends React.Component {
  render() {
    return  <div className="kpie-charts">
                Hello {this.props.name}
            </div>;
  }
}

var mountNode = document.getElementById("app");
ReactDOM.render(
    <KPieLayout columns="2">
      <KPie name='John'/>
      <KPie name='Jane'/>
      <KPie name='Salome'/>
    </KPieLayout>
  , mountNode);