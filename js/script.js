/** @format */

document.addEventListener("DOMContentLoaded", () => {
  // Array of locations with their respective queries and coordinates
  const locations = [
    {
      country: "Spain",
      day: 1,
      city: "Aviles",
      blurb: "Aviles is a port and industrial city of 79,000 people in the province of Asturias in northwest Spain. It is close to popular beaches such as Salinas. It is home to the Oscar Niemeyer International Cultural Centre, and has important churches like St. Thomas of Canterbury.",
      query: "Niemeyer Aviles Architecture Spain",
      lat: 43.5574125,
      lon: -5.95922,
      embed: `<iframe width="100%" height="240px" frameborder="0" allowfullscreen allow="geolocation" src="//umap.openstreetmap.fr/en/map/day-one_1196621?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=false&editMode=disabled&moreControl=false&searchControl=false&tilelayersControl=false&embedControl=false&datalayersControl=false&onLoadPanel=none&captionBar=false&captionMenus=false&fullscreenControl=false&captionControl=false&locateControl=false&measureControl=false&editinosmControl=false"></iframe>`,
      distance: "24.5 km",
    },
    {
      country: "Spain",
      day: 2,
      city: "Villaviciosa",
      blurb: "Villaviciosa is a town of 14,000 people in the autonomous community of Asturias, Spain. Villaviciosa is important for the production of cider. The town also produces milk and relies on tourism, with natural landscapes and beaches.",
      query: "Villaviciosa Asturias Restaurant Tables asturias",
      lat: 43.4819348,
      lon: -5.4359576,
      embed: `<iframe width="100%" height="240px" frameborder="0" allowfullscreen allow="geolocation" src="//umap.openstreetmap.fr/en/map/day-two_1196625?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=false&editMode=disabled&moreControl=false&searchControl=false&tilelayersControl=false&embedControl=false&datalayersControl=false&onLoadPanel=none&captionBar=false&captionMenus=false&fullscreenControl=false&captionControl=false&locateControl=false&measureControl=false&editinosmControl=false"></iframe>`,
      distance: "59.7 km",
    },
    {
      country: "Spain",
      day: 3,
      city: "Llanes",
      blurb: "Llanes is a municipality of the province of Asturias, in northern Spain. Stretching for about 30 km along the coast at the extreme east of the province, Llanes is bounded to the south by the high ridge of the limestone Sierra del Cuera, which rises to over 1,100 m. The region is part of the Costa Verde (Green Coast) of Spain, which is known for its spectacular coastal scenery, with 32 white sand beaches, and mountains covered with a deep green mantle. Llanes lies to the north of the Picos de Europa, a mountain range whose geology is almost entirely of limestone karst.",
      query: "Llanes Casino Asturias Apain city house summer blue urban spain path villa palm tree housing arch walkway flagstone gothic arch",
      lat: 43.5574125,
      lon: -5.95922,
      embed: `<iframe width="100%" height="240px" frameborder="0" allowfullscreen allow="geolocation" src="//umap.openstreetmap.fr/en/map/day-three_1196627?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=false&editMode=disabled&moreControl=false&searchControl=false&tilelayersControl=false&embedControl=false&datalayersControl=false&onLoadPanel=none&captionBar=false&captionMenus=false&fullscreenControl=false&captionControl=false&locateControl=false&measureControl=false&editinosmControl=false"></iframe>`,
      distance: "69 km",
    },
    {
      country: "Spain",
      day: 4,
      city: "Panes",
      blurb: "Panes is a small village in the province of Asturias, Spain. It is located in the Picos de Europa National Park, a mountain range that is part of the Cantabrian Mountains. The village is known for its natural beauty and outdoor activities.",
      query: "Siejo Panes asturias+city+spain",
      lat: 43.5574125,
      lon: -5.95922,
      embed: `<iframe width="100%" height="240px" frameborder="0" allowfullscreen allow="geolocation" src="//umap.openstreetmap.fr/en/map/day-4_1197161?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=false&editMode=disabled&moreControl=false&searchControl=false&tilelayersControl=false&embedControl=false&datalayersControl=false&onLoadPanel=none&captionBar=false&captionMenus=false&fullscreenControl=false&captionControl=false&locateControl=false&measureControl=false&editinosmControl=false"></iframe>`,
      distance: " km",
    },
    {
      country: "Spain",
      day: 5,
      city: "San Miguel de Meruelo",
      blurb: "San Miguel de Meruelo is a small village in the province of Cantabria, Spain. It is located near the coast and is known for its natural beauty and outdoor activities.",
      query: "San Miguel de Meruelo cantabria city spain",
      lat: 43.45684,
      lon: -3.5885774,
      embed: `<iframe width="100%" height="240px" frameborder="0" allowfullscreen allow="geolocation" src="//umap.openstreetmap.fr/en/map/day-5_1197165?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=false&editMode=disabled&moreControl=false&searchControl=false&tilelayersControl=false&embedControl=false&datalayersControl=false&onLoadPanel=none&captionBar=false&captionMenus=false&fullscreenControl=false&captionControl=false&locateControl=false&measureControl=false&editinosmControl=false"></iframe>`,
      distance: "23.1 km",
    },
    {
      country: "Spain",
      day: 6,
      city: "Bilbao",
      blurb: "Bilbao is a city in northern Spain, the largest city in the province of Biscay and in the Basque Country as a whole. It is also the largest city proper in northern Spain. Bilbao is the tenth largest city in Spain, with a population of 345,141 as of 2015. The Bilbao metropolitan area has 1,037,847 inhabitants, making it one of the most populous metropolitan areas in northern Spain; with a population of 875,552 the comarca of Greater Bilbao is the fifth-largest urban area in Spain. Bilbao is also the main urban area in what is defined as the Greater Basque region.",
      query: "Bilbao Basque Country Pais Vasco Euskadi Bilbo city spain",
      lat: 43.2934209,
      lon: -2.9760184,
      embed: `<iframe width="100%" height="240px" frameborder="0" allowfullscreen allow="geolocation" src="//umap.openstreetmap.fr/en/map/day-7_1197170?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=false&editMode=disabled&moreControl=false&searchControl=false&tilelayersControl=false&embedControl=false&datalayersControl=false&onLoadPanel=none&captionBar=false&captionMenus=false&fullscreenControl=false&captionControl=false&locateControl=false&measureControl=false&editinosmControl=false"></iframe>`,
      distance: "87.8 km",
    },
  ];

  // Unsplash API access key
  const unsplashAccessKey = "rnjGieQZV-KCxq4gNAQziWChZAduuhToEOmgsaikRlk";

  const container = document.getElementById("container");
  if (!container) {
    console.error("Container element not found");
    return;
  }

  // Random orientation function with the three options of unsplash
  function getRandomOrientation() {
    const random = Math.random();
    if (random < 0.33) {
      return "landscape";
    } else if (random < 0.66) {
      return "portrait";
    } else {
      return "squarish";
    }
  }

  const cardGroup = document.createElement("div");
  cardGroup.className = "row";
  container.appendChild(cardGroup);

  // When creating each card, add placeholder dimensions
  locations.forEach((location) => {
    const card = document.createElement("div");
    card.className = "card";

    const orientation = getRandomOrientation();

    const img = document.createElement("img");
    img.className = "location-img shadow";
    img.alt = `Hopefully this is an image of ${location.city}`;

    // Add a placeholder size while loading
    if (orientation === "landscape") {
      img.style.minHeight = "200px";
    } else if (orientation === "portrait") {
      img.style.minHeight = "300px";
    } else {
      // For squarish images
      img.style.minHeight = "250px";
      img.style.minWidth = "250px";
    }

    // Add a loading state class
    card.classList.add("loading-card");

    // Add onload handler to trigger Masonry reflow
    img.onload = function () {
      card.classList.remove("loading-card");
      if (msnry) {
        // Force Masonry to recalculate layout
        setTimeout(() => msnry.layout(), 10);
      }
    };

    // Format query for Unsplash by replacing + with spaces
    const formattedQuery = location.query.replace(/\+/g, " ");

    // Fetch images based on the query values from Unsplash API with random orientation and return only one image
    fetch(
      `https://api.unsplash.com/search/photos?query=${formattedQuery}&orientation=${orientation}&per_page=1`,
      {
        // Authorization header with access key for unsplay api
        headers: {
          Authorization: `Client-ID ${unsplashAccessKey}`,
        },
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `Unsplash API responded with status: ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        if (data.results && data.results.length > 0) {
          img.src = data.results[0].urls.regular;

          // attribution required by unsplash API
          const attribution = document.createElement("small");
          attribution.className = "text-muted unsplash-attribution";
          attribution.innerHTML = `Photo by <a href="${data.results[0].user.links.html}?utm_source=Bootcamp_2025_Project&utm_medium=referral" target="_blank">${data.results[0].user.name}</a> on <a href="https://unsplash.com/?utm_source=Bootcamp_2025_Project&utm_medium=referral" target="_blank">Unsplash</a>`;

          // Add to card body later
          card.dataset.attribution = attribution.outerHTML;
        } else {
          img.src = "https://via.placeholder.com/300x200";
          img.onload(); // Trigger layout immediately for placeholder
        }
      })
      .catch((error) => {
        console.error("Error fetching image from Unsplash:", error);
        img.src = "https://via.placeholder.com/300x200";
        img.onload(); // Trigger layout immediately for placeholder
      });

    const cardHeader = document.createElement("div");
    cardHeader.className = "card-header border-0 bg-warning p-2";

    const cardBody = document.createElement("div");
    cardBody.className = "card-body p-2";

    const cardTitle = document.createElement("h5");
    cardTitle.className = "card-title";
    cardTitle.textContent = `Day  ${location.day}: to ${location.city}, ${location.country}`;

    // const cardText = document.createElement("p");
    // cardText.className = "card-text";
    // cardText.textContent = `Latitude: ${location.lat}, Longitude: ${location.lon}`;

    const routeEmbed = document.createElement("div");
    routeEmbed.className = "route-embed d-flex justify-content-center mb-3";
    routeEmbed.innerHTML = location.embed;

    card.appendChild(cardHeader);
    card.appendChild(cardBody);
    cardHeader.appendChild(cardTitle);
    
    // cardBody.appendChild(cardText);
    cardBody.appendChild(routeEmbed);
    cardBody.appendChild(img);
   

    // Create accordion div
    const accordionDiv = document.createElement("div");
    accordionDiv.className = "accordion mt-2";
    const accordionId = `accordion-${location.country}-${location.day}`;
    accordionDiv.id = accordionId;

    // Create accordion item
    const accordionItem = document.createElement("div");
    accordionItem.className = "accordion-item";

    // Create accordion header
    const accordionHeader = document.createElement("h2");
    accordionHeader.className = "accordion-header";
    const headerId = `heading-${location.country}-${location.day}`;
    accordionHeader.id = headerId;

    // Create accordion button
    const accordionButton = document.createElement("button");
    accordionButton.className = "accordion-button p-2 border-0 collapsed";
    accordionButton.type = "button";
    accordionButton.setAttribute("data-bs-toggle", "collapse");
    accordionButton.setAttribute(
      "data-bs-target",
      `#collapse-${location.country}-${location.day}`
    );
    accordionButton.setAttribute("aria-expanded", "false");
    accordionButton.setAttribute(
      "aria-controls",
      `collapse-${location.country}-${location.day}`
    );
    accordionButton.textContent = "Route Details";

    // Create accordion collapse div
    const accordionCollapse = document.createElement("div");
    accordionCollapse.id = `collapse-${location.country}-${location.day}`;
    accordionCollapse.className = "accordion-collapse collapse";
    accordionCollapse.setAttribute("aria-labelledby", headerId);
    accordionCollapse.setAttribute("data-bs-parent", `#${accordionId}`);

    // Create accordion body
    const accordionBody = document.createElement("div");
    accordionBody.className = "accordion-body p-3";
    accordionBody.innerHTML = `
    <p><strong>Distance:</strong> ${location.distance}</p>
    <p><strong>Destination:</strong> ${location.city}, ${location.country}</p>
    <p>${location.blurb}</p>
    <p><small><strong>Latitude:</strong> ${location.lat}, <strong>Longitude:</strong> ${location.lon}</small></p>
`;

    // Assemble accordion
    accordionHeader.appendChild(accordionButton);
    accordionItem.appendChild(accordionHeader);
    accordionCollapse.appendChild(accordionBody);
    accordionItem.appendChild(accordionCollapse);
    accordionDiv.appendChild(accordionItem);

    // Add accordion to card
    cardBody.appendChild(accordionDiv);

    // Add attribution after image is loaded
    img.onload = function () {
      card.classList.remove("loading-card");

      // Add attribution if it exists
      if (card.dataset.attribution) {
        const attributionDiv = document.createElement("div");
        attributionDiv.className = "card-footer p-1";
        attributionDiv.innerHTML = card.dataset.attribution;
        card.appendChild(attributionDiv);
      }

      if (msnry) {
        setTimeout(() => msnry.layout(), 10);
      }
    };

    cardGroup.appendChild(card);
  });

  // Define msnry at a higher scope
  let msnry;

  // Initialize Masonry with more robust settings
  imagesLoaded(cardGroup, function () {
    setTimeout(() => {
      msnry = new Masonry(cardGroup, {
        itemSelector: ".card",
        gutter: 0,
        percentPosition: false,
        isAnimated: true,
        resize: true,
      });

      // Additional layout call after a delay
      setTimeout(() => msnry.layout(), 1000);

      // And another just to be extra safe
      setTimeout(() => msnry.layout(), 2000);
    }, 300);
  });

  // Add window resize and orientation change handlers
  window.addEventListener("resize", function () {
    if (msnry) setTimeout(() => msnry.layout(), 100);
  });

  window.addEventListener("orientationchange", function () {
    if (msnry) setTimeout(() => msnry.layout(), 200);
  });

  // Listen for Bootstrap collapse events and update Masonry layout
  // This makes the layout get pushed around if the accordion is opened or closed.
  document.addEventListener("shown.bs.collapse", function (event) {
    // When any accordion is opened
    if (msnry) {
      setTimeout(() => msnry.layout(), 5);
    }
  });

  document.addEventListener("hidden.bs.collapse", function (event) {
    // When any accordion is closed
    if (msnry) {
      setTimeout(() => msnry.layout(), 5);
    }
  });
});
