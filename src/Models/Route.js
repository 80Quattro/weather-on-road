import Coordinates from "./Coordinates";

class Route {

    constructor(d) {

        this.places = new Array();
        for(let i = 0; i < d.bbox.length; i+=2) {
            this.places.push( new Coordinates( d.bbox[i + 1], d.bbox[i] ) );
        }

        this.distance = d.features[0].properties.summary.distance;
        this.duration = d.features[0].properties.summary.duration;

        this.points = new Array();

        d.features[0].geometry.coordinates.forEach((e, i) => {
            
            let dist = 0
            
            // calculate distance between previous point and current
            if(i !== 0) {
                const prev = this.points[i-1].coordinates; 
                dist = Math.abs(Math.sqrt( (e[0] - prev.long)*(e[0] - prev.long) + (e[1] - prev.lat)*(e[1] - prev.lat) ));
            }

            this.points.push({
                coordinates: new Coordinates(e[1], e[0]),
                distance: dist
            })

        });

    }

}

export default Route;