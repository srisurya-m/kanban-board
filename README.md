Kanban Board
============

A **Kanban Board** application designed to help users manage tasks visually by organizing them into different stages.

Features
--------

-   **Task Management**: Create, update, and delete tasks.
-   **Drag & Drop**: Seamlessly move tasks between different columns.
-   **Search Functionality**: Filter tasks in all columns by title.
-   **Floating Add Button**: Allows adding new tasks only in the **To Do** column.
-   **Local Storage Support**: Tasks persist even after page refresh.
-   **Responsive Design**: Works across different screen sizes.
- **Dark Mode Support**: The UI supports dark mode for a better user experience in low-light environments.

* * * * *

Installation & Setup
--------------------

### Prerequisites

Ensure you have the following installed:

-   **Node.js** (v16 or later)
-   **npm** (comes with Node.js)

### 1️⃣ Clone the Repository

```
git clone https://github.com/srisurya-m/kanban-board.git
cd kanban-board/frontend

```

### 2️⃣ Install Dependencies

```
npm install

```

### 3️⃣ Start the Development Server

```
npm run dev

```

The application will be available at **`http://localhost:5173`**.

* * * * *

Project Structure
-----------------

```
kanban-board/
│── frontend/           # React frontend application
│   ├── src/
│   │   ├── components/  # Reusable React components
│   │   ├── config/      # Configuration files
│   │   ├── hooks/       # Custom hooks
│   │   ├── types/       # TypeScript types and interfaces
│   │   ├── utils/       # Helper functions
│   │   ├── main.tsx     # Application entry point
│   ├── package.json     # Project dependencies
│   ├── vite.config.ts   # Vite configuration
│── README.md           # Project documentation


```

* * * * *

Best Practices Followed
-----------------------

✔️ **State Management:** Implemented using **local storage**, keeping the project lightweight.\
✔️ **Code Quality:** Clean, well-structured, and documented code.\
✔️ **UI Optimization:** Responsive and intuitive design using Chakra UI.
