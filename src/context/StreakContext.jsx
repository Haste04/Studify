import React, { createContext, useContext, useState } from "react";

// Context
const StreakContext = createContext();

// Provider component
export const StreakProvider = ({ children }) => {
  const [streakData, setStreakData] = useState({
<<<<<<< ours
    streakDays: 3,
=======
    streakDays: 7,
>>>>>>> theirs
  });

  // Function to increase streak
  const increaseStreak = () => {
    setStreakData((prev) => ({
      ...prev,
      streakDays: prev.streakDays + 1,
    }));
  };

  return (
    <StreakContext.Provider value={{ streakData, increaseStreak }}>
      {children}
    </StreakContext.Provider>
  );
};

// Helper hook for easier access
export const useStreak = () => useContext(StreakContext);
