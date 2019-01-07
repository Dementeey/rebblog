export default theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    width: 500,
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

  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});
