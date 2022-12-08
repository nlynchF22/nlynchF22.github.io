//Defining the different elements that are needed
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




drp_2.options[drp_2.selectedIndex].Innerhtml
//Code for when the 'submit all' button is clicked
btn.addEventListener("click", function Submit() {
  display.innerHTML = ''
  let drp1 = drp_1.options[drp_1.selectedIndex].innerHTML
  let drp2 = drp_2.options[drp_2.selectedIndex].innerHTML
  let filteredFrames = []  
  for(frames in table.frames){
    if (table.frames[frames].range == drp2 || drp2 == ""){
      filteredFrames.push(table.frames[frames])
    }
  }
  let filteredFrames2 = []
  for(let i = 0; filteredFrames.length>i; i++){
    if (filteredFrames[i].type == drp1 || drp1 == ""){
      filteredFrames2.push(filteredFrames[i])
    }
  }
  for(let i = 0; filteredFrames2.length>i; i++){
    let url = document.createElement('a')
    url.href = filteredFrames2[i].url
    display.appendChild(url)
    
url.appendChild(document.createTextNode(filteredFrames2[i].url));    
    display.appendChild(document.createElementNS("http://www.w3.org/1999/xhtml", "br"));
  }
});
