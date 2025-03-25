module.exports = (sequelize) => {
  const Invoice = sequelize.define('Invoice', {
    id: {
      type: require('sequelize').INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    order_id: {
      type: require('sequelize').INTEGER
    },
    invoice_number: {
      type: require('sequelize').STRING,
      unique: true
    },
    amount: {
      type: require('sequelize').DECIMAL(15,2)
    },
    due_date: {
      type: require('sequelize').DATE
    },
    status: {
      type: require('sequelize').ENUM('Unpaid', 'Paid', 'Overdue'),
      defaultValue: 'Unpaid'
    }
  }, {
    tableName: 'invoices',
    timestamps: false
  });
  return Invoice;
};
