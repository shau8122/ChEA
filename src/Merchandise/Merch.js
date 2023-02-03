import Item from './Item';
import classes from './Merch.module.css';
const Merch = () => {
    return (
        <div className={classes.merch}>
            <div className={classes.items}>
                <Item front="https://i.imgur.com/wmwtIDH.jpg" back="https://i.imgur.com/SiSyMuT.jpg"/>
                <Item front="https://i.imgur.com/SiSyMuT.jpg" back="https://i.imgur.com/wmwtIDH.jpg"/>
            </div>
        </div>
    );
}

export default Merch;