import React, { Component } from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
} from 'spectacle';
import multiLoop from '../multi-loop.png';

class PresentationSlide extends Component {
    render() {
        return (
            <Slide bgColor='#fff'>
                <Text>Multiple Event Loop Threads</Text>
                <div>&nbsp;</div>
                <img src={multiLoop} width='100%' />
            </Slide>
        );
    }
}

export default PresentationSlide;