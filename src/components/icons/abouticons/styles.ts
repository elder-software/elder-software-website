export interface AboutIconProps {
  size?: number;
  onMouseEnter: () => void;
}

type AboutIconStyles = {
  iconContainerStyle: React.CSSProperties;
  iconStyle: React.CSSProperties;
};

export const iconStyles: AboutIconStyles = {
  iconContainerStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    opacity: '70%'
  },
  iconStyle: {
    width: 80,
    height: 80,
    padding: 20,
    border: '1px solid #DFDFDF',
    backgroundColor: 'white',
    borderRadius: 15
  }
};
