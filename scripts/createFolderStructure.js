const fs = require('fs');
const path = require('path');

function createFolderStructure(basePath) {
    const folders = [
        'Prosphera/main',
        'Prosphera/user',
        'Prosphera/logs'
    ];

    const files = [
        { path: 'Prosphera/main/transactions.js', content: `let income = document.getElementById('income') || 0;\nlet expense = document.getElementById('expense') || 0;\nlet total = document.getElementById('total') || 0;\nlet target = document.getElementById('target') || 0;\nlet achieved = document.getElementById('achieved') || 0;\nlet restaurant = document.getElementById('restaurant') || 0;\nlet shopping = document.getElementById('shopping') || 0;\nlet eating = document.getElementById('eating') || 0;\nlet transportation = document.getElementById('transportation') || 0;` },
        {
            path: 'Prosphera/user/auth.js', content: `let username = document.getElementById('username');\nlet password = document.getElementById('password');\nlet email = document.getElementById('email');\nlet dob = document.getElementById('dob');` }
    ];

    // Create folders
    folders.forEach(folder => {
        const folderPath = path.join(basePath, folder);
        if (!fs.existsSync(folderPath)) {
            fs.mkdirSync(folderPath, { recursive: true });
            console.log(`Created folder: ${folderPath}`);
        }
    });

    // Create files
    files.forEach(file => {
        const filePath = path.join(basePath, file.path);
        if (!fs.existsSync(filePath)) {
            fs.writeFileSync(filePath, file.content);
            console.log(`Created file: ${filePath}`);
        }
    });
}

// Use theS function
createFolderStructure('C:/');