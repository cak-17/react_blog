import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';

const SearchResults = () => {
    const location = useLocation();
    const searchQuery = new URLSearchParams(location.search).get('query');
    const posts = useSelector((state) => state.posts.posts);
    // eslint-disable-next-line max-len
    const filteredPosts = posts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <Container style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}
        >
            <h2>Search Results</h2>
            <p>
                You searched for:
                {' '}
                {searchQuery}
            </p>

            {filteredPosts.length > 0 ? (
                <ul>
                    {filteredPosts.map((post) => (
                        <li key={post.id}>{post.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No results found.</p>
            )}
        </Container>
    );
};

export default SearchResults;
