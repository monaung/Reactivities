import { Button, Form, Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/Activity";
import { ChangeEvent, useRef, useState } from "react";

interface Props{
    activity: Activity | undefined;
    closeForm: () => void;
    createOrEdit: (activity: Activity) => void;
    submitting: boolean;
}
export default function ActivityForm({activity: selectedActivity,
    createOrEdit, closeForm, submitting}: Props)
{
    const initialState = selectedActivity ?? {
        id: '',
        title: '',
        category: '',
        description: '',
        date: '',
        city: '',
        venue: ''
    }

    const[activity, setActivity] = useState(initialState);

    function handleSubmit(){
        createOrEdit(activity);
    }

    function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)
    {
        const {name, value} = event.target;
        setActivity({...activity, [name]: value})
    }

    return(
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete="off">
                <Form.Input value={activity.title}  name="title" placeholder="Title" onChange={handleInputChange} />
                <Form.TextArea value={activity.description} name="description" placeholder="Description" onChange={handleInputChange}/>
                <Form.Input value={activity.category} name="category" placeholder="Category" onChange={handleInputChange}/>
                <Form.Input type="date" value={activity.date} name="date" placeholder="Date" onChange={handleInputChange} />
                <Form.Input value={activity.city} name="city" placeholder="City" onChange={handleInputChange} />
                <Form.Input value={activity.venue} name="venue" placeholder="Venue" onChange={handleInputChange} />
                <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
                <Button floated='right' type='button' content='Cancel' onClick={()=>closeForm()} />
            </Form>
        </Segment>
    )
}