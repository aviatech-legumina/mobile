import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons';
// import other icon families here

export const TabBarIcon = ({ name, color, iconFamily }: {
  name: any;
  color: string;
  iconFamily: 'Ionicons' | 'FontAwesome' | 'FontAwesome5'; // add other icon families here

}) => {
  let IconComponent;
  switch (iconFamily) {
    case 'FontAwesome':
      IconComponent = FontAwesome;
      break;
    case 'FontAwesome5':
      IconComponent = FontAwesome5;
      break;
    default:
      IconComponent = Ionicons;
      break;
  }

  return <IconComponent name={name} size={32} color={color} style={[{ marginBottom: -20 }]} />;
};
