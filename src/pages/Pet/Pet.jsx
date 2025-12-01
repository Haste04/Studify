import React, { useState, useEffect } from "react";
import { useStreak } from "../../context/StreakContext.jsx";
import Streak from "../components/Streak.jsx";

const Pet = () => {
  const { streakData } = useStreak();
  const canChoosePet = streakData.streakDays >= 3;

  const [selectedPet, setSelectedPet] = useState(null); //State for selected pet
  const [petName, setPetName] = useState(null);

  useEffect(() => { //Load selected pet from localStorage on component mount
    const savedPet = localStorage.getItem("selectedPet");
    const savedName = localStorage.getItem("petName");
    if (savedPet) setSelectedPet(savedPet);
    if (savedName) setPetName(savedName);
  }, []);

  useEffect(() => { //Reset pet if streak is below 3 (For debugging purposes ONLY, remove if goods na)
    if (!canChoosePet) {
      localStorage.removeItem("selectedPet");
      localStorage.removeItem("petName");
      setSelectedPet(null);
      setPetName(null);
    }
  }, [canChoosePet]);

  const generatePetName = () => {
    const names = ["Ducay", "Talisic", "Bigno", "Christian", "Kyle", "Jhon"];
    return names[Math.floor(Math.random() * names.length)];
  };

  const handleChoosePet = (petNameChosen) => { //Save selected pet to localStorage
    const randomName = generatePetName();
    setSelectedPet(petNameChosen);
    setPetName(randomName);
    localStorage.setItem("selectedPet", petNameChosen);
    localStorage.setItem("petName", randomName);
  };

  const firstEvoPets = [
    { name: "Puppy", src: "/Public/Dog/Puppy-Happy.gif" },
    { name: "Chick", src: "/Public/Bird/Baby Chick.gif" },
    { name: "Fish", src: "/Public/Fish/Fish.gif" },
  ];

  const secondaryEvoPets = [
    { name: "Juvenile Dog", src: "/Public/Dog/Juvenile Dog - Happy.gif" },
    { name: "Juvenile Bird", src: "/Public/Bird/Juvenile Bird.gif" },
    { name: "Shark", src: "/Public/Fish/Shark.gif" },
  ];

  const finalEvoPets = [
    { name: "Adult Dog", src: "/Public/Dog/Adult Dog - Happy.gif" },
    { name: "Eagle", src: "/Public/Bird/Eagle.gif" },
    { name: "Whale Shark", src: "/Public/Fish/Whale Shark.gif" },
  ];

  const chosenPet = firstEvoPets.find((p) => p.name === selectedPet); //Display if already chosen

  return (
    <div
      style={{
        backgroundColor: "#fafafaff",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px",
      }}
    >
      <div style = {{marginLeft: selectedPet? "auto" : "0", marginRight: selectedPet? "100px" : "0", transition: "all 0.3s ease"}}>
        <Streak />
      </div>

<<<<<<< ours
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "normal",
            color: "#222",
          }}
        >
          {canChoosePet
            ? "Congratulations! You can now choose a pet!"
            : "Achieve 3 streaks to unlock a pet!"}
        </h2>
      </div>
=======
      <h2 style={{ fontSize: "2rem", fontWeight: "bold", color: "#222" }}>
        {!canChoosePet
          ? "Achieve 3 streaks to unlock a pet!"
          : !selectedPet
          ? "Congratuilations! You can now choose a pet!"
          : ""}
      </h2>
>>>>>>> theirs

      <div
        style={{
          display: "flex",
          justifyContent: selectedPet ? "space-between" : "center",
          alignItems: "center",
          width: selectedPet ? "80%" : "auto",
          gap: "30px",
        }}
      >
<<<<<<< ours
        {/* Only show the pets if the user has a streak of 3 or more */}
        {canChoosePet ? (
          <>
            <div style={{ textAlign: "center" }}>
              <img
                src="public/Dog/Puppy-Happy.gif"
                alt="Puppy"
                style={{
                  width: "320px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={() => alert("You chose the Puppy!")}
              />
              <p
                style={{
                  fontSize: "28px",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Puppy
=======
        {/* If already chosen, only show that pet */}
        {selectedPet ? (
          <div style={{ 
            textAlign: "center", 
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "-40px",
            transform: "translate(310px, -170px)",
          }}>
            {petName && (
              <p
                style={{
                  fontSize: "32px",
                  fontWeight: "bold",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                {petName}
>>>>>>> theirs
              </p>
            )}
            <img
              src={chosenPet?.src}
              alt={selectedPet}
              style={{ width: "450px", borderRadius: "10px", transition: "transform 0.3s ease", }}
            />

<<<<<<< ours
            <div style={{ textAlign: "center" }}>
              <img
                src="public/Bird/Baby Chick.gif"
                alt="Chick"
                style={{
                  width: "320px",
                  borderRadius: "10px",
                  cursor: "pointer",
                }}
                onClick={() => alert("You chose the Chick!")}
              />
              <p
                style={{
                  fontSize: "28px",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Chick
              </p>
            </div>
=======
            {/* Pet species name */}
            <p
              style={{
                fontSize: "28px",
                marginTop: "10px",
                fontWeight: "normal",
              }}
            >
              {selectedPet}
            </p>
>>>>>>> theirs

            {/* Pet Level */}
            <p style={{
              fontSize: "24px",
              marginTop: "5px",
              fontWeight: "lighter",
            }}>
              Level {streakData.streakDays}
            </p>
          </div>
        ) : canChoosePet ? (
          firstEvoPets.map((pet) => ( // Show pet choices if unlocked and no pet chosen yet
            <div key={pet.name} style={{ textAlign: "center" }}>
              <img
<<<<<<< ours
                src="public/Fish/Fish.gif"
                alt="Fish"
=======
                src={pet.src}
                alt={pet.name}
>>>>>>> theirs
                style={{
                  width: "320px",
                  borderRadius: "10px",
                  cursor: "pointer",
<<<<<<< ours
                }}
                onClick={() => alert("You chose the Fish!")}
              />
              <p
                style={{
                  fontSize: "28px",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                Fish
=======
                  transition: "transform 0.2s",
                }}
                onClick={() => handleChoosePet(pet.name)}
              />
              <p style={{ fontSize: "28px", marginTop: "10px", fontWeight: "bold" }}>
                {pet.name}
>>>>>>> theirs
              </p>
            </div>
          ))
        ) : (
<<<<<<< ours
          // If not yet unlocked, show question marks instead
          <>
            <div style={{ textAlign: "center" }}>
              <img
                src="public/egg-breaking.gif"
                alt="Locked Pet"
                style={{ width: "320px", borderRadius: "10px" }}
              />
              <p
                style={{
                  fontSize: "28px",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                ?
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="public/egg-breaking.gif"
                alt="Locked Pet"
                style={{ width: "320px", borderRadius: "10px" }}
              />
              <p
                style={{
                  fontSize: "28px",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                ?
              </p>
            </div>

            <div style={{ textAlign: "center" }}>
              <img
                src="public/egg-breaking.gif"
                alt="Locked Pet"
                style={{ width: "320px", borderRadius: "10px" }}
              />
              <p
                style={{
                  fontSize: "28px",
                  marginTop: "10px",
                  fontWeight: "bold",
                }}
              >
                ?
              </p>
            </div>
=======
          <> {/* Locked pet view */}
            {[1, 2, 3].map((i) => (
              <div key={i} style={{ textAlign: "center" }}>
                <img
                  src="/Public/egg-breaking.gif"
                  alt="Locked Pet"
                  style={{ width: "320px", borderRadius: "10px" }}
                />
                <p style={{ fontSize: "28px", marginTop: "10px", fontWeight: "bold" }}>?</p>
              </div>
            ))}
>>>>>>> theirs
          </>
        )}
      </div>
    </div>
  );
};

export default Pet;
