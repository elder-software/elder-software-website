export interface HeaderIconProps {
  size?: number;
  textSize?: number;
}

export const headerIconStyles = {
  iconStyle: {
    backgroundColor: 'black',
    color: 'white',
    margin: 0,
    padding: 0
  } as React.CSSProperties,
  iconContainerStyle: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center'
  } as React.CSSProperties
};
