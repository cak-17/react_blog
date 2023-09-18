import { useDispatch, useSelector } from "react-redux";
import {Layout, Menu} from "antd"
import React from "react";
import ListPosts from "./ListPosts";
import CreateNewPost from "./CreateNewPost";
import { selectMenuPage, setMenu } from "../../store/mainSlice";
import { selectUser } from "../../store/authSlice";
import Login from "../../components/LoginForm";

// ADD CONTENT SELECTOR TO HANDLE LOGIN OR PAGE
// THEN ADD THIS FUCKING ROUTERS!!!!!!
const BlogContent= () => {
    const menuPage = useSelector(selectMenuPage)
    const { Content } = Layout
    const user = useSelector(selectUser)
    let content = (
        <Login/>
    )

    if (user) {
        content = (
        <React.Fragment>
            <h2>Welcome {user}</h2>
            {menuPage==1 ? <ListPosts/> : <CreateNewPost/>}
        </React.Fragment>
        )
    }
    return (
        <Content>
            {content}
        </Content>
    )
}

const Blog = () => {
    const menuPage = useSelector(selectMenuPage)

    console.log(menuPage)
    const dispatch = useDispatch()
    const { Header } = Layout

    const handleClick = e => {
        dispatch(setMenu(e))
    }



    return (
        <Layout>
            <Header>
                <Menu theme="dark" mode="horizontal" defaultSelectedKeys={menuPage-toString()}>
                    <Menu.Item key="1" onClick={() => handleClick(1)}>Read Posts</Menu.Item>
                    <Menu.Item key="2" onClick={() => handleClick(2)}>Create Post</Menu.Item>
                </Menu>
            </Header>
            <BlogContent menuPage={menuPage} />
        </Layout>
    )
}

export default Blog;