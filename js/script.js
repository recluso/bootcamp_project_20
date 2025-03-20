document.addEventListener('DOMContentLoaded', () => {
    // const locations = [
    //     { country: 'Spain', city: 'Aviles', query: 'aviles+avilés+asturias+city+spain', lat: 43.5574125, lon: -5.95922 },
    //     { country: 'Spain', city: 'Santander', query: 'santander+travel+city+spain', lat: 43.4365368, lon: -3.8446119 },
    //     { country: 'Spain', city: 'Oviedo', query: 'oviedo+travel+city+spain', lat: 43.3619, lon: -5.8494 }
    // ];

    const locations = [
        { country: 'Spain', city: 'Aviles', query: 'aviles+avilés+asturias+city+spain', lat: 43.5574125, lon: -5.95922 },
        { country: 'Spain', city: 'Santander', query: 'santander+travel+city+spain', lat: 43.4365368, lon: -3.8446119 },
        { country: 'Spain', city: 'Oviedo', query: 'oviedo+travel+city+spain', lat: 43.3619, lon: -5.8494 },
        { country: 'France', city: 'Paris', query: 'paris+city+france', lat: 48.8566, lon: 2.3522 },
        { country: 'Italy', city: 'Rome', query: 'rome+city+italy', lat: 41.9028, lon: 12.4964 },
        { country: 'Germany', city: 'Berlin', query: 'berlin+city+germany', lat: 52.52, lon: 13.405 },
        { country: 'USA', city: 'New York', query: 'new+york+city+usa', lat: 40.7128, lon: -74.0060 },
        { country: 'Japan', city: 'Tokyo', query: 'tokyo+city+japan', lat: 35.6762, lon: 139.6503 },
        { country: 'Brazil', city: 'Rio de Janeiro', query: 'rio+de+janeiro+city+brazil', lat: -22.9068, lon: -43.1729 },
        { country: 'India', city: 'Mumbai', query: 'mumbai+city+india', lat: 19.0760, lon: 72.8777 },
        { country: 'Australia', city: 'Sydney', query: 'sydney+city+australia', lat: -33.8688, lon: 151.2093 },
        { country: 'UK', city: 'London', query: 'london+city+uk', lat: 51.5074, lon: -0.1278 },
        { country: 'Mexico', city: 'Mexico City', query: 'mexico+city+mexico', lat: 19.4326, lon: -99.1332 },
        { country: 'Egypt', city: 'Cairo', query: 'cairo+city+egypt', lat: 30.0444, lon: 31.2357 },
        { country: 'Canada', city: 'Toronto', query: 'toronto+city+canada', lat: 43.651070, lon: -79.347015 },
        { country: 'Russia', city: 'Moscow', query: 'moscow+city+russia', lat: 55.7558, lon: 37.6173 },
        { country: 'China', city: 'Beijing', query: 'beijing+city+china', lat: 39.9042, lon: 116.4074 }
    ];
    

    const apiKey = '49447382-1655d1524abc8eae430cd387c';

    const container = document.getElementById('container');
    if (!container) {
        console.error('Container element not found');
        return;
    }
    const cardGroup = document.createElement('div');
    cardGroup.className = 'row';
    cardGroup.setAttribute('data-masonry', '{"percentPosition": true }');  // Add the data-masonry attribute
    container.appendChild(cardGroup);


    // locations.forEach(location => {
    //     // Fetching images based on landscape and outdoor category, with lat/lon filtering
    //     fetch(`https://pixabay.com/api/?key=${apiKey}&q=landscape+outdoor&image_type=photo&lat=${location.lat}&lon=${location.lon}&orientation=horizontal&per_page=5`)
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data.hits.length > 0) {
    //                 data.hits.forEach(image => {
    //                     console.log('Image URL:', image.webformatURL);  // Display the URL of the images
    //                 });
    //             } else {
    //                 console.log(`No images found for coordinates: (${location.lat}, ${location.lon})`);
    //             }
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // });


    

    locations.forEach(location => {
        fetch(`https://pixabay.com/api/?key=${apiKey}&q=${location.query}&lat=${location.lat}&lon=${location.lon}`)
            .then(response => response.json())
            .then(data => {
                if (data.hits.length > 0) {
                    const col = document.createElement('div');
                    col.className = 'col-sm-6 col-lg-4 mb-4';
    
                    const card = document.createElement('div');
                    card.className = 'card';
    
                    const img = document.createElement('img');
                    img.src = data.hits[0].webformatURL;
                    img.className = 'pcard-img-top';
                    img.alt = `${location.city}, ${location.country}`;
    
                    const cardBody = document.createElement('div');
                    cardBody.className = 'card-body';
    
                    const cardTitle = document.createElement('h5');
                    cardTitle.className = 'card-title';
                    cardTitle.textContent = `${location.city}, ${location.country}`;
    
                    // Create the list group (ul)
                    const listGroup = document.createElement('ul');
                    listGroup.className = 'list-group list-group-flush';
    
                    // Create list item(s) (li)
                    const listItem1 = document.createElement('li');
                    listItem1.className = 'list-group-item';
                    listItem1.textContent = 'Item 1';  
    
                    // Append the list item to the list group
                    listGroup.appendChild(listItem1);
    
                    // Append the card title and the list group to the card body
                    cardBody.appendChild(cardTitle);
                    cardBody.appendChild(listGroup);  // Append listGroup here to the card body
    
                    // Append the image and card body to the card
                    card.appendChild(img);
                    card.appendChild(cardBody);
    
                    // Append the card to the column
                    col.appendChild(card);
    
                    // Append the column to the card group (make sure cardGroup exists)
                    cardGroup.appendChild(col);
                    
                } else {
                    console.error(`No images found for ${location.city}, ${location.country}`);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    });

  
});



