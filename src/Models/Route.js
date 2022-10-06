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

                dist = this.#distance(prev.lat, prev.long, e[1], e[0]);
            }

            this.points.push({
                coordinates: new Coordinates(e[1], e[0]),
                distance: dist
            })

        });

    }

    #distance(lat1, lon1, lat2, lon2) {

        const R = 6371e3; // metres
        const φ1 = lat1 * Math.PI/180; // φ, λ in radians
        const φ2 = lat2 * Math.PI/180;
        const Δφ = (lat2-lat1) * Math.PI/180;
        const Δλ = (lon2-lon1) * Math.PI/180;

        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

        const dist = R * c; // in metres

        return dist;

    }

}

export default Route;