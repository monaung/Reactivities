import { Grid, List } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";
import ActivityList from "./ActivityList";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";

interface Props {
    activities: Activity[];
    selectedActivity: Activity | undefined;
    selectActivity: (id: string) => void;
    cancelSelectActivity: () => void;
    openForm: (id: string) => void;
    closeForm:() => void;
    editMode: boolean;
    createOrEdit: (activity: Activity) => void;
    deleteActivity:(id: string) => void;
}

export default function ActivityDashboard({ activities, selectedActivity,
    selectActivity, cancelSelectActivity,openForm, closeForm, editMode
, createOrEdit, deleteActivity }: Props) /* destructure the properties */ {
    return (
        <Grid>
            <Grid.Column width={10}>
                <ActivityList activities={activities} selectActivity={selectActivity} deleteActivity={deleteActivity} />
            </Grid.Column>
            <Grid.Column widescreen={6}>
                {selectedActivity && !editMode &&
                    <ActivityDetails
                        activity={selectedActivity}
                        cancelSelectActivity={cancelSelectActivity}
                        openForm={openForm}
                    />
                }
                {editMode &&
                    <ActivityForm activity={selectedActivity} 
                                    closeForm={closeForm} 
                                    createOrEdit={createOrEdit}/>
                }
            </Grid.Column>

        </Grid>

    )
}