
const express = require('express');
express.response.customJson = function ({data, success, msg}) {
    // Add custom behavior here, e.g., logging or wrapping the response
    this.json({
        success: success ?? true,
        data: data,
        msg: msg ?? 'İşlem Başarılı'
    });
};
