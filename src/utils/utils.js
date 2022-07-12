

function shadeColor(color, percentage) {
    let R = parseInt(color.substring(1, 3), 16);
    let G = parseInt(color.substring(3, 5), 16);
    let B = parseInt(color.substring(5, 7), 16);

    const RR = shadeColorComputation(R, percentage);
    const GG = shadeColorComputation(G, percentage);
    const BB = shadeColorComputation(B, percentage);

    return "#"+RR+GG+BB;

}

function shadeColorComputation(element, percentage) {
    let newElement = parseInt(element * (100 + percentage) / 100);
    newElement = (newElement < 255 ? newElement : 255);
    newElement = (newElement.toString(16).length === 1) ? "0" + newElement.toString(16) : newElement.toString(16);
    return newElement
}

function getRandomColour() {
    let bgColour = Math.floor(Math.random() * 16777215).toString(16);
    bgColour = "#" + ("000000" + bgColour).slice(-6);
    return bgColour;
  
}

export { shadeColor, getRandomColour };