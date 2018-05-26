import React, { Component } from 'react';
import {
    Deck
} from 'spectacle';

// Slides
import FirstSlide from './slides/first_slide';
import AboutMe from './slides/about_me';
import TreeScaleStory from './slides/treescale_story';
import RustMIO from './slides/rust_mio';
import SingleThreaded from './slides/single_threaded';
import MultipleLoops from './slides/multiple_loops';
import TcpSocketClone from './slides/tcp_socket_clone';
import PerformanceGains from './slides/performance_gains';
import AwesomeHack from './slides/awesome_hack';
import IOThreadLoop from './slides/io_thread_loop';

class App extends Component {
  render() {
    return (
        <Deck bgColor='#fff'>
            <FirstSlide />
            <AboutMe />
            <TreeScaleStory />
            <RustMIO />
            <SingleThreaded />
            <MultipleLoops />
            <TcpSocketClone />
            <IOThreadLoop />
            <PerformanceGains />
            <AwesomeHack />
        </Deck>
    );
  }
}

export default App;
