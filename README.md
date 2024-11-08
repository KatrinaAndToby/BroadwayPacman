# Pac-Man Game Animation Project

## How to Interact with the Work
To interact with this Pac-Man animation project:
- Use the arrow keys (up, down, left, right) to control Pac-Man's movement on the canvas.
- The goal is to navigate Pac-Man to eat all the moving red and blue blocks on the grid.
- Score points each time Pac-Man successfully "eats" a block.
- The game ends when all red and blue blocks are eaten, and a victory message will appear on the canvas.
- The canvas is responsive, and resizing the browser window will adjust the canvas accordingly.

## Individual Approach to Animating the Group Code
My approach focuses on user interaction to drive the animation. By using the arrow keys, users control the direction of Pac-Man's movement and interact with the grid-based environment. This approach enhances the sense of gameplay and engagement, making the experience more immersive.

## Chosen Method to Drive Animation
I chose **interaction** as the primary method to drive the animation in my individual code. Users interact directly with the project by navigating Pac-Man using their keyboard, influencing the movement and interactions within the canvas.

## Animated Properties and Unique Features
- **Pac-Man Animation**: Pac-Man's mouth opens and closes as he moves across the grid, creating the classic chomping effect. The angle of the mouth changes depending on the direction (up, down, left, or right).
- **Movement and Collision Detection**: Pac-Man moves within the bounds of the grid and stops when reaching non-road areas. He "eats" red and blue blocks when close enough, and these blocks disappear, adding to the score.
- **Score Display**: The current score is displayed on the canvas and updates each time a block is eaten.
- **Victory Message**: A congratulatory message appears when all red and blue blocks are eaten, pausing the game.

### Unique Aspects
- Unlike other group members who may have focused on color changes or size adjustments, my code emphasizes **movement** and **interaction** with the environment, allowing the user to actively play the game.
- The **dynamic collision detection** system ensures that Pac-Man interacts with blocks realistically by checking proximity and removing blocks upon contact.

## References and Inspiration
- **Classic Arcade Games**: Since the drawing mainly combines yellow, red and blue, my primary inspiration came from the original Pac-Man arcade game which is alse based on yellow, red and blue! Focusing on recreating the iconic movement and block-eating behavior.
- **Pixel Art and Game Design**: The colors and blocky aesthetics were influenced by retro pixel art, giving the game a nostalgic look.
- **Interactive Tutorials**: Online tutorials on keyboard controls and p5.js documentation helped solidify the implementation of interactive movements.

## Technical Explanation
### How the Code Works
1. **Canvas Setup**: The canvas is initialized and centered with `createCanvas()` in the `setup()` function.
2. **Movement Handling**: Keyboard events are used to set the direction of Pac-Man. The `keyPressed()` and `keyReleased()` functions manage continuous movement while the arrow keys are held.
3. **Animation Logic**: Pac-Man's mouth opens and closes using a `pacmanAngle` variable that alternates between states. The angle changes dynamically based on the direction of movement.
4. **Collision Detection**: The `checkCollision()` function checks the distance between Pac-Man and the red/blue blocks. If Pac-Man is close enough, the block is removed, and the score increases.
5. **Victory Condition**: When all red and blue blocks are eaten, the `gamePaused` flag is set to `true`, and the `displayVictoryMessage()` function shows the victory text.

### Significant Changes Made
- Enhanced the collision detection logic to account for real-time interactions with moving blocks.
- Implemented continuous movement when arrow keys are held, providing a smoother experience.
- Added a victory condition that pauses the game and displays a message when all blocks are eaten.

### External Tools and Techniques
- I haven't used any external tools, all of the technique I have used are taught in lectures or tutorials

## Additional Information
### Tools and Techniques Used
- **p5.js Library**: Used for canvas drawing, animations, and user input handling.
- **CSS Styling**: Applied CSS to format the game interface and instructions, ensuring a consistent look.
- **Custom Collision Detection**: Logic was developed using JavaScript `dist()` function to measure the distance between Pac-Man and blocks.
- **Animation Timing**: Controlled with `millis()` to ensure movement intervals are consistent, allowing Pac-Man to move smoothly.

