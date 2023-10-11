Live Link: https://book-catalog-backend-prisma-postgres.vercel.app/

Application Routes:

**User**

- api/v1/auth/signup (POST)
- api/v1/users (GET)
- api/v1/users/cfb4ee49-020d-47bb-9a7a-57eaf545dc75 (Single GET)
- api/v1/users/cfb4ee49-020d-47bb-9a7a-57eaf545dc75 (PATCH)
- api/v1/users/cfb4ee49-020d-47bb-9a7a-57eaf545dc75 (DELETE)
- api/v1/profile (GET)

**Category**

- api/v1/categories/create-category (POST)
- api/v1/categories (GET)
- api/v1/categories/0fb1bc78-3980-408f-b25e-9402ec213828 (Single GET)
- api/v1/categories/0fb1bc78-3980-408f-b25e-9402ec213828 (PATCH)
- api/v1/categories/0fb1bc78-3980-408f-b25e-9402ec213828 (DELETE)

**Books**

- api/v1/books/create-book (POST)
- api/v1/books (GET)
- api/v1/books/0fb1bc78-3980-408f-b25e-9402ec213828/category (GET)
- api/v1/books/f6644cca-65bf-4a1c-ac4c-959e919e9c68 (GET)
- api/v1/books/f6644cca-65bf-4a1c-ac4c-959e919e9c68 (PATCH)
- api/v1/books/f6644cca-65bf-4a1c-ac4c-959e919e9c68 (DELETE)

**Orders**

- api/v1/orders/create-order (POST)
- api/v1/orders (GET)
- api/v1/orders/97fe4358-7adf-4aa2-b9e2-407489d64486 (GET)
