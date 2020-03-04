<div align="right"><a target="myNextJob" href="https://www.prisma-capacity.eu/careers#job-offers">
    <img class="inline" src="prisma.png">
</a></div>

# KPie-chart

This is a lightweight, simple chart for tracking KPIs

# Dependencies

It depends on the [EasyPieChart](https://github.com/jolo-dev/easypiechart-v2) with the respective options.

<table>
    <tr>
        <th>Property (Type)</th>
        <th>Default</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Renderer</td>
        <td>Canvas</td>
        <td>Render-Engine in order to output the Chart</td>
    </tr>
    <tr>
        <td><strong>barColor</strong></td>
        <td>#ef1e25</td>
        <td>The color of the curcular bar. You can either pass a valid css color string, or a function that takes the current percentage as a value and returns a valid css color string.</td>
    </tr>
    <tr>
        <td><strong>trackColor</strong></td>
        <td>#f2f2f2</td>
        <td>The color of the track, or false to disable rendering.</td>
    </tr>
    <tr>
        <td><strong>scaleColor</strong></td>
        <td>#dfe0e0</td>
        <td>The color of the scale lines, false to disable rendering.</td>
    </tr>
    <tr>
        <td><strong>scaleLength</strong></td>
        <td>5</td>
        <td>Length of the scale lines (reduces the radius of the chart).</td>
    </tr>
    <tr>
        <td><strong>lineCap</strong></td>
        <td>round</td>
        <td>Defines how the ending of the bar line looks like. Possible values are: <code>butt</code>, <code>round</code> and <code>square</code>.</td>
    </tr>
    <tr>
        <td><strong>lineWidth</strong></td>
        <td>3</td>
        <td>Width of the chart line in px.</td>
    </tr>
    <tr>
        <td><strong>size</strong></td>
        <td>110</td>
        <td>Size of the pie chart in px. It will always be a square.</td>
    </tr>
        <tr>
        <td><strong>rotate</strong></td>
        <td>0</td>
        <td>Rotation of the complete chart in degrees.</td>
    </tr>
    <tr>
        <td><strong>animate</strong></td>
        <td>object</td>
        <td>Object with time in milliseconds and boolean for an animation of the bar growing (<code>{ duration: 1000, enabled: true }</code>), or false to deactivate animations.</td>
    </tr>
    <tr>
        <td><strong>easing</strong></td>
        <td>defaultEasing</td>
        <td>Easing function or string with the name of a <a href="http://gsgd.co.uk/sandbox/jquery/easing/" target="_blank">jQuery easing function</a></td>
    </tr>
</table>

# Example

```javascript
import * as React from "react";
import * as ReactDOM from "react-dom";
import { KPieLayout } from "./KPieLayout";
import { KPie } from "./KPie";

var mountNode = document.getElementById("app");
ReactDOM.render(
  <>
    <KPieLayout columns={2}>
      <KPie
        value={100}
        threshold={40}
        target={80}
        options={{
          barColor: "#69c",
          scaleColor: "#00378b",
          lineWidth: 15
        }}
      />
      <KPie
        value={80}
        threshold={40}
        target={80}
        options={{
          barColor: "#9bbfd4",
          scaleColor: false,
          lineWidth: 20,
          lineCap: "circle"
        }}
      />
      <KPie
        value={75}
        threshold={40}
        target={80}
        options={{
          barColor: "#fdf65a",
          lineWidth: 15,
          lineCap: "circle"
        }}
      />
      <KPie
        value={60}
        threshold={40}
        target={80}
        options={{
          renderer: "SVG",
          lineWidth: 20
        }}
      />
    </KPieLayout>
    <KPieLayout columns={3}>
      <KPie
        value={20}
        threshold={40}
        target={80}
        options={{
          barColor: "#69c",
          scaleColor: "#00378b",
          lineWidth: 15
        }}
      />
      <KPie
        value={80}
        threshold={40}
        target={80}
        options={{
          barColor: "#9bbfd4",
          scaleColor: false,
          lineWidth: 20,
          lineCap: "circle"
        }}
      />
      <KPie
        value={75}
        threshold={40}
        target={80}
        options={{
          barColor: "#fdf65a",
          lineWidth: 15,
          lineCap: "circle"
        }}
      />
      <KPie
        value={100}
        threshold={40}
        target={80}
        options={{
          renderer: "SVG",
          barColor: "#2C3E50",
          // scaleColor: false,
          lineWidth: 20
          // lineCap: "circle"
        }}
      />
    </KPieLayout>
  </>,
  mountNode
);
```
