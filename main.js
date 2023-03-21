function checkSpeed() {
    // Define the speed limit and how many km/s the driver gets a demerit point
    const speedLimit = 70;
    const kmPerDemerit = 5;
    
    // Get the speed input value from the HTML
    const speedInput = document.getElementById("speed");
    const speed = parseInt(speedInput.value);
    
    // Validate the input to make sure it's a number
    if (isNaN(speed)) {
      alert("Please enter a valid number");
      return;
    }
    
    // Check if the driver is within the speed limit
    if (speed <= speedLimit) {
      document.getElementById("output").innerHTML = "Ok";
    } else {
      // Calculate the number of demerit points the driver gets
      const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemerit);
      if (demeritPoints > 12) {
        // If the driver has more than 12 demerit points, their license is suspended
        document.getElementById("output").innerHTML = "License suspended";
      } else {
        // Otherwise, display the number of demerit points the driver has received
        document.getElementById("output").innerHTML = "Demerit points: " + demeritPoints;
      }
    }
  }
  
  