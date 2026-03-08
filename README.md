# Library Patron Dashboard

A React dashboard project that visualizes a library member's profile, reading progress, and checked-out books in a clean card-based UI.

## Overview

This project focuses on building an interactive front-end experience with clear data presentation and lightweight client-side filtering.

The app includes:
- A patron profile summary card
- A reading progress card with a color-coded progress bar
- A checked-out books card with overdue indicators
- A live search input to filter books by title

## Tech Stack

- React
- Vite
- JavaScript (ES6+)
- Inline CSS styling

## Key Features

- Dynamic rendering of nested object/array data
- Conditional UI states (active member status, late fee notice, overdue labels)
- Book sorting by due date
- Case-insensitive search with `useState`
- Reusable card layout for consistent visual structure

## Run Locally

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Project Goal

I built this project to strengthen core React fundamentals:
- JSX expressions
- Conditional rendering
- List rendering with `.map()`
- Filtering and derived data with `.filter()` and `.sort()`
- Controlled inputs and state updates
