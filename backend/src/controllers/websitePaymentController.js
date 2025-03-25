const { WebsitePayment } = require('../models');

exports.getAll = async (req, res) => {
  try {
    const items = await WebsitePayment.findAll();
    res.customJson({data: items});
  } catch (err) {
    res.status(500).customJson({ success: false, msg: err.message });
  }
};

exports.getById = async (req, res) => {
  try {
    const item = await WebsitePayment.findByPk(req.params.id);
    if (item) {
      res.customJson({data: item});
    } else {
      res.status(404).customJson({ success: false, msg: 'WebsitePayment not found' });
    }
  } catch (err) {
    res.status(500).customJson({ success: false, msg: err.message });
  }
};

exports.create = async (req, res) => {
  try {
    const newItem = await WebsitePayment.create(req.body);
    res.status(201).customJson(newItem);
  } catch (err) {
    res.status(500).customJson({ success: false, msg: err.message });
  }
};

exports.update = async (req, res) => {
  try {
    const item = await WebsitePayment.findByPk(req.params.id);
    if (item) {
      await item.update(req.body);
      res.customJson({data: item});
    } else {
      res.status(404).customJson({ success: false, msg: 'WebsitePayment not found' });
    }
  } catch (err) {
    res.status(500).customJson({ success: false, msg: err.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const item = await WebsitePayment.findByPk(req.params.id);
    if (item) {
      await item.destroy();
      res.customJson({ msg: 'WebsitePayment deleted successfully' });
    } else {
      res.status(404).customJson({ success: false, msg: 'WebsitePayment not found' });
    }
  } catch (err) {
    res.status(500).customJson({ success: false, msg: err.message });
  }
};
