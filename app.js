//Defining the different elements that are needed for the program to work
const btn = document.getElementById("btn")
const drp_1 = document.getElementById("class")
const drp_2 = document.getElementById("range")
const display = document.getElementById("js_display")
//Defining the table and the required elements for filtering
const table = {
  frames: {
    
    'Excalibur': {
      range: 'Close-Range',
      type: 'Fighter',
      url: 'Excalibur.html'
    },
    'Frost': {
      range: 'Mid-Range',
      type: 'Tank',
      url: 'Frost.html'
    },
    'Limbo': {
      range: 'Mid/Long-Range',
      type:  'Fighter',
      url: 'Limbo.html'
    },
    'Loki': {
      range: 'Close-Range',
      type: 'Support',
      url: 'Loki.html'
    },
    'Mag': {
      range: 'Close/Mid-Range',
      type: 'Fighter',
      url: 'Mag.html'
    },
    'Oberon': {
      range: 'Close-Range',
      type: 'Support',
      url: 'Oberon.html'
    },
    'Octavia': {
      range: 'Mid-Range',
      type: 'Support',
      url: 'Octavia.html'
    },
    'Rhino': {
      range: 'Close-Range',
      type: 'Tank',
      url: 'Rhino.html'
    },
    'Umbra': {
      range: 'Close-Range',
      type:'Fighter',
      url: 'Umbra.html'
    },
    'Volt': {
      range: 'Mid/Long-Range',
      type: 'Fighter',
      url: 'Volt.html'
    }    
  }
}




//Code for when the 'submit all' button is clicked
btn.addEventListener("click", function Submit() {
  // Clears all links for Frames after the sumbit button is clicked
  display.innerHTML = ''
  // Gets information from the inputs of the dropdowns
  let drp1 = drp_1.options[drp_1.selectedIndex].innerHTML
  let drp2 = drp_2.options[drp_2.selectedIndex].innerHTML
  // makes first filtered list
  let filteredFrames = []  
  // Filters for the range of the Frames
  for(frames in table.frames){
    if (table.frames[frames].range == drp2 || drp2 == ""){
      filteredFrames.push(table.frames[frames])
    }
  }
  // Makes the second filtered list
  let filteredFrames2 = []
  // Filters for the class of the Frames
  for(let i = 0; filteredFrames.length>i; i++){
    if (filteredFrames[i].type == drp1 || drp1 == ""){
      filteredFrames2.push(filteredFrames[i])
    }
  }
  // Gets url for tagged Frames
  for(let i = 0; filteredFrames2.length>i; i++){
    let url = document.createElement('a')
    url.href = filteredFrames2[i].url
    display.appendChild(url)

// Displays the links for the Frames
url.appendChild(document.createTextNode(filteredFrames2[i].url));
// Puts breaks between each links so they are on seperate lines
display.appendChild(document.createElementNS("http://www.w3.org/1999/xhtml", "br"));
  }
});

