import React, {  useEffect, useState} from 'react';
import { filterCategories } from '../../utils/resourceData';
import styles from './topbar.module.css';

const TopBar = () => {
    const [categories, setCategories] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
     

    useEffect(() => {
        setCategories(filterCategories)
    }, [])

    const showDropdown = () => {
        setIsClicked(!isClicked)
    }

    return ( 
        <header className={styles.topbar}>
            <a className={styles.logoWrapper} href="/stories">
                <div>
                    <div className={styles.logo}>EdYoda</div>
                    <p className={styles.logoText}>Stories</p>
                </div>
            </a>
            <nav className={styles.navMenuWrapper}>
                <div className={styles.exploreCategoriesWrapper}> 
                    <button className={styles.btnExploreCategories} onClick={showDropdown}>Explore Categories <i class="fas fa-angle-down"></i></button>
                    { isClicked && (
                        <div className={styles.dropdown}>
                            {categories.length && categories.map(({id, title}) => (
                                <a key={id} href="/">{title}</a>
                            ))}
                            <i></i>
                        </div>
                    )
                    }
                    
                </div>
                <div className={styles.rightSideMenu}>
                    <p className={styles.edyodaText}>EdYoda is free learning and knowledge <br/> sharing platform for techies</p>
                    <button className={styles.btnGoToMain}>Go To Main Website</button>
                </div>
            </nav>
        </header>
      );
}
 
export default TopBar;