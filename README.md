
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

"This is the Initial MERN MVC Real Estate project but modified to use NEXT js 13 and Contex, this is still heavily in work


Actors:
Farmer: can create an account, see crops, get optimal crop rotation, get recommendations based on weather/humidity, change their email or password.
Administrator: can do everything a farmer can do, add crops with crop information, delete users, see all of the rotations that have been made.
Use cases:
Create account: both the farmer and administrator can create an account. The system verifies the email and password, and only allows the user to change their email or password after successfully creating the account.
Login: both the farmer and administrator can log in to the system with their email and password.
View crops: both the farmer and administrator can view the list of crops that are currently in the system.
Add crop: only the administrator can add new crops to the system, including the crop information.
Get optimal crop rotation: the farmer can request an optimal crop rotation based on the crops they have selected to plant.
Get recommendations: the farmer can request crop recommendations based on the weather and humidity in their area.
Select crops for rotation: the farmer can select which crops they want to rotate.
View rotation history: the administrator can view a history of all crop rotations that have been made in the system.
Delete account: only the administrator can delete a user account from the system.
Logic:
Only a logged-in user can access the system features.
After creating an account, the user must log in to the system to access the features.
The system verifies the email and password when creating an account and logging in.
The farmer can change their email or password only after successfully creating an account.
Only the administrator can add new crops to the system.
The farmer can select which crops they want to rotate.
The administrator can view a history of all crop rotations that have been made in the system.
Only the administrator can delete a user account from the system.