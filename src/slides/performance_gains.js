import React, { Component } from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
} from 'spectacle';


class PresentationSlide extends Component {
    render() {
        return (
            <Slide bgColor='#fff'>
                <Text>Performance differences</Text>
                <List>
                    <ListItem>6-10X memory optimization compared to Go version</ListItem>
                    <ListItem>Fully non-blocking code</ListItem>
                    <ListItem>Rust thread safety with more stability</ListItem>
                    <ListItem>20% More bandwidth because of multi-io loops</ListItem>
                </List>
            </Slide>
        );
    }
}

export default PresentationSlide;