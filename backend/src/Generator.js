class Generator {
    constructor(name, folder) {
        this.name = name;
        this.folder = folder;
    }

    generateController() {
        const controllerPath = `${this.folder}/controllers/${this.name}Controller.js`;
        const controllerContent = `const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Welcome to the ${this.name} Controller');
});

module.exports = router;
        `;
        fs.writeFileSync(controllerPath, controllerContent);
    }

    generateModel() {
        const modelPath = `${this.folder}/models/${this.name}Model.js`;
        const modelContent = `const mongoose = require('mongoose');

const ${this.name}Schema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('${this.name}', ${this.name}Schema);
        `;
        fs.writeFileSync(modelPath, modelContent);
    }
}

module.exports = Generator;
