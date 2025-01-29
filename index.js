// Coding Ninjas project 

import nodemailer from "nodemailer";
import readline from "readline";

const Solution = () => {
  const cout = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  // Create a transporter object with SMTP details
  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "codingninjas2k16@gmail.com",
      pass: "slwvvlczduktvhdj",
    },
  });

  // prompt the user to enter their email address
  cout.question("please enter your mail ", (userMail) => {
    // Define mail options
    let mailOptions = {
      from: "codingninjas2k16@gmail.com",
      to: userMail,
      text: "The world has enough coders; be a coding ninja!",
      subject: "Coding Ninjas",
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log(`Success: Email sent to ${userMail}`);
      }
    });
    cout.close();
  });
};

export default Solution;
