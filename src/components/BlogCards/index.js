import React, { useEffect, useState } from 'react';
import { blogDetails } from '../../utils/resourceData';
import moment from 'moment';
import styles from './blogcards.module.css';


const BlogCards = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        setBlogs(blogDetails)
    }, [])
    

    return (
        <div className={styles.blogCardsWrapper}>
            {/* <h3>Blog Cards</h3> */}
            {blogs.length && blogs.map(
                ({id, title, small_image, authorname, posted_on, description}) => (
                    <div key={id} className={styles.blogCardItem}>
                        <img src={small_image} alt={title}></img>
                        <div className={styles.blogCardDetails}>
                            <h3>{title}</h3>
                            <p className={styles.authorname}>{authorname}
                            <span className={styles.publishDate}>{' '} | {moment.utc(posted_on).format("DD MMM YYYY")}</span>
                            </p>
                            <p className={styles.description}>{description}</p>
                        </div>
                    </div>
                ) )}
        </div>
      );
}
 
export default BlogCards;