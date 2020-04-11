function updateMap(){

	console.log("Updating map with realtime data")
	fetch("/data.json")
	.then(response=> response.json())
	.then(rsp => {

		rsp.data.forEach(element =>{
			latitude = element.latitude;
			longitude = element.longitude;

			cases = element.infected;
			if(cases>255){                
				color= "rgb(255, 0, 0)";
			}
			else{
				color = `rgb(${cases}, 0, 0)`;
			}
			// coloring according to cases..more no of cases more darker the color

			// red marker on the map
			new mapboxgl.Marker({
				draggable: false,
				color: color
				})
				.setLngLat([longitude, latitude])
				.addTo(map);
		});
	})
}
let interval = 20000; // if we consider map updates every 20 seconds. ideally should be  1 hour
setInterval( updateMap, interval); 

