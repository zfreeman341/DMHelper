import { Text, View, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import NewCampaign from '../components/NewCampaign';

export default function Launch({ navigation }) {
  const campaigns = useSelector(state => state.campaigns)

  const handleCampaign = () => {
    navigation.navigate('Home')
  }
  const handleNew = () => {
    alert("TODO")
  }


  return (
    <View>
      <TouchableOpacity onPress={handleCampaign} className="m-auto mt-5 w-11/12 bg-blue-900 rounded-lg">
        <Text className="p-2 m-auto text-white">{JSON.stringify(campaigns)}</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleNew} className="m-auto mt-5 w-11/12 bg-blue-500 rounded-lg">
        <Text className="p-2 m-auto text-white">New Campaign +</Text>
      </TouchableOpacity>
    </View>
  )
}

//TODO: Render a list of campaigns from props