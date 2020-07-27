// Lets build an array containing each robot route we would like to evaluate.
const routes = ['LR', 'URURD', 'RUULLDRD'];


// This function will evaluate the route to see if the robot will be home after completion
backHome = (route) => {
    // Create some variables to hold the counts of each directional moves for the routes
    let rightCount = 0;
    let leftCount = 0;
    let upCount = 0;
    let downCount = 0;

    // Route needs to atleast be divisible by 2 for the robot to return home
    if (route.length % 2 != 0) {
        console.log(`The robot route "${route}" WILL NOT return it to its original starting position.`);
        return;
    }

    // Lets split() the route sring into an array of contianing each character
    const routeArray = route.split('');
    // Lets move through each character of the array and update the counts
    routeArray.forEach(move => {
        switch (move) {
            case "R":
                rightCount++;
                break;
            case "L":
                leftCount++;
                break;
            case "U":
                upCount++;
                break;
            case "R":
                downCount++;
                break;
        }
    });

    // The directional movements need to have the exact same count as the counter movement
    // for it to end up back at the starting position
    if (rightCount == leftCount && upCount == downCount) {
        console.log(`The robot route "${route}" WILL return it to its original starting position.`)

    } else {
        console.log(`The robot route "${route}" WILL NOT return it to its original starting position.`);
    }


}

// Call backHome() for each route in the routes array for evaluation. 
routes.forEach(route => {
    backHome(route);
});