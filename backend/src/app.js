const express = require('express');
require('./app/extensions/common');


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
const authRoutes = require('./app/routes/authRoutes');
const roleRoutes = require('./app/routes/roleRoutes');
const userRoutes = require('./app/routes/userRoutes');
const purchaseRequestRoutes = require('./app/routes/purchaseRequestRoutes');
const bidRoutes = require('./app/routes/bidRoutes');
const orderRoutes = require('./app/routes/orderRoutes');
const budgetRoutes = require('./app/routes/budgetRoutes');
const expenditureRoutes = require('./app/routes/expenditureRoutes');
const invoiceRoutes = require('./app/routes/invoiceRoutes');
const paymentRoutes = require('./app/routes/paymentRoutes');
const inventoryRoutes = require('./app/routes/inventoryRoutes');
const supplierRoutes = require('./app/routes/supplierRoutes');
const priceListRoutes = require('./app/routes/priceListRoutes');
const notificationRoutes = require('./app/routes/notificationRoutes');
const productRecipeRoutes = require('./app/routes/productRecipeRoutes');
const productComponentRoutes = require('./app/routes/productComponentRoutes');
const inventoryUnitRoutes = require('./app/routes/inventoryUnitRoutes');
const currencyRoutes = require('./app/routes/currencyRoutes');
const equipmentRoutes = require('./app/routes/equipmentRoutes');
const websiteUserRoutes = require('./app/routes/websiteUserRoutes');
const demoRequestRoutes = require('./app/routes/demoRequestRoutes');
const websitePaymentRoutes = require('./app/routes/websitePaymentRoutes');
const branchRoutes = require('./app/routes/branchRoutes');

require('dotenv').config().parsed;
const api_prefix = "/api";
// Use routes
app.use(api_prefix+'/auth', authRoutes);
app.use(api_prefix+'/roles', roleRoutes);
app.use(api_prefix+'/users', userRoutes);
app.use(api_prefix+'/purchase-requests', purchaseRequestRoutes);
app.use(api_prefix+'/bids', bidRoutes);
app.use(api_prefix+'/orders', orderRoutes);
app.use(api_prefix+'/budgets', budgetRoutes);
app.use(api_prefix+'/expenditures', expenditureRoutes);
app.use(api_prefix+'/invoices', invoiceRoutes);
app.use(api_prefix+'/payments', paymentRoutes);
app.use(api_prefix+'/inventory', inventoryRoutes);
app.use(api_prefix+'/suppliers', supplierRoutes);
app.use(api_prefix+'/price-lists', priceListRoutes);
app.use(api_prefix+'/notifications', notificationRoutes);
app.use(api_prefix+'/product-recipes', productRecipeRoutes);
app.use(api_prefix+'/product-components', productComponentRoutes);
app.use(api_prefix+'/inventory-units', inventoryUnitRoutes);
app.use(api_prefix+'/currencies', currencyRoutes);
app.use(api_prefix+'/equipments', equipmentRoutes);
app.use(api_prefix+'/website-users', websiteUserRoutes);
app.use(api_prefix+'/demo-requests', demoRequestRoutes);
app.use(api_prefix+'/website-payments', websitePaymentRoutes);
app.use(api_prefix+'/branches', branchRoutes);

module.exports = app, { express };


