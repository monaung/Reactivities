import { List,Item, Segment, Button, Label } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";

interface Props{
    activities: Activity[];
    selectActivity: (id: string) => void;
}
export default function ActivityList({activities, selectActivity}: Props)
{
    return (
        <Segment>
            <Item.Group divided>
                {activities.map(activity =>(
                    <Item key={activity.id}>
                        <Item.Content>
                            <Item.Header as="a">
                                {activity.title}
                            </Item.Header>
                            <Item.Description>
                                <div>{activity.description}</div>
                                <div>{activity.city},{activity.venue}</div>
                            </Item.Description>
                            <Item.Extra>
                                <Button onClick={()=> selectActivity(activity.id)} content="View" floated="right" color="blue"></Button>
                                <Label basic content ={activity.category} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}