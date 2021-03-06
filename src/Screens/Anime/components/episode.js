import React from 'react'
import {
  View,
  Image,
  Text,
  StyleSheet
} from 'react-native'

import Icon from '../../../Utils/components/icon'
import { API_HOST } from '../../../Config'
// import { EpisodeModel } from '../../../'
// import { HOST } from '../../../api/constants'

// type Props = {
//   episode: EpisodeModel
//   handlePlay: () => void
// }

const Episode = ({ episode, handlePlay }) => (
  <View style={styles.container}>
    <Image
      source={{ uri: API_HOST + episode.cover }}
      style={styles.image}
      resizeMode='contain'
    />
    <View style={styles.episodeCard} >
      <Text style={styles.episodeText}>{`Episodio ${episode.number}`}</Text>
      <View style={styles.icon}>
        <Icon
          onPress={handlePlay}
          set='Entypo'
          name='controller-play'
          size={40}
          color='black'
        />
      </View>
    </View>
  </View>
)

const styles = StyleSheet.create({
  container: { flexDirection: 'row' },
  image: {
    width: '25%',
    height: 60
    // height: (Dimensions.get('window').width * 0.25) * p
  },
  episodeCard: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1,
  },
  episodeText: { fontSize: 20 },
  icon: {
    paddingHorizontal: 20,
    alignItems: 'flex-end',
    flex: 1
  }
})

export default Episode