import * as React from 'react';
import { EasyPieChart } from 'easy-pie-chart-typescript/src/easyPieChart';

interface KPieProps {
    value: number | string;
    target: number;
    threshold: number;
    options?: any;
}

export class KPie extends React.Component<KPieProps> {

    private _id:string;
    constructor(props){
        super(props);
        this._id = Math.random().toString(36).substring(7);
    }

    componentDidMount(){
        new EasyPieChart(document.getElementById(this._id), this.props.options)
    }
    render(){
        return (<div id={this._id} className='kpie' data-percent={this.props.value}></div>
        );
    }

    
}