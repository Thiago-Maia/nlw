//create map
const map = L.map('mapid').setView([-27.2222254,-49.6449585], 15);

// create title layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68]    
})

let marker;

//create and add marker

map.on('click', (event) => {
    const lat = event.latlng.lat;
    const lng = event.latlng.lng;

    document.querySelector('[name=lat]').value = lat;
    document.querySelector('[name=lng]').value = lng;

    //remove icon
    marker && map.removeLayer(marker)

    // add icon layer
    marker = L.marker([lat,lng], {icon})
    .addTo(map)
})

//add photo field

function addPhotoField(){
    //get container #images
    const container = document.querySelector('#images')

    //get container to duplicate
    const fieldsContainer = document.querySelectorAll('.new-upload')

    //clone last add image
    const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true)

    //Check if field is empty
    const input = newFieldContainer.children[0]
    
    // if (input.value ===''){
    //     return
    // }


    //Clear field before adding to #images container
    input.value = ''

    //add the clone to the #images container
    if (fieldsContainer.length <=5){
    
    container.appendChild(newFieldContainer)
    }

}

// remove photo field

function deleteField(event){
    const span = event.currentTarget
    
    const fieldsContainer = document.querySelectorAll('.new-upload')

    if (fieldsContainer.length <= 1){
        span.parentNode.children[0].value = ''
        return
    } 
    
    //delete field
    span.parentNode.remove()
}

// switch yes or no

function toggleSelect(event){
    // remove .active class in all buttons 
    document.querySelectorAll('.button-select button').forEach( button => button.classList.remove('active') )

    //add .active class on clicked button
    const button = event.currentTarget
    button.classList.add('active')

    //update input hidden value
    const input = document.querySelector('[name=open_on_weekends]')
    
    input.value = button.dataset.value

}

function validate(event){
    //validate lat and lng
    event.preventDefault()
    alert('Selecione um ponto no mapa')
}


