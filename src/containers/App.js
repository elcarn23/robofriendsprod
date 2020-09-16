import React from 'react';
import Cardlist from '../components/Cardlist';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox';
import ErrorBoundary from '../components/ErrorBoundary';
import './App.css';

const App = () => {
    // Common parent between Searchbox and Cardlist
    // Need to update state here to pass data between
    // the Search box and the Cardlist
    // Going to use useState
    const [robotsList, setRobotsList] = React.useState([]);
    const [searchField, setSearchField] = React.useState("");
    const [filteredList, setFilteredList] = React.useState([]);

    // Load up the robots from json placeholder
    React.useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            return response.json();
        }).then(users => {
            setRobotsList(users);
        })
    }, []);

    // once we update the search field it wasn't picking up the 
    // new value for the update robots.
    const onSearchChanged = (event) => {
        setSearchField(event.target.value);
    }

    // So in order for the robot list to pick up the change we moved it to a
    // seperate function to update it outside of the useEffect
    const updateRobotList = () => {
        // filteredList = robotsList.filter(robot => {
        //     return robot.name.toLowerCase().includes(searchField.toLowerCase());
        // }); 
        setFilteredList(robotsList.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase());    
        }));
    } 

    // Use use effect to track the value of search field
    // when it is updated call the update robot list function
    // outside of the effect in order to push the re render on the 
    // new value for the list.
    React.useEffect(
        updateRobotList
    , [searchField, robotsList]);

    return (
        <div className='tc'>
            <h1 className="f1">RobotFriends</h1>
            <SearchBox searchChange={ onSearchChanged } />
            <Scroll>
                <ErrorBoundary>
                    <Cardlist robots={filteredList}></Cardlist>
                </ErrorBoundary>
            </Scroll>
        </div>
    );
}

export default App;