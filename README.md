# LRU Cache Visualizer
A web-based project to demonstrate how the Least Recently Used (LRU) Cache works using a visual interface.
This project helps in understanding cache behavior clearly and is useful for learning data structures and system design concepts.
---
## Table of Contents
- Overview
- Algorithm
- Features
- Tech Stack
- Project Structure
- Execution Steps
- How LRU Works — Walkthrough
---
## Overview
This project visually explains how an LRU Cache works internally.
The cache is implemented using:
- JavaScript Map for fast key lookup
- Ordered insertion to simulate LRU behavior
- 
The interface displays:
- Cache blocks (Top = Most Recently Used, Bottom = Least Recently Used)
- Real-time updates
- Notifications and activity log
---

## Algorithm and Data Structures

### Data Structure Used

| Structure | Role | Complexity |
|----------|------|-----------|
| Map | Stores key-value pairs | O(1) |

---

### get(key)

- If key exists:
  - Move it to the most recent position
  - Return value (Cache Hit)
- Else:
  - Return -1 (Cache Miss)

---

### put(key, value)

- If key exists:
  - Update value
  - Move it to most recent position
- Else:
  - Insert new key
  - If capacity is exceeded:
    - Remove the least recently used key

---

### Why O(1)?

- Map provides constant time lookup
- Re-inserting updates order efficiently

---

## Features

### Core Operations

- Add (PUT) — Insert key-value pair
- Access (GET) — Retrieve value
- Automatic removal of least recently used item
- Fixed cache capacity

---

### Visualization

- Top block represents most recently used item
- Bottom block represents least recently used item
- Clear visual ordering of cache

---

### Interface Features

- Notification messages
- Activity log of operations
- Cache hit and miss tracking
- Dark theme UI

---

## Tech Stack

| Component | Technology |
|----------|-----------|
| Structure | HTML |
| Styling | CSS |
| Logic | JavaScript |

No frameworks or external libraries are used.

---

## Project Structure


lru-cache-visualizer/
│
├── index.html # UI structure
├── style.css # Styling
├── script.js # Cache logic and UI handling
└── README.md # Documentation


---

## Execution Steps

### Run Locally

1. Clone the repository:

git clone https://github.com/Harsha200517/lru-cache-visualizer


2. Open the project folder

3. Open:

index.html
---

## Live Demo

https://harsha200517.github.io/lru-cache-visualizer

---

## How LRU Works — Walkthrough

Capacity = 3

| Operation | Cache State (Top → Bottom) | Description |
|---------- |--------------------------  |-------------|
| Add(1)    | [1]                        | Inserted    |
| Add(2)    | [2, 1]                     | Inserted    |
| Add(3)    | [3, 2, 1]                  | Cache full  |
| Access(1) | [1, 3, 2]                  | Moved to to |
| Add(4)    | [4, 1, 3]                  | Removed 2   |
| Access(2) | Not found                  | Cache miss  |
