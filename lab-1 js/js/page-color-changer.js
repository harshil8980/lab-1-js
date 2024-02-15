document.addEventListener("DOMContentLoaded", function() {
    const redSlider = document.getElementById('red');
    const greenSlider = document.getElementById('green');
    const blueSlider = document.getElementById('blue');
    const colorPreview = document.getElementById('colorPreview');
    function updateColor()
    {
        const redValue = redSlider.value;
        const greenValue = greenSlider.value;
        const blueValue = blueSlider.value;
        const color = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
        colorPreview.style.backgroundColor = color;
    }
    redSlider.addEventListener('input', updateColor);
    greenSlider.addEventListener('input', updateColor);
    blueSlider.addEventListener('input', updateColor);
    // Initial update
    updateColor();
});
