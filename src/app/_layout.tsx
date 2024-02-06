import { Slot } from "expo-router"
import { SafeAreaView } from "react-native"
import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts
} from '@expo-google-fonts/inter'
import { Loading } from "@/components/loading"

export default function Layout() {
  const [fontsLoad] = useFonts({
    Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  })

  if (!fontsLoad) {
    return <Loading />
  }
  return (
    <SafeAreaView className="flex-1 bg-gray-900 ">
      <Slot />
    </SafeAreaView>
  )

}