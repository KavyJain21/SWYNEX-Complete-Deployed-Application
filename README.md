# SWYNEX Wanderlust – Hotel Booking Website

## About the project

SWYNEX Wanderlust is a hotel booking website that I am planning to build as part of my internship project. The idea is to make it easier for users to find hotels, check their details, select travel dates and book a stay online.

I will start with the basic features first. After the main booking flow is working properly, more features can be added in later versions.

## Main features

The application will have two main types of users: customers and an admin.

| Customer | Admin |
|---|---|
| Create an account and log in | Add and update hotel listings |
| Search for hotels by location | Edit or remove hotel details |
| View hotel details and images | Manage room and availability details |
| Select check-in and check-out dates | View customer bookings |
| Make a booking | Update booking status |
| View their bookings | Manage basic website information |
| Cancel a booking, based on booking rules | |

## Technology stack

I plan to use the MERN stack for this project. React will be used to build the frontend, Node.js and Express will handle the backend, and MongoDB will store the application data.

| Part | Technology |
|---|---|
| Frontend | React.js with Vite |
| Styling | CSS |
| Backend | Node.js and Express.js |
| Database | MongoDB |
| Database library | Mongoose |
| Authentication | JWT and bcrypt |
| API | REST API |
| Image storage | Cloudinary (planned) |

## How the app will work

1. The user opens the website and searches for hotels by location.
2. The user views the available hotels and selects one.
3. The user checks the hotel details, images and facilities.
4. The user selects check-in and check-out dates.
5. The user enters guest details and confirms the booking.
6. The application saves the booking and shows a confirmation.
7. The user can view their bookings and check their status.

## Main project folders

| Folder/File | Purpose |
|---|---|
| `client/` | React frontend |
| `server/` | Node.js and Express backend |
| `docs/` | Project documents |
| `docs/ARCHITECTURE.md` | Detailed project architecture |
| `README.md` | Project introduction and setup information |

## Main database collections

| Collection | Information stored |
|---|---|
| User | Name, email, password hash and role |
| Hotel | Hotel name, description, location, images and facilities |
| Room | Hotel reference, room type, price, capacity and availability |
| Booking | User, hotel, room, dates, guest count, total amount and status |

## API overview

The frontend and backend will communicate using REST APIs. These are the main routes planned for the first version.

| Method | Route | Purpose |
|---|---|---|
| POST | `/api/v1/auth/register` | Register a user |
| POST | `/api/v1/auth/login` | Log in |
| GET | `/api/v1/hotels` | Show and search hotels |
| GET | `/api/v1/hotels/:id` | Show hotel details |
| GET | `/api/v1/hotels/:id/rooms` | Show available room types |
| POST | `/api/v1/bookings` | Create a booking |
| GET | `/api/v1/bookings/my` | View the user's bookings |
| GET | `/api/v1/bookings/:id` | View booking details |
| GET | `/api/v1/admin/bookings` | View all bookings (admin) |

## Booking status

Bookings will have simple status values. The admin will be able to manage bookings, while users will be able to see the current status.

| Status | Meaning |
|---|---|
| Pending | Booking request has been submitted |
| Confirmed | Booking has been accepted |
| Cancelled | Booking has been cancelled |
| Completed | Guest's stay has been completed |

## Future improvements

After completing the basic version, I would like to add online payments, hotel reviews and ratings, wishlists, discount coupons, email notifications and more advanced hotel filters.

## Current project status

| Work | Status |
|---|---|
| Project idea | Planned |
| Architecture and README | Prepared |
| Frontend development | Not started |
| Backend development | Not started |
| Database connection | Not started |
| Booking functionality | Not started |
| Testing | Not started |

This repository currently contains the project plan and documentation. The actual website will be developed step by step. All features listed above are planned and will be marked complete only after they are implemented and tested.
