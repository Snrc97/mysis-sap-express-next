-- User and Role Management
CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(id)
);

-- Purchase Request & Approval Process
CREATE TABLE purchase_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    request_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
    description TEXT,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Supplier Management
CREATE TABLE suppliers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    contact_info TEXT
);

CREATE TABLE bids (
    id INT AUTO_INCREMENT PRIMARY KEY,
    request_id INT,
    supplier_id INT,
    price DECIMAL(10,2),
    delivery_time INT, -- in days
    FOREIGN KEY (request_id) REFERENCES purchase_requests(id),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

CREATE TABLE orders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    bid_id INT,
    order_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Pending', 'Completed', 'Cancelled') DEFAULT 'Pending',
    FOREIGN KEY (bid_id) REFERENCES bids(id)
);

-- Financial Management
CREATE TABLE budgets (
    id INT AUTO_INCREMENT PRIMARY KEY,
    department VARCHAR(255),
    amount DECIMAL(15,2),
    fiscal_year YEAR
);

CREATE TABLE expenditures (
    id INT AUTO_INCREMENT PRIMARY KEY,
    budget_id INT,
    amount DECIMAL(15,2),
    expenditure_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (budget_id) REFERENCES budgets(id)
);

CREATE TABLE invoices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    order_id INT,
    invoice_number VARCHAR(255) UNIQUE,
    amount DECIMAL(15,2),
    due_date DATE,
    status ENUM('Unpaid', 'Paid', 'Overdue') DEFAULT 'Unpaid',
    FOREIGN KEY (order_id) REFERENCES orders(id)
);

CREATE TABLE payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    invoice_id INT,
    payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    amount DECIMAL(15,2),
    FOREIGN KEY (invoice_id) REFERENCES invoices(id)
);

-- Inventory & Warehouse Management
CREATE TABLE inventory (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255),
    quantity INT,
    warehouse_location VARCHAR(255)
);



CREATE TABLE price_lists (
    id INT AUTO_INCREMENT PRIMARY KEY,
    supplier_id INT,
    product_name VARCHAR(255),
    price DECIMAL(10,2),
    FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);

-- Notifications & Process Automation
CREATE TABLE notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    message TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Product Recipe & Component Management
CREATE TABLE product_recipes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(255),
    description TEXT
);

CREATE TABLE product_components (
    id INT AUTO_INCREMENT PRIMARY KEY,
    recipe_id INT,
    component_name VARCHAR(255),
    quantity INT,
    FOREIGN KEY (recipe_id) REFERENCES product_recipes(id)
);

-- Definitions & Auxiliary Tables
CREATE TABLE inventory_units (
    id INT AUTO_INCREMENT PRIMARY KEY,
    unit_name VARCHAR(50)
);

CREATE TABLE currencies (
    id INT AUTO_INCREMENT PRIMARY KEY,
    currency_code VARCHAR(3),
    exchange_rate DECIMAL(10,4)
);

-- Equipment & Vehicle Management
CREATE TABLE equipments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    serial_number VARCHAR(255) UNIQUE,
    maintenance_date DATE
);

-- Website Membership and Payment Transactions
CREATE TABLE website_users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(255) NOT NULL UNIQUE,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL
);

CREATE TABLE demo_requests (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    request_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    status ENUM('Pending', 'Approved', 'Rejected') DEFAULT 'Pending',
    FOREIGN KEY (user_id) REFERENCES website_users(id)
);

CREATE TABLE website_payments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    amount DECIMAL(15,2),
    payment_date DATETIME DEFAULT CURRENT_TIMESTAMP,
    payment_method VARCHAR(50),
    FOREIGN KEY (user_id) REFERENCES website_users(id)
);

-- Branch Management
CREATE TABLE branches (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    location VARCHAR(255)
);
