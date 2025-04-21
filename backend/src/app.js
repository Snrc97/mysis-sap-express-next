const express = require('express');
require('../../extensions/common');


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


