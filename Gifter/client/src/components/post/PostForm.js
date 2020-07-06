import React, { useState, useContext } from "react";
import {
  Form,
  FormGroup,
  Card,
  CardBody,
  Label,
  Input,
  Button,
} from "reactstrap";
import { PostContext } from "../../providers/PostProvider";
import { useHistory } from "react-router-dom";

export const PostForm = () => {
  const { addPost } = useContext(PostContext);
  const [userProfileId, setUserProfileId] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [title, setTitle] = useState("");
  const [caption, setCaption] = useState("");

  // Use this hook to allow us to programatically redirect users
  const history = useHistory();

  const submit = (e) => {
    const post = {
      imageUrl,
      title,
      caption,
      userProfileId: +userProfileId,
    };

    addPost(post).then((p) => {
      // Navigate the user back to the home route
      history.push("/");
    });
  };

  return (
    <div className="container pt-4">
      <div className="row justify-content-center">
        <Card className="col-sm-12 col-lg-6">
          <CardBody>
            <Form>
              <FormGroup>
                <Label for="userId">User Id (For Now...)</Label>
                <Input
                  id="userId"
                  onChange={(e) => setUserProfileId(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="imageUrl">Gif URL</Label>
                <Input
                  id="imageUrl"
                  onChange={(e) => setImageUrl(e.target.value)}
                />
              </FormGroup>
              <FormGroup>
                <Label for="title">Title</Label>
                <Input id="title" onChange={(e) => setTitle(e.target.value)} />
              </FormGroup>
              <FormGroup>
                <Label for="caption">Caption</Label>
                <Input
                  id="caption"
                  onChange={(e) => setCaption(e.target.value)}
                />
              </FormGroup>
            </Form>
            <Button color="info" onClick={(e) => {
              e.preventDefault();
              submit()
            }}>
              SUBMIT
            </Button>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};