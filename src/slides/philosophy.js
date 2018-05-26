import React, { Component } from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

class PresentationSlide extends Component {
    render() {
        return (
            <Slide bgColor='#fff'>
                <Text>Philosophy behind</Text>
                <List>
                    <ListItem></ListItem>
                    <ListItem>Optimizing cloud environments with TreeScale</ListItem>
                    <ListItem>Built multiple IT companies</ListItem>
                    <ListItem>Motorcycling, skiing a lot!</ListItem>
                </List>
            </Slide>
        );
    }
}

export default PresentationSlide;