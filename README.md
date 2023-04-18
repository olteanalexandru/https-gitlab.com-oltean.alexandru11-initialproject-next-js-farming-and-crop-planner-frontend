
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
# Agriculture Management System

This Agriculture Management System allows different types of users (Administrators, Fermiers, and Guests) to interact with various components such as UserAccount, NewsFeed, Crop, RotationMode, Recommendations, Newsletter, and ContactAdmin.

## Users

### Administrator
An Administrator can:
- Manage user accounts:
  - Change passwords
  - Delete accounts
  - Create additional Administrators
- Manage the news feed by adding, editing, or deleting posts
- Delete any crop from the system

### Fermier
A Fermier can:
- Manage their own account:
  - Change password
  - Update profile picture
  - Delete account
- Add and manage their own crops
- Select crops for rotation mode
- Get custom recommendations based on the selected crops

### Guest
A Guest can:
- View news feed posts
- Create accounts of type Fermier
- Contact the admins
- Subscribe to the newsletter

## Components

### UserAccount
Handles account management features like changing passwords and deleting accounts.

### NewsFeed
Displays the latest news and updates related to agriculture. Administrators can manage the content while Guests and Fermiers can view the posts.

### Crop
Allows Fermiers to add and manage their own crops. Administrators can delete any crop.

### RotationMode
Provides a way for Fermiers to select crops for rotation mode.

### Recommendations
Generates custom recommendations for Fermiers based on their selected crops.

### Newsletter
Guests can subscribe to receive the latest news and updates via email.

### ContactAdmin
Allows Guests to send messages to the Administrators for any inquiries or support.
