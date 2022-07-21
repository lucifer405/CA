import React, { Component } from "react";
import PostsServices from "../../services/PostsServices";
import { Table } from "react-bootstrap";

class PostDetails extends Component {
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
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>#</th>
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
                                        <td>{posts.post_desc}</td>
                                    </tr>
                                </tbody>

                        )
                    }
                </Table>
            </>
        )
    }
}

export default PostDetails;