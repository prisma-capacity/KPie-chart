<div align="right"><a target="myNextJob" href="https://www.prisma-capacity.eu/careers#job-offers">
    <img class="inline" src="prisma.png">
</a></div>

# KPie-chart
This is a lightweight, simple chart for tracking KPIs

# Example
```
<KPieLayout
    columns:number
    alignment:string
    title:string
    style:{}
>
    <KPie
        value:number
        target:number
        threshold:number
        options:{}
    />
</KPieLayout>
