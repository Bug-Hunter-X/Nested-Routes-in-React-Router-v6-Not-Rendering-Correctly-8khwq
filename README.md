# React Router v6 Nested Route Rendering Issue

This repository demonstrates a common issue encountered when working with nested routes in React Router v6.  The provided `bug.js` file showcases a scenario where nested routes fail to render correctly, only displaying the initial path and ignoring subsequent changes. The solution, found in `bugSolution.js`, addresses this problem.

## Problem

Nested routes within a parent route only render the first child route, and do not update when navigating to other nested routes. This results in unexpected behaviour, where the application doesn't reflect the intended navigation.