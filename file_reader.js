const fs = require("fs").promises;

// THEN-CATCH SOLUTION BELOW THIS LINE

fs.readFile("./firstname.txt", "utf-8")
  .then((firstName) => {
    data1 = firstName;
    return fs.readFile("./lastname.txt", "utf-8");
  })
  .then((lastName) => {
    data2 = lastName;
    return fs.readFile("./age.txt", "utf-8");
  })
  .then((age) => {
    data3 = age;
    return fs.readFile("./hobbies.txt", "utf-8");
  })
  .then((hobbies) => {
    data4 = JSON.parse(hobbies);
    console.log(
      `${data1} ${data2} is ${data3} years old and his hobbies are ${data4[0]} and ${data4[1]}.`,
    );
  })
  .catch((err) => {
    console.log(err);
  });

// ASYNC/AWAIT SOLUTION BELOW THIS LINE
async function readFiles() {
  const data1 = await fs.readFile("./firstname.txt", "utf-8");
  const data2 = await fs.readFile("./lastname.txt", "utf-8");
  const data3 = await fs.readFile("./age.txt", "utf-8");
  const data4 = await fs.readFile("./hobbies.txt", "utf-8");
  const hobbies = JSON.parse(data4);
  console.log(
    `${data1} ${data2} is ${data3} years old and his hobbies are ${hobbies[0]} and ${hobbies[1]}.`,
  );
}

readFiles();
