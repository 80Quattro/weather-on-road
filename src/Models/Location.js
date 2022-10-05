import Coordinates from "./Coordinates";

class Location {

    constructor(d) {
        this.name = d.properties.display_name;
        this.coordinates = new Coordinates(d.geometry.coordinates[0], d.geometry.coordinates[1]);
    }

}

export default Location;