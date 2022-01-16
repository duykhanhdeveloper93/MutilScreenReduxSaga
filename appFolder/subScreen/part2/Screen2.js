import React from "react"
import { View, Text, StyleSheet } from 'react-native'
import PagerView from 'react-native-pager-view';
import Screen21 from "./Screen21";
import Screen22 from "./Screen22";
import Screen23 from "./Screen23";

const Screen2 = () => {


    const styles = StyleSheet.create({
        pagerView: {
            flex: 1,
        }
    }
    )
    return (
        <PagerView style={styles.pagerView} initialPage={0}>
            <View key="1">
                <Screen21 />
            </View>
            <View key="2">
                <Screen22 />
            </View>
            <View key="3">
                <Screen23 />
            </View>
        </PagerView>
    )
}

export default Screen2