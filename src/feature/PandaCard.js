import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { Card, Fab } from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AddIcon from '@material-ui/icons/Add';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const styles = theme => ({
    card: {
        maxWidth: 600,
        cursor: "pointer"
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    cta: {
        textAlign: "center",
        paddingTop: "10%",
        flexGrow: 1
    },
    fab: {
        margin: theme.spacing.unit,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    }
});

class PandaCard extends React.Component {
    state = { expanded: false };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    render() {
        const { classes, title, imageUrl, uuid, cta } = this.props;
        return (
            <Card className={classes.card} onClick={() =>
                window.open(`https://app.mappandas.com/p/${uuid}`, "_blank")
            }>
                {cta ? (this.CTA(classes)) : (<div><CardMedia
                    className={classes.media}
                    image={imageUrl}
                    title={title}
                />
                    <CardContent>
                        <Typography noWrap component="p">
                            {title}
                        </Typography>
                    </CardContent></div>)}
            </Card>
        );
    }

    CTA = (classes) => {
        return (<div className={classes.cta}>
            <Fab color="secondary" aria-label="Add" className={classes.fab}>
                <AddIcon fontSize="large" />
            </Fab>
            <CardContent>
                <Typography noWrap component="p">
                  Write your own
                </Typography>
            </CardContent></div>
        )
    }


}

const randomLetter = () => {
    const random_ascii = Math.floor((Math.random() * (90 - 65)) + 65);
    return String.fromCharCode(random_ascii);
}


export default withStyles(styles)(PandaCard);