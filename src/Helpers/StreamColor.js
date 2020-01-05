import { colors } from '../Utilities/index'
import { themes } from '../Components/index'


export const StreamColor = ({ streamData }) => {
  const getStreamColor = themes
    .filter(theme => theme.streamCategory === streamData.streamCategory)
    .map(theme => theme.color)

  if (getStreamColor[0] === 'lightBlue') { return colors.lightBlue }
  else if (getStreamColor[0] === 'aqua') { return colors.aqua }
  else if (getStreamColor[0] === 'teal') { return colors.teal }
  else if (getStreamColor[0] === 'burgundy') { return colors.burgundy }
  else if (getStreamColor[0] === 'darkBlue') { return colors.darkBlue }
  else if (getStreamColor[0] === 'cyan') { return colors.cyan }
  else { return }

}
