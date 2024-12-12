let quizScore = 0;

function submitQuiz() {
  // Quiz answers
  const correctAnswers = {
    q1: "Paris",
    q2: "8",
    q3: "H2O",
  };

  // Get user answers
  const form = document.getElementById("quizForm");
  const formData = new FormData(form);

  // Calculate score
  quizScore = 0;
  for (let [question, answer] of formData.entries()) {
    if (correctAnswers[question] === answer) {
      quizScore += 10; // Assign 10 points per correct answer
    }
  }

  // Show certificate section and hide quiz section
  document.getElementById("quizSection").style.display = "none";
  document.getElementById("certificateSection").style.display = "block";

  alert(`You scored ${quizScore} points! Proceed to generate your certificate.`);
}

function generateCertificate() {
  const name = document.getElementById('nameInput').value.trim();
  const canvas = document.getElementById('certificateCanvas');
  const ctx = canvas.getContext('2d');

  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Load background image
  const bgImage = new Image();
  bgImage.src = 'https://static.vecteezy.com/system/resources/previews/019/050/104/non_2x/blank-white-template-background-with-flat-design-suitable-for-certificate-background-vector.jpg';
  bgImage.onload = () => {
    // Draw the background
    ctx.drawImage(bgImage, 0, 0, canvas.width, canvas.height);

    // Add certificate title
    ctx.font = "bold 50px Georgia";
    ctx.fillStyle = "#2c3e50";
    ctx.textAlign = "center";
    ctx.fillText("Certificate of Participation", canvas.width / 2, 150);

    // Add subtitle or purpose
    ctx.font = "20px Arial";
    ctx.fillStyle = "#555";
    ctx.fillText("This is awarded to", canvas.width / 2, 220);

    // Add recipient name
    ctx.font = "bold 40px Arial";
    ctx.fillStyle = "#333";
    ctx.fillText(name || "Your Name Here", canvas.width / 2, 300);

    // Add achievement statement
    ctx.font = "18px Arial";
    ctx.fillStyle = "#555";
    ctx.fillText(
      "In recognition of your outstanding performance and dedication",
      canvas.width / 2,
      360
    );
    ctx.fillText("for completion of the Quiz.", canvas.width / 2, 390);

    // Add additional motivational statement
    ctx.font = "18px Arial";
    ctx.fillStyle = "#555";
    ctx.fillText("We acknowledge your efforts, keep participating.", canvas.width / 2, 420);

    // Add organization footer


    // Add organization footer
    ctx.font = "italic 20px Arial";
    ctx.fillText("Presented by Eco-Waterflow", canvas.width / 2, canvas.height - 100);

    // Add current date
    ctx.font = "18px Arial";
    ctx.fillText("Date: " + new Date().toLocaleDateString(), canvas.width / 2, canvas.height - 50);
  };
}

function downloadCertificate() {
  const canvas = document.getElementById('certificateCanvas');
  const link = document.createElement('a');
  link.download = 'certificate.png';
  link.href = canvas.toDataURL('image/png');
  link.click();
}
