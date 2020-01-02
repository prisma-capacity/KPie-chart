import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { KPieLayout } from './KPieLayout';
import { KPie } from './KPie';


var mountNode = document.getElementById("app");
ReactDOM.render(
    <div>
        <KPieLayout columns={3}>
            <KPie name='John' />
            <KPie name='Jane' />
            <KPie name='Salome' />
        </KPieLayout>
    </div>
    , mountNode);