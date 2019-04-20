const fixedCenter = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
};
const width = 500;
const minHeight = 150;

export default theme => ({
  root: {
    ...fixedCenter,
    zIndex: 100,
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignContent: 'center',
    overflow: 'hidden',
    width,
    minHeight,
    backgroundColor: theme.palette.background.paper,
    boxShadow: '0 3px 10px 3px rgba(208, 208, 208, 0.6)',
    borderRadius: '5px',
  },
  gridList: {
    position: 'relative',
    width: 500,
    height: 450,
  },
  loader: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    zIndex: 15,
    marginLeft: '-20px',
    transform: 'scale(0.7)',
  },
  link: {
    color: '#fff',
  },
  paginationWrap: {
    fontSize: '18px',
    display: 'flex',
    justifyContent: 'space-between',
  },
  pagination: {
    display: 'flex',
    width: 130,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  noData: {
    postiton: 'absolute',
    textAlign: 'center',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  textField: {
    margin: '10px auto 25px',
    width: '80%',
  },
  close: {
    width: 40,
    height: 40,
    marginTop: 4,
    marginRight: 7,
  },
  headerRow: {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'center',
  },
});
