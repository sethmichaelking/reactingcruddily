import React from 'react'
import styled from 'styled-components';
const GridWrapper = styled.div`
margin-top: 1em;
margin-left: 6em;
margin-right: 6em;
`; 


function BrandExample({posts}) {
  return (
    <GridWrapper>
      <div>
        <h3>Dashboard</h3>
        <h5>There are currently: {posts.length} posts</h5>
      </div>
    </GridWrapper>
  );
}

export default BrandExample;