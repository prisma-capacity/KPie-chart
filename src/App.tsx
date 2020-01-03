import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { KPieLayout } from './KPieLayout';
import { KPie } from './KPie';


var mountNode = document.getElementById("app");
ReactDOM.render(
    <div>
        <KPieLayout columns={2}>
            <KPie 
                value={20}
                threshold={40}
                target={80}
                options={{
                    barColor: '#69c',
                    scaleColor: '#00378b',
                    lineWidth: 15
                }}
            />
            <KPie 
                value={80}
                threshold={40}
                target={80}
                options={{
                    barColor:'#9bbfd4',
                    scaleColor:false,
                    lineWidth:20,
                    lineCap:'circle'
                }}
            />
            <KPie 
                value={75}
                threshold={40}
                target={80}
                options={{
                    barColor:'#fdf65a',
                    lineWidth:15,
                    lineCap:'circle'
                }}
            />
            <KPie 
                value={100}
                threshold={40}
                target={80}
                options={{
                    renderer: "SVG",
                    barColor:'#2C3E50',
                    scaleColor:false,
                    lineWidth:20,
                    lineCap:'circle'
                }}
            />
        </KPieLayout>
        <KPieLayout columns={1}>
            <KPie 
                value={20}
                threshold={40}
                target={80}
                options={{
                    barColor: '#69c',
                    scaleColor: '#00378b',
                    lineWidth: 15
                }}
            />
            <KPie 
                value={80}
                threshold={40}
                target={80}
                options={{
                    barColor:'#9bbfd4',
                    scaleColor:false,
                    lineWidth:20,
                    lineCap:'circle'
                }}
            />
            <KPie 
                value={75}
                threshold={40}
                target={80}
                options={{
                    barColor:'#fdf65a',
                    lineWidth:15,
                    lineCap:'circle'
                }}
            />
            <KPie 
                value={100}
                threshold={40}
                target={80}
                options={{
                    renderer: "SVG",
                    barColor:'#2C3E50',
                    scaleColor:false,
                    lineWidth:20,
                    lineCap:'circle'
                }}
            />
        </KPieLayout>
    </div>
    , mountNode);