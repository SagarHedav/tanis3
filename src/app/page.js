"use client"

import { useState, useEffect } from "react";
import Confetti from "react-confetti";
import Image from "next/image";

const YesNoComponent = () => {
  const images = [
    "/photo_2025-05-14 16.39.08.jpeg",
    "/photo_2025-05-14 16.40.49.jpeg",
    "/photo_2025-05-14 16.41.41.jpeg",
    "/photo_2025-05-14 18.03.47.jpeg",
    "/photo1.jpeg",
    "/1.jpeg",
    "/2.jpeg",
    "/2.jpeg",
    "/3.jpeg",
    "/3.jpeg",
  ];

  const phrases = [
    "No",
    "Are you sure?",
    "Really Sure",
    "Cookie says please",
    "Don't do this to me",
    "I am gonna cry",
    "You are breaking my heart ;(",
    "I am very sad",
    "I am very very sad",
    "I am very very very sad",
  ];

  const [noCount, setNoCount] = useState(0);
  const [confettiActive, setConfettiActive] = useState(false);
  const [image, setImage] = useState(
    "https://media.tenor.com/Du9VVJYDPDkAAAAi/tkthao219-bubududu.gif"
  );
  const [noPosition, setNoPosition] = useState({
    top: Math.floor(Math.random() * 80) + "vh",
    left: Math.floor(Math.random() * 80) + "vw",
  });
  const [phrase, setPhrase] = useState(phrases[0]);

  useEffect(() => {
    if (confettiActive) {
      const timer = setTimeout(() => setConfettiActive(false), 10000);
      return () => clearTimeout(timer);
    }
  }, [confettiActive]);

  const handleNoClick = () => {
    setConfettiActive(false);
    setNoCount(noCount + 1);
    setPhrase(getNoButtonText());
    setNoPosition({
      top: Math.floor(Math.random() * 80) + "vh",
      left: Math.floor(Math.random() * 80) + "vw",
    });
    setImage(images[noCount]);
  };

  const handleYesClick = () => {
    setImage("/vid5.mp4");
    setPhrase("Yayyyy");
    setConfettiActive(true);
  
    // Play a sound effect
    const audio = new Audio("/sound.mp3"); // Place sound.mp3 in the public folder
    audio.play();
  };

  const getNoButtonText = () => {
    if (phrases.length - 1 === noCount) {
      setNoCount(0);
    }
    return phrases[noCount === phrases.length - 1 ? 0 : noCount];
  };

  const yesButtonSize = noCount * 20 + 16;

  return (
    <>
      {confettiActive && (
        <Confetti width={window.innerWidth} height={window.innerHeight} />
      )}

      <div
        className="flex flex-col items-center justify-center h-screen bg-cover bg-center gap-5"
        style={{
          backgroundImage: "url(https://www.psdgraphics.com/wp-content/uploads/2022/01/white-math-paper-texture.jpg",
        }}
      >
        <div className="flex flex-col gap-2 justify-center items-center">
        {image.endsWith(".mp4") ? (
  <video
    width={250}
    height={250}
    controls
    autoPlay
    loop
    className=""
  >
    <source src={image} type="video/mp4" />
    Your browser does not support the video tag.
  </video>
) : (
  <Image
    width={250}
    height={250}
    className=""
    src={image}
    alt=""
  />
)}
          <h1 className="text-2xl">Will you be my Baby Girl 😘😘? </h1>
        </div>
        <div>
          <button
            onClick={handleYesClick}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded -ml-10 m-5"
            style={{ fontSize: yesButtonSize }}
          >
            Yes
          </button>
          <button
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded absolute m-5"
            style={{
              top: noCount ? noPosition.top : "auto",
              left: noCount ? noPosition.left : "auto",
            }}
            onClick={handleNoClick}
          >
            {phrase}
          </button>
        </div>
      </div>
    </>
  );
};

export default YesNoComponent;
