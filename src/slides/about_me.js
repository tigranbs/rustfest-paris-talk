import React, { Component } from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

class PresentationSlide extends Component {
    render() {
        return (
            <Slide bgColor='#fff'>
                <Text>About me</Text>
                <List>
                    <ListItem>Systems engineer more than 8 years</ListItem>
                    <ListItem>Optimizing cloud environments with TreeScale</ListItem>
                    <ListItem>Programming languages polyglot</ListItem>
                    <ListItem>Motorcycling, skiing a lot!</ListItem>
                </List>
                <Text>@tigranbs 💖 Rust</Text>
            </Slide>
        );
    }
}

export default PresentationSlide;