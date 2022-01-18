import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import PagerView from 'react-native-pager-view';
import Introduce1 from "./Introduce1";
import Introduce2 from "./Introduce2";
import Introduce3 from "./Introduce3";

const Introduce = () => {


    const styles = StyleSheet.create({
        pagerView: {
            flex: 1,
        }
    }
    )

    return (
        <PagerView style={styles.pagerView} initialPage={0}>
            <View key="1">
                <Introduce1 />
            </View>
            <View key="2">
                <Introduce2 />
            </View>
            <View key="3">
                <Introduce3 />
            </View>
        </PagerView>
    )
}

export default Introduce
