import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts, deletePost, selectPosts, selectIsLoading } from "../../store/postsSlice";
import { Card, Row, Col, message} from "antd";

import { DeleteOutlined } from "@ant-design/icons";


const ListPosts = () => {
    const posts = useSelector(selectPosts)
    const isLoading = useSelector(selectIsLoading)

    const dispatch = useDispatch()
    
    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    const handleDelete = (id) => {
        dispatch(deletePost(id, info))
    }
    
    const info = (id) => {
        message.info(`Post ${id} Deleted`)
    }
    

    return (
        <Col span={12} offset={6}>
            {!isLoading ? posts.map(p => (
                <Row key={p.id} gutter={[48, 48]}>
                    <Col span={24}>
                        <Card
                            title={p.title}
                            style={{width: '100%'}}
                            actions={[<DeleteOutlined key="delete" onClick={() => handleDelete(p.id)}/>]}>
                            <p>{p.content}</p>
                        </Card>
                    </Col>
                </Row>
            )) : 
            <div>Loading...</div>
        }
        </Col>
    )
}
export default ListPosts