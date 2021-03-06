import React, { useState } from 'react'
import { FAB, Portal, FABGroupAction } from 'react-native-paper'
import { StyleSheet } from 'react-native'

// type buildAction = (
//   icon: string,
//   onPress: () => void,
//   label?: string | null,
//   accessibilityLabel?: string | null,
//   style?: any | null,
//   color?: string
// ) => FABGroupAction

const buildAction = (icon, onPress, label, accessibilityLabel, style, color = 'white') => {
  return {
    icon,
    onPress,
    style: styles.main,
    color,
    ...(label && { label }),
    ...(style && { style: [styles.main, style] }),
    ...(accessibilityLabel && { accessibilityLabel })
  }
}

// type Props = {
//   filterText: string
//   sortText: string
//   handlePressFilter: () => void
//   handlePressSort: () => void
// }

const DirectoryFloatActionButton = ({
  filterText,
  sortText,
  handlePressFilter,
  handlePressSort,
}) => {
  const [open, setOpen] = useState(false)
  return (
    <Portal>
      <FAB.Group
        open={open}
        accessibilityLabel='Filtros'
        fabStyle={{ backgroundColor: 'green' }}
        icon={open ? 'close' : 'plus'} //minus plus
        actions={[
          buildAction('filter-variant', handlePressFilter, `Tipo: ${filterText}`),
          buildAction('sort', handlePressSort, `Ordenado: ${sortText}`)
        ]}
        onStateChange={({ open }) => setOpen(open)}
      />
    </Portal>
  )
}

export default DirectoryFloatActionButton

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#62727b',
    height: 45,
    width: 45,
    justifyContent: 'center',
    alignItems: 'center'
  }
})