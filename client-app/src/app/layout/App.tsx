import React, { useEffect } from 'react';
import './styles.css'
import 'semantic-ui-css/semantic.min.css'
import {Container } from 'semantic-ui-react';
import NavBar from './NavBar.tsx';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import LoadingComponent from './loadingComponent.tsx';
import { useStore } from '../stores/store.ts';
import { observer } from 'mobx-react-lite';

function App() {

  const {activityStore} = useStore();

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore])


  if (activityStore.loadingInitial) return <LoadingComponent content='Loading app' inverted={false} />
  return (
    <>
      <NavBar/>
      <Container style={{ marginTop: '7em' }}>
          <ActivityDashboard />
      </Container>
    </>
  )
}

export default observer(App);
