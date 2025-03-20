document.addEventListener('DOMContentLoaded', () => {
    const locations = [
        { country: 'USA', city: 'New York', query: 'new+york+usa', lat: 40.7128, lon: -74.0060 },
        { country: 'Spain', city: 'Santander', query: 'santander+spain', lat: 43.4365368, lon: -3.8446119 },
        { country: 'Spain', city: 'Oviedo', query: 'oviedo+spain', lat: 43.3619, lon: -5.8494 }
    ];

    const apiKey = '49447382-1655d1524abc8eae430cd387c';

    const container = document.getElementById('container');
    if (!container) {
        console.error('Container element not found');
        return;
    }
    const cardGroup = document.createElement('div');
    cardGroup.className = 'row row-cols-1 row-cols-md-3 g-4 card-group';
    container.appendChild(cardGroup);

    locations.forEach(location => {
        fetch(`https://pixabay.com/api/?key=${apiKey}&q=${location.query}&image_type=photo&orientation=horizontal&lat=${location.lat}&lon=${location.lon}`)
            .then(response => response.json())
            .then(data => {
                if (data.hits.length > 0) {
                    const col = document.createElement('div');
                    col.className = 'col';
    
                    const card = document.createElement('div');
                    card.className = 'card mb-3';
    
                    const img = document.createElement('img');
                    img.src = data.hits[0].webformatURL;
                    img.className = 'card-img-top';
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
    

    // locations.forEach(location => {
    //     fetch(`https://pixabay.com/api/?key=${apiKey}&q=${location.query}&image_type=photo&orientation=horizontal&lat=${location.lat}&lon=${location.lon}`)
    //         .then(response => response.json())
    //         .then(data => {
    //             if (data.hits.length > 0) {
    //                 const col = document.createElement('div');
    //                 col.className = 'col';

    //                 const card = document.createElement('div');
    //                 card.className = 'card mb-3';

    //                 const img = document.createElement('img');
    //                 img.src = data.hits[0].webformatURL;
    //                 img.className = 'card-img-top';
    //                 img.alt = `${location.city}, ${location.country}`;

    //                 const cardBody = document.createElement('div');
    //                 cardBody.className = 'card-body';

    //                 const cardTitle = document.createElement('h5');
    //                 cardTitle.className = 'card-title';
    //                 cardTitle.textContent = `${location.city}, ${location.country}`;

    //                 const listGroup = document.createElement('ul');
    //                 listGroup.className = 'list-group list-group-flush';

    //                 const listItem1 = document.createElement('li');
    //                 listItem1.className = 'list-group-item';  
    //                 listItem1.textContent = 'Item 1';  

    //                 cardBody.appendChild(cardTitle);
    //                 card.appendChild(img);
    //                 card.appendChild(cardBody);
    //                 listGroup.appendChild(listItem1);
    //                 col.appendChild(card);
    //                 cardGroup.appendChild(col);
                    
    //             } else {
    //                 console.error(`No images found for ${location.city}, ${location.country}`);
    //             }
    //         })
    //         .catch(error => console.error('Error fetching data:', error));
    // });
    
});



