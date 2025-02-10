//index.js
import './style.css';
import { nameUi } from './ui';
import { setupEvent } from './event';
import { initializePlayers } from './player';

// Form to enter the name of the player.
nameUi();

// To add event listeners to the buttons 
setupEvent();

// Initialize the player and computer objects and place their ships.
initializePlayers();








