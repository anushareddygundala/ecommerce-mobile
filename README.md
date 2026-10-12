# MyStore – E-commerce Mobile App

## Project Overview
MyStore is a simple e-commerce mobile application built using React Native and Expo. It displays products with their images, names, prices, and categories.

## Technologies Used
- React Native
- Expo
- TypeScript
- Expo Router
- React Native FlatList
- React Native StyleSheet

## Features

### Assignment 1 – Home Screen
- Welcome message and store banner
- Shop Now button
- Product categories
- Featured products
- View Product alert

### Assignment 2 – Products Screen
- Displays 8 sample products
- Two-column product layout
- Reusable ProductCard component
- Product images, names, prices, and categories
- View Product button displays product details
- Empty-list message when no products are available
- Product data stored separately in `src/data/products.ts`

## Project Structure
```text
src/
├── app/
│   ├── index.tsx
│   ├── products.tsx
│   └── _layout.tsx
├── components/
│   └── ProductCard.tsx
└── data/
    └── products.ts
```

## How to Run the Project

1. Install Node.js and npm.
2. Open a terminal in the project directory.
3. Install dependencies:
   `npm install`
4. Start Expo:
   `npx expo start`
5. Scan the QR code using Expo Go to run the app on your mobile device.

## Current Scope
This project uses local sample product data. A backend, database, authentication, and payment system are not included.

## Author
Student project – React Native and Expo
