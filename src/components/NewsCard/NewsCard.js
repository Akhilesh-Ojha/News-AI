import React , {useState , useEffect, createRef} from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import classNames from 'classnames';
import useStyles from './styles';

const NewsCard = (props) => {
    const classes = useStyles();
    const [elRef, setElRef] = useState([]);
    const scrollToRef = (ref) => window.scroll(0 , ref.current.offsetTop - 50);
    
    useEffect(() => {
        setElRef((refs) => Array(20).fill().map((_ , i) => refs[i] || createRef()));
    } , []);

    useEffect(() => {
        if(props.index === props.activeArticle && elRef[props.activeArticle]) {
            scrollToRef(elRef[props.activeArticle]);
        }
    } , [props.index , props.activeArticle , elRef])
    
    return (
        <Card ref={elRef[props.index]} className={classNames(classes.card , props.activeArticle === props.index ? classes.activeCard : null )}>
            <CardActionArea href={ props.article.url } target="_blank" > 
                <CardMedia
                className={classes.media}
                image={ props.article.urlToImage || 'https://media4.s-nbcnews.com/i/nindexewscms/2019_01/2705191/nbc-social-default_b6fa4fef0d31ca7e8bc7ff6d117ca9f4.png'}
                title="Contemplative Reptile"
                />
                <div className={classes.details}>
                    <Typography variant="body2" color="textSecondary" component="h2">
                        {(new Date(props.article.publishedAt)).toDateString()}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">
                        {props.article.source.name}
                    </Typography>
                </div>
                <Typography className={classes.title} gutterBottom variant="h5">
                    {props.article.title}
                </Typography>

                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {props.article.description}
                    </Typography>
                </CardContent>

            </CardActionArea>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary">
                    Learn More
                </Button>

                <Typography variant="h5" color="textSecondary">
                        {props.index + 1}
                </Typography>
                
            </CardActions>
        </Card>
    )
}

export default NewsCard;


