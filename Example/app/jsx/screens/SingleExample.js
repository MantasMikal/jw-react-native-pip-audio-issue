import React, {useRef} from 'react';
import {StatusBar, View} from 'react-native';
import Player from '../components/Player';

export default () => {
  const playerRef = useRef([]);

  const onFullScreen = () => {
    StatusBar.setHidden(true);
  };

  const onFullScreenExit = () => {
    StatusBar.setHidden(false);
  };

  let jwConfig = {
    title: 'Single Audio',
    playlist: [
      {
        title: 'Single Audio',
        file: 'https://download.samplelib.com/mp3/sample-15s.mp3',
        // file: "https://content.bitsontherun.com/videos/q1fx20VZ-52qL9xLP.mp4",
      },
    ],
  };

  return (
    <View style={{ height: 150 }}>
      <Player
        ref={playerRef}
        style={{flex: 1}}
        config={{
          autostart: true,
          pipEnabled: true,
          styling: {
            colors: {},
          },
          ...jwConfig,
        }}
        onFullScreen={onFullScreen}
        onFullScreenExit={onFullScreenExit}
      />
    </View>
  );
};
