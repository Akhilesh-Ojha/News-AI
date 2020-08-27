import React from 'react';
import NewsCard from '../../components/NewsCard/NewsCard';
import { Grid , Grow, Typography } from '@material-ui/core';

import useStyles from './styles';

const infoCards = [
    { color: '#00838f', title: 'Latest News', text: 'Give me the latest news' },
    { color: '#1565c0', title: 'News by Categories', info: 'Business, Entertainment, General, Health, Science, Sports', text: 'Give me the latest Technology news' },
    { color: '#4527a0', title: 'News by Terms', info: 'Bitcoin, PlayStation 5, Smartphones, Donald Trump...', text: 'What\'s up with Corona Virus' },
    { color: '#283593', title: 'News by Sources', info: 'CNN, Wired, BBC News, Time, IGN, Buzzfeed, ABC News...', text: 'Give me the news from CNN' },
];

const NewsCards = ({articles , activeArticle}) => {

    console.log('active', activeArticle);

    const classes = useStyles();

        if(!articles.length) {
            return( <Grow in>
                <Grid className={classes.container} container alignItems="stretch" spacing={2}>
                    {infoCards.map((infoCard) => (
                        <Grid className={classes.infoCard} item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}} >
                            <div className={classes.card} style={{backgroundColor: infoCard.color}}>
                                <Typography className={classes.cardText} variant="h5">{infoCard.title}</Typography>
                                {infoCard.info ? <Typography className={classes.cardText} variant="h6"><strong>{infoCard.info}</strong></Typography> : null}
                                <Typography className={classes.cardText} variant="h6">Try Saying: {infoCard.text}</Typography>
                            </div>
                        </Grid> 
                    ))}
                </Grid>
            </Grow>
           )
        } else {
            return (
                <Grow in>
                    <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                        {articles.map((article , i) => (
                            <Grid key={i} item xs={12} sm={6} md={4} lg={3} style={{display: 'flex'}}>
                                <NewsCard article={article} activeArticle={activeArticle} index={i} />
                            </Grid>
                        ))}
                    </Grid>
                </Grow>
            )
        }
    
}

export default NewsCards;
