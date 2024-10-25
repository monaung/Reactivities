import { Button, Card, Image } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";

interface Props{
    activity: Activity;
    cancelSelectActivity:() => void;
}

export default function ActivityDetails({activity, cancelSelectActivity}: Props)
{
    return (
        <Card  fluid>
           <Image src={`/assets/categoryImages/${activity.category}.jpg`} />
            <Card.Content>
                <Card.Header>
                    {activity.title}
                </Card.Header>
                <Card.Meta>
                    {activity.date}
                </Card.Meta>
                <Card.Description>
                    {activity.description}
                </Card.Description>
                <Card.Content>
                    <Button basic content="Edit" color="blue" />
                    <Button onClick={()=> cancelSelectActivity()} basic content="Cancel" color="grey" />
                </Card.Content>
            </Card.Content>
        </Card>
    )
}