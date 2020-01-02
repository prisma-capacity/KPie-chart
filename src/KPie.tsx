import * as React from 'react';

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