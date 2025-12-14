# Tic-Tac-Toe Game

A classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript featuring a modern, gradient-based UI design.

![alt text](image.png)

## Features

- **Two-Player Gameplay**: Play against a friend in local multiplayer mode
- **Win Detection**: Automatically detects when a player wins
- **Modern UI**: Beautiful gradient design with smooth animations and hover effects
- **Responsive Design**: Clean and centered layout that works on different screen sizes
- **Reset Functionality**: Restart the game at any time with the reset button

## Game Rules

1. The game is played on a 3x3 grid
2. Player O goes first, followed by Player X
3. Players take turns placing their mark (O or X) in empty squares
4. The first player to get 3 of their marks in a row (horizontally, vertically, or diagonally) wins
5. Click the "Reset Game" button to start a new game

## How to Play

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Player O starts - click any square to place your mark
4. Players alternate turns until someone wins
5. Use the reset button to start a new game

## File Structure

```
Tic-Tac-Toe/
│
├── index.html      # Main HTML structure
├── script.js       # Game logic and interactivity
├── style.css       # Styling and animations
└── README.md       # Project documentation
```

## Technologies Used

- **HTML5**: Structure and layout
- **CSS3**: Styling with gradients, flexbox, and grid layouts
- **JavaScript**: Game logic and DOM manipulation

## Code Highlights

### Win Patterns

The game checks for wins across all possible winning combinations:

- Rows: [0,1,2], [3,4,5], [6,7,8]
- Columns: [0,3,6], [1,4,7], [2,5,8]
- Diagonals: [0,4,8], [2,4,6]

### Styling Features

- Purple gradient background (`#667eea` to `#764ba2`)
- Pink gradient reset button (`#f093fb` to `#f5576c`)
- Smooth hover animations with transform and shadow effects
- Rounded corners and modern typography

## Screenshots

The game features:

- A prominent title at the top that displays "Tic Tac Toe" or the winner
- A 3x3 grid with gradient-colored squares
- A stylish reset button below the grid
- All elements centered on a gradient purple background

## Future Enhancements

Possible improvements:

- Add single-player mode with AI opponent
- Track win/loss statistics
- Add draw/tie detection
- Include sound effects
- Add difficulty levels for AI
- Mobile-responsive optimizations

## License

This project is open source and available for educational purposes.

## Author

Created as a learning project to practice HTML, CSS, and JavaScript fundamentals.
