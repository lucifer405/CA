import React, { Component } from "react";
import PostsServices from "../../services/PostsServices";
import { Table,Button } from "react-bootstrap";

class AdminPostDetails extends Component {
    constructor() {
        super();
        this.state = {
            posts: []
        }
    }

    componentDidMount() {
        PostsServices.getAllPosts().then((res) => {
            this.setState({ posts: res.data })
        })
    }
    render() {
        return (
            <>

                <div className="heading"><h2>NOTICE</h2></div>
                <Button  variant="success" href="/admin/addPost" style={{"margin-bottom":"5%","margin-left":"45%","margin-top":"5%"}}>Add New Post</Button>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Post No.</th>
                            <th>Post Heading</th>
                            <th>Post Subject</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    {
                        this.state.posts.map(
                            posts =>
                                <tbody>
                                    <tr>
                                        <td>{posts.postId}</td>
                                        <td>{posts.post_heading}</td>
                                        <td>{posts.post_subject}</td>
                                        <td>{posts.post_desc}{' '}
                                        <Button variant="danger" href="/admin/addPost">Delete Post</Button>{'   '}
                                        <Button variant="primary" href="/admin/addPost">Edit Post</Button></td>
                                    </tr>
                                </tbody>

                        )
                    }
                </Table>
            </>
        )
    }
}

export default AdminPostDetails;