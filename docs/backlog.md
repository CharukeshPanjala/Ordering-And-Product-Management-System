#  Backlog - Story 1.3: Requirements Gathering & Backlog

**Objective:** Identify and document user stories and acceptance criteria from an admin's perspective.  
This backlog serves as a working draft for Jira import, grooming, and sprint planning.

---

##  User Role: Admin

---

###  Story 1: Manage Products

**As an admin**, I want to add, edit, delete, and view products  
**So that** I can keep the product catalog up to date

**Acceptance Criteria:**
- Admin can create a product with name, price, stock, and image
- Admin can update any product’s details
- Admin can delete products from the list
- Admin can search and filter products by name and status
- Form fields are validated before submission

---

###  Story 2: Manage Orders

**As an admin**, I want to place and manage customer orders  
**So that** I can track sales and fulfill them correctly

**Acceptance Criteria:**
- Admin can create a new order by selecting products and quantities
- Admin can view all orders with status, date, and customer details
- Admin can update the status of an order (e.g., Pending, Shipped)
- Admin can cancel or delete orders
- Orders are validated against stock levels before confirmation

---

###  Story 3: View Business Dashboard

**As an admin**, I want to see key business metrics  
**So that** I can monitor performance at a glance

**Acceptance Criteria:**
- Dashboard shows total products, total orders, and revenue
- Metrics are updated dynamically or at regular intervals
- Graphs visualize trends over time (e.g., orders/day)
- Admin sees alerts for low stock or failed orders

---

###  Story 4: Receive System Alerts

**As an admin**, I want to be notified of system-critical issues  
**So that** I can take quick action when something goes wrong

**Acceptance Criteria:**
- Alerts trigger when stock is low or system errors occur
- Alerts are visible on the dashboard
- Alerts can be acknowledged or dismissed
- Alerts include a timestamp and description

---

### Story 6: Access Control and Login

**As an admin**, I want to log in securely and manage access  
**So that** only authorized users can manage the system

**Acceptance Criteria:**
- Admin can log in using email and password
- Session expires after inactivity
- Unauthorized users cannot access admin routes
- Admin role is required to access backend dashboards

---

### Story 7: Connect Frontend and Backend

**As an admin**, I want frontend actions to reflect real-time backend operations  
**So that** I can be confident data is consistent

**Acceptance Criteria:**
- Product and order UIs call actual backend APIs
- Successful operations show success messages
- Failed operations return error messages
- Data updates immediately on frontend after backend changes

---

##  Grooming Notes

| Story | Priority | Story Points | Notes |
|-------|----------|--------------|-------|
| Manage Products | High | 5 | Core CRUD feature |
| Manage Orders | High | 5 | Includes logic checks |
| Business Dashboard | Medium | 3 | Visual only, no CRUD |
| System Alerts | Medium | 3 | Trigger-based |
| Login & Access | High | 3 | Security feature |
| Connect Frontend/Backend | High | 5 | Integration focus |

---

##  Jira Task Recommendations

For each user story:
- Create an **Epic** or **Task**
- Add subtasks for:
  - Frontend
  - Backend
  - UI/UX
  - Testing
- Attach this markdown file or link to it

---

_Last updated: 2025-06-21_  
_Author: Project Team - OAPMS_

