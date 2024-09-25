window.onload = function() {
    var chart = new CanvasJS.Chart("chartContainer", {
        animationEnabled: true,
        theme: "light2", // "light1", "dark1", "dark2"
        title: {
            text: "Ventas de Productos"
        },
        axisY: {
            title: "Cantidad Vendida"
        },
        data: [{
            type: "column",
            showInLegend: true,
            legendMarkerColor: "grey",
            legendText: "Productos",
            dataPoints: [
                { y: 300, label: "Producto A" },
                { y: 200, label: "Producto B" },
                { y: 100, label: "Producto C" },
                { y: 150, label: "Producto D" },
                { y: 250, label: "Producto E" }
            ]
        }]
    });
    chart.render();
}
