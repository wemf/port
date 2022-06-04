  // Hike View handler
export default class HikesView {
    constructor() {
        // will need this
        this.imgBasePath = '//byui-cit.github.io/cit261/examples/';
    }

    renderHikeList(parent, hikeList) {
        parent.innerHTML = '';
        // loop through our list of hikes building out the appropriate HTML for each and append it to the listElement
        hikeList.forEach(hike => {
            parent.appendChild(this.renderOneHikeLight(hike));
        });
    }

    renderHikeOne(parent, hike) {
        parent.innerHTML = '';
        parent.appendChild(this.renderOneHikeFull(hike));
    }
    

    renderOneHikeLight(hike) {
        // this method will be used to create the list of hikes with less detail: name, image, distance, difficulty 
        const item = document.createElement("li");
        item.id = hike.name;
        item.setAttribute('data-name', hike.name);
        item.innerHTML = ` 
        <article class="hike_article">
            <h2 class="subtitle">${hike.name}</h2>
            <div class="hike_content">
                <img class="image" src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
                <div class="hike_content_list">
                    <div class="hike_content_item">
                        <h3>Distance</h3>
                        <p>${hike.distance}</p>
                    </div>
                    <div class="hike_content_item">
                        <h3>Difficulty</h3>
                        <p>${hike.difficulty}</p>
                    </div>
                </div>
            </div>
        </article>`;
        
        return item;
    }

    renderOneHikeFull(hike) {
        // this method will be used to one hike with full detail...you will need this for the stretch goal! 
        const item = document.createElement("li");
        item.id = hike.name;
        item.setAttribute('data-name', hike.name);
        item.innerHTML = ` 
        <article class="hike_article">
            <h2 class="subtitle">${hike.name}</h2>
            <div class="hike_content">
                <img class="image" src="${this.imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
                <div class="hike_content_list">
                    <div class="hike_content_item">
                        <h3>Distance</h3>
                        <p>${hike.distance}</p>
                    </div>
                    <div class="hike_content_item">
                        <h3>Difficulty</h3>
                        <p>${hike.difficulty}</p>
                    </div>
                    <div class="hike_content_item">
                        <h3>Description</h3>
                        <p>${hike.description}</p>
                    </div>
                    <div class="hike_content_item">
                        <h3>Directions</h3>
                        <p>${hike.directions}</p>
                    </div>
                </div>
            </div>
        </article>`;

        return item
    }
}