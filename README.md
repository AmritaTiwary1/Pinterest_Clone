# Pinterest Clone - Full Stack Web App

This project is a **Pinterest Clone** built with **Node.js**, **Express.js**, and **MongoDB**. The website replicates key features of Pinterest, allowing users to create, view, and share pinboards. It also includes features like user authentication, image uploading, and session management.

## Features

- **User Authentication**: Users can register, log in, and manage their accounts using **Passport.js** and **passport-local**.
- **Pinboards**: Users can create pinboards to organize and save images.
- **Image Uploading**: Users can upload images to pinboards using **Multer**.
- **Sessions & Flash Messages**: User sessions are managed using **express-session**, and flash messages for notifications use **connect-flash**.
- **Persistent Data**: Data is stored in **MongoDB** using **Mongoose** to store user profiles, pins, and boards.
- **Unique URL Generation**: The **uuid** package is used to generate unique identifiers for images and boards.

## Technologies Used

- **Node.js**: JavaScript runtime to build the server-side application.
- **Express.js**: Web framework for building the back-end.
- **MongoDB**: NoSQL database for persistent data storage.
- **Mongoose**: MongoDB object modeling for easier querying and schema management.
- **Passport.js**: Middleware for user authentication.
- **passport-local**: Strategy for handling local authentication using username and password.
- **passport-local-mongoose**: Simplifies Passport.js authentication with Mongoose integration.
- **Express-session**: For managing user sessions.
- **Connect-flash**: For displaying flash messages (e.g., success, error) to users.
- **Multer**: Middleware for handling file uploads, used for image uploading.
- **uuid**: A library to generate unique IDs for files and boards.

### Steps to Run the Project Locally

1. Clone the repository to local machine:

   ```bash
   git clone https://github.com/your-username/pinterest-clone.git
Navigate to the project folder:

bash
Copy code
cd pinterest-clone
Install the necessary dependencies:

bash
Copy code
npm install
Set up MongoDB connection:

If using MongoDB Atlas, create a cluster and get MongoDB URI.
If using a local MongoDB instance, make sure it’s running and update the connection URI in project.
Create a .env file in the root of the project and add environment variables (for session secret and MongoDB URI):

bash
Copy code
MONGO_URI=your_mongodb_connection_uri
SESSION_SECRET=your_session_secret
Start the application:

bash
Copy code
npm start
This will run the app on http://localhost:3000.


### Contributing
Feel free to fork the repository and submit pull requests! If you find any bugs or have suggestions for new features, please open an issue on GitHub.

#Acknowledgements
Passport.js and passport-local for user authentication.
Multer for file uploads.
MongoDB and Mongoose for persistent data storage.
uuid for generating unique identifiers.



## Thank you for checking out my project!


