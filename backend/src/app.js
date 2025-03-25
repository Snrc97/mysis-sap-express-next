const express = require('express');
require('./extensions/common');


const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');



app.options('*', cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.use(bodyParser.json());


// Import routes
const authRoutes = require('./routes/authRoutes');
const roleRoutes = require('./routes/roleRoutes');
const userRoutes = require('./routes/userRoutes');
const purchaseRequestRoutes = require('./routes/purchaseRequestRoutes');
const bidRoutes = require('./routes/bidRoutes');
const orderRoutes = require('./routes/orderRoutes');
const budgetRoutes = require('./routes/budgetRoutes');
const expenditureRoutes = require('./routes/expenditureRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const inventoryRoutes = require('./routes/inventoryRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const priceListRoutes = require('./routes/priceListRoutes');
const notificationRoutes = require('./routes/notificationRoutes');
const productRecipeRoutes = require('./routes/productRecipeRoutes');
const productComponentRoutes = require('./routes/productComponentRoutes');
const inventoryUnitRoutes = require('./routes/inventoryUnitRoutes');
const currencyRoutes = require('./routes/currencyRoutes');
const equipmentRoutes = require('./routes/equipmentRoutes');
const websiteUserRoutes = require('./routes/websiteUserRoutes');
const demoRequestRoutes = require('./routes/demoRequestRoutes');
const websitePaymentRoutes = require('./routes/websitePaymentRoutes');
const branchRoutes = require('./routes/branchRoutes');

// Use routes
app.use('/api/auth', authRoutes);
app.use('/api/roles', roleRoutes);
app.use('/api/users', userRoutes);
app.use('/api/purchase-requests', purchaseRequestRoutes);
app.use('/api/bids', bidRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/budgets', budgetRoutes);
app.use('/api/expenditures', expenditureRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/suppliers', supplierRoutes);
app.use('/api/price-lists', priceListRoutes);
app.use('/api/notifications', notificationRoutes);
app.use('/api/product-recipes', productRecipeRoutes);
app.use('/api/product-components', productComponentRoutes);
app.use('/api/inventory-units', inventoryUnitRoutes);
app.use('/api/currencies', currencyRoutes);
app.use('/api/equipments', equipmentRoutes);
app.use('/api/website-users', websiteUserRoutes);
app.use('/api/demo-requests', demoRequestRoutes);
app.use('/api/website-payments', websitePaymentRoutes);
app.use('/api/branches', branchRoutes);

module.exports = app, { express };


