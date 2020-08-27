import { makeStyles } from '@material-ui/core';

const styles = makeStyles({
    container: {
        padding: '0 5%',
        width: '100%',
        margin: 0,
    },

    card: {
        height: '60vh',
        padding: '10%',
        width: '100%',
        borderRadius: 10,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: 'white'
    },

    infoCard: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center'
    }

    

});

export default styles;