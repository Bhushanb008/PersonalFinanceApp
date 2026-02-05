# 📱 Personal Finance App (React Native)

A simple and clean **Personal Finance Management mobile app** built using **React Native + TypeScript**.

The app helps users:
- Authenticate via login/signup flow
- View income & expenses List
- View expenses categories
- Ebel to Edit the expenses

---

# 🚀 Tech Stack

### Core
- React Native (CLI)
- TypeScript

### Navigation
- @react-navigation/native
- Native Stack Navigator
- Bottom Tabs Navigator


### State Management
- (AsyncStorage / Hooks)

---

# 📂 Project Structure

```
src/
 ├── navigation/
 │    ├── StackNavigator
 │  
 │
 ├── screens/
 │    ├── Dashboard
 │    ├── LoginScreen
 │    ├── TransactionDetailsScreen
 │    ├── TransactionsScreen
 │
 ├── components/
 │    ├── CustomHeader
 │    ├── CustomInput
 │    ├── FilterBottomSheet
 │    ├── Images
 │    ├── NoDataFOund
 │    ├── PrimaryButton
 │
 ├── assets/
 │    ├── fonts
 │    ├── images
 ├── types/
 │    ├── types
 ├── utils/
 │    ├── mockData
```

---

# ⚙️ Setup Instructions

## 1️⃣ Install dependencies

```bash
npm install
```

---

## 2️⃣ Start Metro

```bash
npm start
```

---

## 3️⃣ Run App

### Android
```bash
npm run android
```

### iOS
```bash
cd ios && pod install
npm run ios
```

---

# 🧭 Navigation Architecture

### Why this structure?
- Clear separation of Auth & Main App
- Scalable
- Easy to add new screens

---

# ✨ Features Implemented

✅ Authentication flow  
✅ Reusable Input components  
✅ Dark theme UI  
✅ Form validation  
✅ TypeScript setup  

---

# 🤔 Assumptions & Trade-offs

- Mock/static data used instead of backend
- No real API integration
- Simple local state management
- UI focused more on structure than animations

---

# 🔮 Improvements with More Time

- IOS alignments (remaining due to i dont have MAC OS)
- API integration
- Redux Toolkit setup
- Charts for analytics
- Persistent storage (AsyncStorage)
- Unit tests
- Performance optimization
- Better animations
- Dark/Light theme switch

---

# 🧠 Why React Native?

- Single codebase for Android + iOS
- Faster development
- Reusable components
- Strong ecosystem

---

# 👨‍💻 Author

Bhushan Bhosale  
React Native Developer

---

# 📌 Note

This project is **not an e-commerce app**.  
It is a **Personal Finance Management app** created as an assignment submission.

