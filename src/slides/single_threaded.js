import React, { Component } from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
} from 'spectacle';
import singleThreadDiagram from '../single_thread_event.png';

class PresentationSlide extends Component {
    render() {
        return (
            <Slide bgColor='#fff'>
                <Text>Event Loop is single threaded!</Text>
                <p>&nbsp;</p>
                <img src={singleThreadDiagram} width='100%' />
            </Slide>
        );
    }
}

export default PresentationSlide;