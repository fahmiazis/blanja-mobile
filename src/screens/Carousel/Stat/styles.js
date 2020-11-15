import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  stat: {
    // paddingHorizontal: 20,
    // paddingBottom: 10,
    // paddingTop: 30,
    flexBasis: '90%',
    flex: 1,
    maxWidth: '90%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  statText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 20,
  },
  statHold: {
    width: '100%',
    marginBottom: 2,
  },
  statLabel: {
    width: '100%',
    textAlign: 'left',
    fontSize: 11,
    fontWeight: '600',
    paddingTop: 5,
  },
  img: {
    marginRight: 50,
    height: 413,
    width: "100%",
    resizeMode: "cover",
  },
});

export default styles;