import { useDispatch, useSelector } from "react-redux";
import {Layout, Menu} from "antd"

import ListPosts from "./ListPosts";
import CreateNewPost from "./CreateNewPost";
import { selectMenuPage, setMenu } from "../../store/mainSlice";


const Blog = () => {
    const menuPage = useSelector(selectMenuPage)
    console.log(menuPage)
    const dispatch = useDispatch()
    const { Header, Content } = Layout


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
            <Content>
                {menuPage==1 ? <ListPosts/> : <CreateNewPost/>}
            </Content>
        </Layout>
    )
}

export default Blog;