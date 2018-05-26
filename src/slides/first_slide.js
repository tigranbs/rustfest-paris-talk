import React, { Component } from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text
} from 'spectacle';

class PresentationSlide extends Component {
    render() {
        return (
            <Slide bgColor='#fff'>
                <Text>Event driven networking with Rust 💥</Text>
                <Code>By @tigranbs</Code>
            </Slide>
        );
    }
}

export default PresentationSlide;