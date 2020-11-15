import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  stat: {
    // paddingHorizontal: 20,
    // paddingBottom: 10,
    // paddingTop: 30,
    flexBasis: '40%',
    flex: 1,
    maxWidth: '40%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  parent: {
    flex: 1,
  },
  statText: {
    width: '100%',
    textAlign: 'left',
    fontSize: 15,
  },
  store: {
    color: "rgb(164,164,164)",
    width: "100%",
    textAlign: "left",
    fontSize: 15
  },
  statPrice: {
    color: "rgb(219,48,34)",
    width: '100%',
    textAlign: "left",
    fontSize: 15
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
    width: "70%",
    height: 184,
    resizeMode: "cover",
  },
  imgNew: {
    marginRight: 60,
    width: "90%",
    height: 184,
    resizeMode: "cover",
    borderRadius: 10,
  },
  rate: {
    flexDirection: "row",
    width: '100%',
    textAlign: 'left',
  },
  rating: {
    color: "rgb(164,164,164)",
  },
  textRate: {
    color: "rgb(164,164,164)",
  },
});

export default styles;