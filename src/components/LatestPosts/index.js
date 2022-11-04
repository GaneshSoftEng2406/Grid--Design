import React from 'react';
import FilterCapsules from '../FilterCapsules';
import BlogCards from '../BlogCards';
import styles from './latestposts.module.css'
// import Header from './Footers/Footer';

const LatestPosts = () => {
    return ( 
        <div className={styles.postsContainer}>
            <h3>Latest Posts</h3>
            <FilterCapsules />
            <BlogCards />
            {/* <Header /> */}
        </div>
     );
}
 
export default LatestPosts;