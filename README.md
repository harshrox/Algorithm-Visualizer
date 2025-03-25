# Algorithm Visualizer

Algorithm Visualizer is an interactive web application designed to help users understand and visualize various pathfinding algorithms and maze generation techniques. Built with React, TypeScript, and Tailwind CSS, this tool provides an intuitive interface to observe how different algorithms navigate through mazes to find optimal paths.

## Features

- **Maze Generation Options:**
  - *No Maze*: Start with an empty grid.
  - *Binary Tree*: Generate mazes using the binary tree algorithm.
  - *Recursive Division*: Create mazes through recursive division.

- **Pathfinding Algorithms:**
  - *Breadth-First Search (BFS)*: Explores all neighbors at the present depth prior to moving on to nodes at the next depth level.
  - *Depth-First Search (DFS)*: Explores as far along a branch as possible before backtracking.
  - *Dijkstra's Algorithm*: Finds the shortest path from the start node to the end node in the graph.
  - *A* (A Star) Algorithm: Finds the shortest path using heuristics to optimize the search.

- **Visualization Speeds:**
  - *Slow*
  - *Medium*
  - *Fast*

- **Interactive Interface:** Set or remove walls, and customize the grid to test various scenarios.

## Live Demo

Experience the Algorithm Visualizer in action: [Algorithm Visualizer](https://hrx-algorithm-visualizer.vercel.app/)

## Getting Started

Follow these instructions to set up the project locally.

### Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/)

### Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/harshrox/Algorithm-Visualizer.git
2. **Navigate to the Project Directory:**
   ```bash
   cd Algorithm-Visualizer
3. **Install Dependencies:**
   ```bash
   npm install

### Running the Application

- To start the development server:  
   ```bash
   npm run dev

## Technologies Used

- **React** - A JavaScript library for building user interfaces.
- **TypeScript** - A typed superset of JavaScript that compiles to plain JavaScript.
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
- **Vite** - A fast build tool and development server for modern web projects.
