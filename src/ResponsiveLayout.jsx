import * as React from "react";
import { Grid } from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';



const styles = theme => ({
    root: {
        flexGrow: 1,
        flexBasis: "100%",
        width: "100%",
        overflow: 'hidden',
        [theme.breakpoints.up("md")]: {
            padding: `0 ${theme.spacing.unit * 40}px `,
        },
        [theme.breakpoints.between("sm", "md")]: {
            padding: `0 ${theme.spacing.unit * 12 + 10}px`,
        }
    },
    children: {
        flex: "1 0 100%",
        minWidth: "100%",
    },
    paper: {
        maxWidth: 400,
        margin: `${theme.spacing.unit}px auto`,
        padding: theme.spacing.unit * 2,
    },
});


class ResponsiveLayout extends React.Component {

    render() {
        const { classes, children } = this.props;
        return (
            <Grid className={classes.root}
                container
                direction="column"
                justify="space-between"
                // alignItems="stretch"
                // alignContent="stretch"
                wrap="wrap"
            >
                <Grid item={true} wrap="wrap" xs={12} sm={8} lg={4} className={classes.children}>
                        {children}
                </Grid>
            </Grid>
        );
    }

}

export default withStyles(styles)(ResponsiveLayout);