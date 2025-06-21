# Software Requirements Specification (SRS)

## Project Goal
The goal of this project is to design and implement an admin dashboard system that allows administrators to efficiently manage products, track orders, and monitor inventory levels. The system will provide features for product management, order processing, low stock alerts, and dashboard analytics, ensuring admins can maintain up-to-date stock and respond quickly to business needs.

---

## Client/Admin Needs
The admin needs a secure dashboard to manage products and orders, monitor stock levels, receive alerts about low inventory, and access business analytics—all from an easy-to-use interface.

### Admin User Requirements

**Product Management:**
- Add new products to the inventory
- Edit existing product details (name, description, price, stock status)
- Delete products as needed
- View a list of all products and their current stock levels

**Order Management:**
- Create new orders and assign products/quantities
- Edit or update existing orders (status, items, quantities)
- View all orders, including status and details
- Cancel orders if necessary

**Inventory Monitoring & Alerts:**
- Receive real-time alerts for products that are low in stock
- View a list of all low-stock items to take prompt action

**Dashboard & Analytics:**
- View key statistics (total orders, sales, low-stock items)
- Access analytics on product demand and sales trends

**Authentication & Security:**
- Securely log in and out of the admin dashboard
- Manage personal profile and password

---

## Project Scope

### In-Scope Functionalities

**Product Management**
- Add, update, and delete products
- View and search product listings
- Filter products by category or availability
- Handle product stock levels

**Order Management**
- Create, update, and cancel customer orders
- Track order status (e.g., pending, shipped, delivered)
- View and filter order lists
- Validate product availability before placing orders

**Dashboard & Alerts**
- Display key metrics (e.g., number of products, active orders, revenue)
- Visual charts and summary statistics
- Real-time alerts for issues (e.g., low inventory)

**User Interface**
- Responsive design for desktop and mobile
- Consistent and user-friendly UI based on Figma designs
- Error handling and validation feedback

**API Development**
- RESTful API endpoints for products, orders, and metrics
- Authentication and role-based access control
- Swagger documentation for all APIs

**Frontend-Backend Integration**
- Seamless communication between frontend and backend
- Token handling and secure data exchange

**Testing & Quality Assurance**
- Unit and integration testing for APIs
- Manual UI testing across devices
- Output validation and bug fixing

---

## Functional & Non-Functional Requirements

### Functional Requirements

**Authentication & Security**
- Secure login/logout for admins
- Profile and password management

**Product Management**
- Add new products
- Edit existing products
- Delete products
- View/search products and stock levels

**Order Management**
- Create new orders
- Edit/update orders
- View all orders (with filters)
- Change order status (New, Processing, Completed, Cancelled)
- Cancel orders

**Inventory Monitoring**
- Display stock levels for all products
- Track real-time updates as orders are processed

**Low Stock Alerts**
- Detect when product stock falls below the threshold
- Notify the admin with low stock alerts

**Dashboard & Analytics**
- Show summary statistics (orders, products, low stock, sales)
- Visualise product demand and order trends (charts/graphs)

### Non-Functional Requirements

**Performance Requirements**
- System must respond within 2 seconds for 95% of requests
- Dashboard must reflect updates within 10 seconds

**Scalability**
- Support 100 concurrent users initially; scalable to 1,000+
- Backend services should be containerized

**Reliability & Availability**
- 99.5% uptime monthly
- Crash recovery within 1 minute

**Security Requirements**
- Secure protocols (OAuth2 or JWT)
- HTTPS encryption (TLS 1.2+)
- Encrypted data storage

**Maintainability**
- Modular code structure using Git
- Swagger docs and inline documentation
- CI/CD support

**Usability**
- Minimal, intuitive design
- Figma-based design consistency
- WCAG 2.1 Level AA accessibility

**Compatibility**
- Compatible with Chrome, Firefox, Edge (latest 2 versions)
- Deployable on Linux/cloud environments

**Audit & Logging**
- Log all critical operations with timestamps and user IDs
- Logs must be retained for 90 days

---

## Inclusions/Exclusions

### Inclusions (Future Consideration)
- "Remember me" checkbox on login
- Bulk import/export (CSV) for products and orders
- Image uploader with preview on Add/Edit Product

### Exclusions (Out of Scope)
- Payment Gateway Integration (e.g., Stripe, PayPal)
- Predictive analytics or AI-based forecasting
- Internationalization or multilingual support
- Native mobile apps
- Email/SMS notifications
- UI for user role management

---

## Verification Method

1. **Review & Approval**
   - Owner: Product Owner
   - Method: Review documents, backlog grooming, sign-off in Jira

2. **Clear Acceptance Criteria**
   - Owner: PO, Developers, QA
   - Method: Defined done criteria, linked to stories

3. **Design Validation**
   - Owner: UI/UX, Stakeholders
   - Method: Review Figma mockups, confirm flows

4. **Functional Testing**
   - Owner: QA, Developers
   - Method: Manual & automated tests, edge cases, validation

5. **User Acceptance Testing (UAT)**
   - Owner: Stakeholders, QA
   - Method: Real workflow scenarios, sign-off for release

6. **Demo & Feedback Sessions**
   - Owner: Dev Team, Stakeholders
   - Method: Sprint-end demos, live feedback

7. **Traceability & Change Management**
   - Owner: PO, Scrum Master
   - Method: Jira issue links, change logs, updated acceptance criteria
