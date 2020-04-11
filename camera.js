function perscpective(point, distance) {
    const fov = point.z - distance;
    point.x /= fov;
    point.y /= fov;
}

function zoom(point, factor) {
    const scale = Math.pow(factor, 2);
    point.x *= scale;
    point.y *= scale;
}

export class Camera {
    constructor() {
        this.pos = {z: 100};
        this.zoom = 8;
    }

    transform(point) {
        perscpective(point, this.pos.z);
        zoom(point, this.zoom);
    }
}