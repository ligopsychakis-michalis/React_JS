import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';


export default class QuoteMachine extends React.Component{
    render(){
        const {selectedQuote, nextQuoteClickHandler} = this.props;

        return (
            <Card>
                <CardContent>
                    {selectedQuote ?
                        <Typography>
                            {selectedQuote.quote} - {selectedQuote.author}
                        </Typography>
                    : "" }
                </CardContent>
                <CardActions>
                    <Button size="small" onClick = {nextQuoteClickHandler}>Next Quote</Button>
                    <IconButton href="#" target="_blank">
                        <i className="fab fa-twitter"></i>
                    </IconButton>
                </CardActions>    
            </Card>    
        );
    }
}