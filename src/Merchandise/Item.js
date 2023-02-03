import classes from './Merch.module.css';
import Carousel from 'react-bootstrap/Carousel';

const Item = (props) => {
    return (
        <div className={classes.item}>
            <Carousel
                variant="dark"
                style={{ width: "15rem",height:"10rem" }}
                fade
            >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.front}
                        alt="front"
                    />
                    {/* <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={props.back}
                        alt="Back"
                    />
                    {/* <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption> */}
                </Carousel.Item>
            </Carousel>
            <a href='#'>
                <button>
                    Soon
                </button>
            </a>
        </div>
    );
}

export default Item;