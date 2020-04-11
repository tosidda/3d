function drawPolygon(polygon, context) {
    polygon.forEach(point => {
        offsetToCenter(point, context.canvas);
    })
    
    context.beginPath();
    const first = polygon[0];
    context.moveTo(first.x, first.y);
    polygon.forEach(point => {
        context.lineTo(point.x, point.y);
    })
    context.lineTo(first.x, first.y)
    context.stroke();
}

export function drawMesh(mesh, camera, context) {
    context.strokeStyle = mesh.color;
    mesh.polygons.forEach(polygon => {
        const projectedPolygon = polygon.map(point => ({...point}));
        projectedPolygon.forEach(point => {
            mesh.transform(point)
            camera.transform(point);
    })
        drawPolygon(projectedPolygon, context)
    })
}


export function offsetToCenter(point, canvas) {
    point.x += canvas.width / 2;
    point.y += canvas.height / 2;
}