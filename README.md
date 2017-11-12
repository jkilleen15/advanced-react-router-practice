### Setup
* Fork, Clone, yarn install, yarn start
* Slight quirk - refreshing doesn't work from any path other than the default one so you will have to go back to the default path to refresh

### App.js
X Import BrowserRouter,Switch and Route from react-router-dom

X Import components needed

X Create the appropriate routes `{/* PUT YOUR ROUTES HERE */}`

X Make sure the default route goes at the bottom

X Make sure BrowserRouter wraps everything

X Make sure you use the component prop, not render.

### Routes
* /              -> Dashboard X
* /charts        -> Charts X
* /tables        -> Tables X
* /settings      -> Settings X
* /wall          -> Wall X
* /profiles      -> Profiles X
* /marquee/:text -> Marquee X
* /profile/:id   -> Profile NO

//////

### Create these components. The content of the components is not important, just put anything `<div> whatever </div>`
X Charts.js
X Tables.js
X Settings.js
X Wall.js

### Existing components
* Profiles.js
    X Import Link from react-router-dom
    X change the `<a>` to be a Link that links to `/profile/ + user.id`

* Profile.js
    X Change the hard coded 0 with the value from the parameter id

* Dashboard.js

* Marquee
    X replace the hard coded "hello" with the text parameter from the route

### SideNav
X Import Link from react-router-dom
X Create links to all the routes except Profile
X Hard code some links to Marquee // completed all separate links
    * /marquee/iloveroutes
    * /marquee/reactrouterrules
    * …etc
