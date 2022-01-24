import React, {useRef} from "react"
import { View, Text, StyleSheet } from 'react-native'
import PagerView from 'react-native-pager-view';
import Introduce1 from "./Introduce1";
import Introduce2 from "./Introduce2";
import Introduce3 from "./Introduce3";


const styles = StyleSheet.create({
    pagerView: {
        flex: 1,
    }
}
)

const Introduce = ({navigation}) => {

    const ref = useRef(null)
    const onPressIntroduce1 = () => {
        console.log('aaaa')
        ref.current ?.setPage(1);
    }
    const onPressIntroduce2 = () => {
        ref.current ?.setPage(2);
    }
    const onPressIntroduce3 = () => {
        navigation.navigate('Login');
    }


    return (
        <PagerView style={styles.pagerView} ref={ref} initialPage={0}>
            <View key="22">
                <Introduce1 onPress1={onPressIntroduce1} />
            </View>
            <View key="2">
                <Introduce2 onPress2={onPressIntroduce2} />
            </View>
            <View key="3">
                <Introduce3 onPress3={onPressIntroduce3} />
            </View>
        </PagerView>
    )


}

export default Introduce
