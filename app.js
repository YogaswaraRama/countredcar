// Store car assets
let showCar = () => {
  //Images
  const image = ["./assets/blueCar.svg", "./assets/blueTruck.svg", "./assets/greenTruck.svg", "./assets/militaryCar.svg", "./assets/redCar.svg", "./assets/yellowCar.svg", "./assets/yellowTruck.svg"];
  let randomMath = Math.floor(Math.random() * image.length);
  return image[randomMath];
};

// Function to get the car from array
let getCar = () => {
  //Create imgCar to store a new created document named "img"
  const imgCar = document.createElement("img");
  //Get the car image from showCar and put into imgCar
  imgCar.src = showCar();

  //Car style
  imgCar.style.width = "132px";
  imgCar.style.height = "auto";
  imgCar.style.position = "absolute";

  //Car position
  const minHeight = 0;
  const maxHeight = 100;
  const randomHeight = Math.floor(Math.random() * (maxHeight - minHeight));
  imgCar.style.left = "-100px";
  imgCar.style.top = `${randomHeight}px`;

  //Store "road" into carRoad
  const carRoad = document.getElementById("road");

  //Add imgCar into carRoad
  carRoad.appendChild(imgCar);
  // console.log(showCar()); masih error

  //Animation
  imgCar.animate(
    [
      //Car starting point
      { left: "-100px" },
      //Animating from left where 100vw+100px so the car is gone from display
      { left: "calc(100vw + 100px)" },
    ],
    {
      duration: 4000,
      iterations: Infinity,
      easing: "linear",
    }
  );

  //Remove added imgCar in 5 second
  setTimeout(() => {
    carRoad.removeChild(imgCar);
  }, 4000);
};

//Select
let counting = 0;
let countingDiv = document.getElementById("counting");

//Button function
const decreaseCount = () => {
  counting--;
  countingDiv.innerHTML = counting;
  console.log("kurang");
};

const increaseCount = () => {
  counting++;
  countingDiv.innerHTML = counting;
  console.log("tambah");
};

const resetCount = () => {
  Swal.fire({
    buttonsStyling: false,
    customClass: {
      confirmButton: "decrease",
      cancelButton: "increase",
      actions: "swal-buttons-group",
    },
    title: "Are you sure you want to reset the counting?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Reset",
  }).then((result) => {
    if (result.isConfirmed) {
      // pauseAnimation();
      if (counting !== 0) {
        counting = 0;
        countingDiv.innerHTML = counting;
        Swal.fire({
          title: "Reset!",
          buttonsStyling: false,
          text: "Your count has been reset.",
          icon: "success",
          customClass: {
            confirmButton: "increase",
          },
        });
      } else {
        Swal.fire({
          title: "Failed!",
          buttonsStyling: false,
          text: "There are no count to reset",
          icon: "error",
          customClass: {
            confirmButton: "increase",
          },
        });
      }
    }
  });

  // stop mobil gerak apus smua

  console.log("reset");
};

document.addEventListener("DOMContentLoaded", function () {
  Swal.fire({
    html: '<h1 style="color:#E14B4B; font-size:64px">RED HUNTER</h1><p style="color:#5E6776; font-size:32px">COUNT THE RED ONE</p>',
    confirmButtonText: "Play",
    buttonsStyling: false,
    customClass: {
      confirmButton: "buttonSwal",
    },
  }).then((result) => {
    if (result.isConfirmed) {
      setInterval(getCar, 1000);
    }
  });
});
