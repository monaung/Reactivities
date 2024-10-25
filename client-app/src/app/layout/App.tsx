import React, { Fragment, useEffect, useState } from 'react';
import './styles.css'
import 'semantic-ui-css/semantic.min.css'
import axios from 'axios';
import { Button, Container, Header, List } from 'semantic-ui-react';
import NavBar from '../../features/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import { Activity } from '../models/Activity';

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<Activity | undefined>(undefined);

  useEffect(() => {
    axios.get<Activity[]>('http://localhost:5000/api/activities')
      .then(response => {
        setActivities(response.data);
      })
  }, [])

  function handleSelectActivity(id: string){
    setSelectedActivity(activities.find(x=> x.id === id));
  }

  function handleCancelSelect()
  {
    setSelectedActivity(undefined);
  }

  return (
    <>
      <NavBar />
      <Container style={{marginTop: '7em'}}>
        <ActivityDashboard 
          activities={activities} 
          selectedActivity={selectedActivity}
          selectActivity = {handleSelectActivity}
          cancelSelectActivity = {handleCancelSelect}
        />
      </Container>
    </>
  )
}

export default App;
