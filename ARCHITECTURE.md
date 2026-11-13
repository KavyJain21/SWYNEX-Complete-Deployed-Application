# SWYNEX Wanderlust – Project Architecture

## About the project

SWYNEX Wanderlust is a hotel booking website that I am planning to build as part of my internship project. Users will be able to search for hotels, view hotel and room details, choose their travel dates and make a booking.

The first version will focus on the basic hotel booking process. I will build the main features first and add more options after the basic application is working.

## Main features

The application will have two main types of users: customers and an admin.

| Customer | Admin |
|---|---|
| Create an account and log in | Add and update hotel listings |
| Search hotels by location | Edit or remove hotel details |
| View hotel details and images | Manage room details |
| Select check-in and check-out dates | Manage room availability |
| Make a booking | View customer bookings |
| View and cancel their bookings | Update booking status |

## Technology stack

I plan to use React for the frontend, Node.js and Express for the backend, and MongoDB for the database. The frontend and backend will communicate through REST APIs.

| Part | Technology | Purpose |
|---|---|---|
| Frontend | React.js | Build website pages |
| Frontend setup | Vite | Run the React project |
| Styling | CSS | Design the website |
| Backend | Node.js | Run server-side code |
| Backend framework | Express.js | Create API routes |
| Database | MongoDB | Store application data |
| Database library | Mongoose | Work with MongoDB |
| Authentication | JWT | Check logged-in users |
| Password security | bcrypt | Hash passwords |
| Image storage | Cloudinary | Store hotel images (planned) |

## How the application will work

The application will have three main parts: frontend, backend and database. The user will use the React website to search and book hotels. The backend will handle requests, check the booking details and store the information in MongoDB.

```text
Customer / Admin
       |
       v
React Frontend
       |
       | REST API requests
       v
Node.js + Express Backend
       |
       | Database operations
       v
MongoDB Database
```

| Part | Work |
|---|---|
| React frontend | Shows pages and collects user input |
| Express backend | Handles requests and booking logic |
| Authentication | Checks the user's login and role |
| MongoDB | Stores users, hotels, rooms and bookings |
| API response | Sends the result back to the frontend |

## Main project folders

| Folder/File | Purpose |
|---|---|
| `client/` | React frontend |
| `client/src/components/` | Reusable website components |
| `client/src/pages/` | Website pages |
| `client/src/services/` | API calls |
| `client/src/context/` | Shared user and booking state |
| `server/` | Node.js and Express backend |
| `server/src/config/` | Database and app configuration |
| `server/src/controllers/` | Request handling logic |
| `server/src/models/` | MongoDB models |
| `server/src/routes/` | API routes |
| `server/src/middleware/` | Authentication and validation |
| `server/src/validators/` | Request validation |
| `docs/` | Project documents |

## Main database collections

The application will use four main collections to store the required information.

### User collection

This collection will store customer and admin account details.

| Field | Type | Purpose |
|---|---|---|
| name | String | User name |
| email | String | Email address |
| passwordHash | String | Hashed password |
| role | String | Customer or admin |
| createdAt | Date | Account creation date |

### Hotel collection

This collection will store the hotel information shown on the website.

| Field | Type | Purpose |
|---|---|---|
| name | String | Hotel name |
| description | String | Hotel details |
| location | Object | City and address details |
| images | Array | Hotel image URLs |
| facilities | Array | Available facilities |
| rating | Number | Hotel rating, if available |
| isActive | Boolean | Whether hotel is listed |

### Room collection

This collection will store the room types and their details for each hotel.

| Field | Type | Purpose |
|---|---|---|
| hotelId | ObjectId | Related hotel |
| roomType | String | Type of room |
| pricePerNight | Number | Price for one night |
| capacity | Number | Maximum guests |
| totalRooms | Number | Number of rooms |
| isActive | Boolean | Whether room type is available |

### Booking collection

This collection will store the booking details submitted by customers.

| Field | Type | Purpose |
|---|---|---|
| userId | ObjectId | Customer who made the booking |
| hotelId | ObjectId | Selected hotel |
| roomId | ObjectId | Selected room type |
| checkIn | Date | Check-in date |
| checkOut | Date | Check-out date |
| guests | Number | Number of guests |
| totalAmount | Number | Calculated booking amount |
| status | String | Booking status |
| createdAt | Date | Booking creation date |

## Database relationships

| Relationship | Description |
|---|---|
| User and Booking | One user can make multiple bookings |
| Hotel and Room | One hotel can have multiple room types |
| Hotel and Booking | One hotel can receive multiple bookings |
| Room and Booking | A room type can be included in multiple bookings |

The backend will check room availability for the selected dates before confirming a booking. It will calculate the total amount using the room price and number of nights instead of trusting an amount sent by the browser.

## API overview

These are the main API routes planned for the first version. The local development base URL will be `http://localhost:5000/api/v1`.

| Method | Route | Purpose |
|---|---|---|
| POST | `/auth/register` | Register a user |
| POST | `/auth/login` | Log in |
| GET | `/auth/me` | Get logged-in user details |
| GET | `/hotels` | Search and show hotels |
| GET | `/hotels/:id` | Show hotel details |
| GET | `/hotels/:id/rooms` | Show room types |
| POST | `/bookings` | Create a booking |
| GET | `/bookings/my` | Show user's bookings |
| GET | `/bookings/:id` | Show booking details |
| PATCH | `/bookings/:id/cancel` | Cancel an eligible booking |
| POST | `/admin/hotels` | Add a hotel (admin) |
| PATCH | `/admin/hotels/:id` | Update hotel details (admin) |
| POST | `/admin/hotels/:id/rooms` | Add a room type (admin) |
| GET | `/admin/bookings` | View all bookings (admin) |
| PATCH | `/admin/bookings/:id/status` | Update booking status (admin) |

## How the booking will work

1. The user searches for a hotel and selects one.
2. The user selects a room type and travel dates.
3. The user enters guest details.
4. The backend checks whether enough rooms are available for the selected dates.
5. The backend calculates the total price based on the room price and number of nights.
6. The booking is saved in MongoDB.
7. The user sees a booking confirmation and can view it later.

## Booking status

| Status | Meaning |
|---|---|
| Pending | Booking request has been submitted |
| Confirmed | Booking has been accepted |
| Cancelled | Booking has been cancelled |
| Completed | Guest's stay has been completed |

## Security

I will take care of the following points while developing the application.

- Passwords will be stored as hashes using bcrypt.
- JWT will be used to protect private routes.
- Admin routes will only be accessible to admin users.
- Users will only be able to view and manage their own bookings.
- Form data will be validated on the backend.
- Room availability and booking totals will be checked on the server.
- Secret keys and database details will be kept in an environment file and not uploaded to GitHub.

## Development plan

| Step | Work |
|---|---|
| 1 | Create frontend and backend folders |
| 2 | Set up React and Express |
| 3 | Connect MongoDB |
| 4 | Create User, Hotel, Room and Booking models |
| 5 | Add registration and login |
| 6 | Create hotel listing and details pages |
| 7 | Add hotel search and filters |
| 8 | Add room selection and date selection |
| 9 | Add booking and availability checking |
| 10 | Add user booking history |
| 11 | Add admin hotel and booking management |
| 12 | Test the application and fix errors |

## Future improvements

After the basic version is complete, I can add more features to improve the website.

| Feature | Possible improvement |
|---|---|
| Online payment | Add a payment gateway |
| Hotel reviews | Allow users to rate and review hotels |
| Wishlist | Save favourite hotels |
| Notifications | Send booking updates |
| Coupons | Add discounts and offers |
| Better search | Add filters for price, rating and facilities |

## Conclusion

This document explains my plan for building SWYNEX Wanderlust. I will first focus on user login, hotel listings, search, room selection and booking. After the main booking process works properly, I can add online payments and other improvements.
