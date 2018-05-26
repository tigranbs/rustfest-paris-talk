import React, { Component } from 'react';
import {
    Appear, BlockQuote, Cite, CodePane, Code, Deck, Fill, Fit,
    Heading, Image, Layout, ListItem, List, Quote, Slide, Text,
    Link,
} from 'spectacle';
import treescaleAnimation from '../treescale_animation.gif';

class PresentationSlide extends Component {
    render() {
        return (
            <Slide bgColor='#fff'>
                <Text>TreeScale: by default scalable networking</Text>
                <Link href="https://github.com/treescale/treescale">github.com/treescale/treescale</Link>
                <p>&nbsp;</p>
                <img width="100%" src={treescaleAnimation} />
            </Slide>
        );
    }
}

export default PresentationSlide;