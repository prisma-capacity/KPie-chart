import * as React from "react";
import * as ReactDOM from "react-dom";
import { KPieLayout } from "./KPieLayout";

interface Props {
    name?: string;
}

export class KPie extends React.Component<Props> {
    render() {
      return  <div className="kpie-charts">
                  Hello {this.props.name}
              </div>;
    }
  }
  
  var mountNode = document.getElementById("app");
  ReactDOM.render(
      <div>
        <KPieLayout columns={3}>
            <KPie name='John'/>
            <KPie name='Jane'/>
            <KPie name='Salome'/>
        </KPieLayout>
      </div>
    , mountNode);