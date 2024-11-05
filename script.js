const container = document.getElementById('container');
const resizeButton = document.getElementById('resize-button');

function createGrid(squaresPerSide) {
  // Clear any existing squares from the container
  container.innerHTML = '';

  // Calculate the size of each square based on the container size
  const squareSize = 960 / squaresPerSide;

  // Create the new grid
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement('div');
    square.classList.add('grid-square');

    // Set width and height for each square to make them fit the grid
    square.style.width = `${squareSize}px`;
    square.style.height = `${squareSize}px`;

    // Add hover effect to each square
    square.addEventListener('mouseenter', () => {
      square.classList.add('hovered');
    });

    container.appendChild(square);
  }
}

// Function to prompt user for grid size and reset the grid
function setGridSize() {
  let squaresPerSide = parseInt(prompt("Enter the number of squares per side (max 100):"), 10);

  // Validate user input
  if (Number.isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100) {
    alert("Please enter a valid number between 1 and 100.");
    return;
  }

  // Create the new grid with the specified size
  createGrid(squaresPerSide);
}

// Initialize the grid with a default size
//createGrid(100);

// Add event listener to the button to reset the grid on click
resizeButton.addEventListener('click', setGridSize);
