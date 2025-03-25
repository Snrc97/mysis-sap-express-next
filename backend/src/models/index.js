const sequelize = require('../config/database');

// Import models
const Role = require('./Role')(sequelize);
const User = require('./User')(sequelize);
const PurchaseRequest = require('./PurchaseRequest')(sequelize);
const Bid = require('./Bid')(sequelize);
const Order = require('./Order')(sequelize);
const Budget = require('./Budget')(sequelize);
const Expenditure = require('./Expenditure')(sequelize);
const Invoice = require('./Invoice')(sequelize);
const Payment = require('./Payment')(sequelize);
const Inventory = require('./Inventory')(sequelize);
const Supplier = require('./Supplier')(sequelize);
const PriceList = require('./PriceList')(sequelize);
const Notification = require('./Notification')(sequelize);
const ProductRecipe = require('./ProductRecipe')(sequelize);
const ProductComponent = require('./ProductComponent')(sequelize);
const InventoryUnit = require('./InventoryUnit')(sequelize);
const Currency = require('./Currency')(sequelize);
const Equipment = require('./Equipment')(sequelize);
const WebsiteUser = require('./WebsiteUser')(sequelize);
const DemoRequest = require('./DemoRequest')(sequelize);
const WebsitePayment = require('./WebsitePayment')(sequelize);
const Branch = require('./Branch')(sequelize);

// Define associations

// Role - User
User.belongsTo(Role, { foreignKey: 'role_id' });
Role.hasMany(User, { foreignKey: 'role_id' });

// User - PurchaseRequest
PurchaseRequest.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(PurchaseRequest, { foreignKey: 'user_id' });

// PurchaseRequest - Bid
Bid.belongsTo(PurchaseRequest, { foreignKey: 'request_id' });
PurchaseRequest.hasMany(Bid, { foreignKey: 'request_id' });

// Supplier - Bid
Bid.belongsTo(Supplier, { foreignKey: 'supplier_id' });
Supplier.hasMany(Bid, { foreignKey: 'supplier_id' });

// Bid - Order
Order.belongsTo(Bid, { foreignKey: 'bid_id' });
Bid.hasOne(Order, { foreignKey: 'bid_id' });

// Budget - Expenditure
Expenditure.belongsTo(Budget, { foreignKey: 'budget_id' });
Budget.hasMany(Expenditure, { foreignKey: 'budget_id' });

// Order - Invoice
Invoice.belongsTo(Order, { foreignKey: 'order_id' });
Order.hasOne(Invoice, { foreignKey: 'order_id' });

// Invoice - Payment
Payment.belongsTo(Invoice, { foreignKey: 'invoice_id' });
Invoice.hasMany(Payment, { foreignKey: 'invoice_id' });

// ProductRecipe - ProductComponent
ProductComponent.belongsTo(ProductRecipe, { foreignKey: 'recipe_id' });
ProductRecipe.hasMany(ProductComponent, { foreignKey: 'recipe_id' });

// WebsiteUser - DemoRequest
DemoRequest.belongsTo(WebsiteUser, { foreignKey: 'user_id' });
WebsiteUser.hasMany(DemoRequest, { foreignKey: 'user_id' });

// WebsiteUser - WebsitePayment
WebsitePayment.belongsTo(WebsiteUser, { foreignKey: 'user_id' });
WebsiteUser.hasMany(WebsitePayment, { foreignKey: 'user_id' });

// Notification - User
Notification.belongsTo(User, { foreignKey: 'user_id' });
User.hasMany(Notification, { foreignKey: 'user_id' });

module.exports = {
  sequelize,
  Role,
  User,
  PurchaseRequest,
  Bid,
  Order,
  Budget,
  Expenditure,
  Invoice,
  Payment,
  Inventory,
  Supplier,
  PriceList,
  Notification,
  ProductRecipe,
  ProductComponent,
  InventoryUnit,
  Currency,
  Equipment,
  WebsiteUser,
  DemoRequest,
  WebsitePayment,
  Branch
};
