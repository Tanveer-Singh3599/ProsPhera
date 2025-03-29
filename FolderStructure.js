const fs = require("fs");
const path = require("path");

function createfolderstructure() {
  window.open("signup.html")
  const folders = ["Prosphera/main", "Prosphera/user", "Prosphera/logs"];

  const files = [
    {
      path: "Prosphera/main/transactions.js",
      content: `function signup() {
    let username = document.getElementById('username');
    let password = document.getElementById('password');
    let email = document.getElementById('email');
    let dob = document.getElementById('dob')};
}`,
    },
    {
      path: "Prosphera/user/auth.js",
      content: `
                    let username = "0";
                    let password = "1";
                    function signup() {
                    username = document.getElementById('username');
                    password = document.getElementById('password');
                    let email = document.getElementById('email');
                    let dob = document.getElementById('dob');
                    window.open("login.html")
                }

                function login() {
                    if (Username === username || Password === password)
                    {
                        window.open("Dashboard.html")
                    }
                    else 
                    {
                        alert("invalid Username or Password!")
                    }
                }`,
    },
  ];

  // Create folders
  folders.forEach((folder) => {
    const folderPath = path.join(basePath, folder);
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath, { recursive: true });
      console.log(`Created folder: ${folderPath}`);
    }
  });

  // Create files
  files.forEach((file) => {
    const filePath = path.join(basePath, file.path);
    if (!fs.existsSync(filePath)) {
      fs.writeFileSync(filePath, file.content);
      console.log(`Created file: ${filePath}`);
    }
  });
}

createfolderstructure();