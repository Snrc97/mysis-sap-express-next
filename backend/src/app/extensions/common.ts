
const express = require('express');
const router = express.Router();

express.response.customJson = function ({data, success, msg}) {
    // Add custom behavior here, e.g., logging or wrapping the response
    this.json({
        success: success ?? true,
        data: data,
        msg: msg ?? 'İşlem Başarılı'
    });
};


router.prototype.resource = function (name) {
    this.get('/', (req, res) => {
        res.send(`Get all items from the ${name} Controller`);
    });

    this.post('/', (req, res) => {
        res.send(`Create new item in the ${name} Controller`);
    });

    this.get('/:id', (req, res) => {
        res.send(`Show item with ID ${req.params.id} from the ${name} Controller`);
    });

    this.put('/:id', (req, res) => {
        res.send(`Update item with ID ${req.params.id} in the ${name} Controller`);
    });

    this.delete('/:id', (req, res) => {
        res.send(`Delete item with ID ${req.params.id} from the ${name} Controller`);
    });
}