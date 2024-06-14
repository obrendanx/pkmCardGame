# AuthContext.js file and what it does

## Updating global state to logged in

You can do this by calling the login() function within AuthContext.js

```
const login = (token, userId) => {
    setIsLoggedIn(true);
    setUserId(userId);

    // Set the user token and ID in the cookie
    const now = new Date();
    now.setTime(now.getTime() + 30 * 24 * 60 * 60 * 1000); // Expires in 30 days
    document.cookie = `token=${token}; userId=${userId}; expires=${now.toUTCString()}; path='/'`;

    console.log('Cookie value after setting:', document.cookie);
    };
```

it is called for example in Login.js like this

```
login(data.user.token, data.user.userId);
```

this will set isLoggedIn to true globally

To access isLoggedIn globally or the userId globally 

1. Import AuthContext.js

1. then follow this code similar for your component

    ```
    import React, { useContext } from 'react';
    import { AuthContext } from './AuthContext';

    const Dashboard = () => {
    const { isLoggedIn } = useContext(AuthContext);

    return (
        <div>
        {isLoggedIn ? (
            <h2>Welcome to the Dashboard!</h2>
        ) : (
            <h2>Please log in to access the Dashboard</h2>
        )}
        </div>
    );
    };

    export default Dashboard;
    ```
