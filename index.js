function updateMap() {
    fetch("/data.json")
        .then(response => response.json())
        .then(data => {
            console.log(data.data)
            data.data.forEach(element => {
                latitude = element.latitude;
                longitude = element.longitude;

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(255, 0, 0)"
                })
                .setLngLat([-95.7129,37.0902])    //united-states-1
                .addTo(map);
                
                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(255, 0, 0)"
                    
                })
                .setLngLat([104.1954,35.8617])  //china-2
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(255, 0, 0)"
                })
                .setLngLat([138.2529,36.2048])  //japan-3
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(255, 0, 0)"
                })
                .setLngLat([10.4515,51.1657])  //germany- 4
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(255, 0, 0)"
                })
                .setLngLat([-0.118092,51.509865])  //united-kingdom-5
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 255, 0)"
                })
                .setLngLat([78.9629,20.5937])  //india-6
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 255, 0)"
                })
                .setLngLat([2.2137,46.2276])  //france-7
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 255, 0)"
                })
                .setLngLat([12.5674,41.8719])  //italy-8
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 255, 0)"
                })
                .setLngLat([106.3468,56.1304])  //canada-9
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 255, 0)"
                })
                .setLngLat([127.7669,35.9078])  //south-korea-10
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(255, 255, 0)"
                })
                .setLngLat([105.3188,61.5240])  //russia-11
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(255, 255, 0)"
                })
                .setLngLat([51.9253,14.2350])  //brazil-12
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(255, 255, 0)"
                })
                .setLngLat([133.7751,25.2744])  //australia-13
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(255, 255, 0)"
                })
                .setLngLat([3.7492,40.4637])  //spain-14
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(255, 255, 0)"
                })
                .setLngLat([113.9213,0.7893])  //indonesia-15
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([72.866287,19.009809])  //maharastra
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([78.132690,11.059821])  //tamil-nadu
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([79.826660,28.207609])  //uttar-pradesh
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([72.136230,22.309425])  //gujrat
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([104.1954,35.8617])  //karnatak
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([87.747803,22.978624])  //westbengal
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([73.432617,27.391277])  //rajasthan
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([80.00,16.00])  //andrapradesh
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([78.387451,11.059821])  //telengana
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([77.947998,23.473324])  //madhyapradesh
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([76.271080,10.850516])  //kerala
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([77.12,28.38])  //delhi
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([76.040497,29.065773])  //hariyana
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([85.32,25.11])  //bihar
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([84.803467,20.940920])  //odisha
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(0, 0, 255)"
                })
                .setLngLat([75.5,30.4])  //punjub
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([81.828232,21.295132])  //Chhattisgarh
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([92.537842,26.244156])  //assam
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([85.30,23.45])  //jharkhand
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([79.15,30.15])  //uttarakhand
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([74.54,32.44])  //jammu-kashmir
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([75.10,32.29])  //himachalpradesh
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([72.12,28.38])  //goa
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([91.6761,23.5639])  //tripura
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([76.47,30.44])  //chandigarh
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([79.53,11.56])  //Puducherry
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([91.00,25.30])  //meghalaya
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([93.58,24.44])  //manipur
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([88.3,27.3])  //sikim
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([94.20,26.00])  //nagaland
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([95.00,28.00])  //Arunachal Pradesh
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([20.52,23.30])  //mizoram
                .addTo(map);

                new mapboxgl.Marker({
                    draggable: false,
                    color: "rgb(143, 0, 255)"
                })
                .setLngLat([92.6586401,11.7400867])  //Andaman and Nicobar Island
                .addTo(map);
                
                
                
                
                
                


            });
        })
}
updateMap()


// navigator.geolocation.getCurrentPosition(successLocation, errorLocation, {
//     enableHighAccuracy: true
// })

// function successLocation(position) {
//     console.log(position)
//     setupMap([position.coords.longitude ,position.coords.latitude ])
// }
// function errorLocation() {
//     setupMap([-87.3198819,22.4256613])
// }
// function setupMap(center){
    // var map = new mapboxgl.Map({
    //     container: 'map',
    //     style: 'mapbox://styles/mapbox/streets-v11',
    //     zoom: 1,
    //     center: [0,20]
    //   });
// }
