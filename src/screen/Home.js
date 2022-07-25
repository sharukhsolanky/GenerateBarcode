import React, { useState } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, Modal, TextInput } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
// import Storage from '../uti/Storage';


const Home = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState('');
  const [qrvalue, setQrvalue] = useState('');

  const setValueQR = () => {
      setQrvalue(inputText)
      setModalVisible(!modalVisible)
      console.log('------------res: ', inputText);
      // storage.set('generateQRCode', qrvalue)
      // Storage.set('generateQRCode', qrvalue)
      setTimeout(() => {
        setInputText('')
      }, 1000);
    
  }

  // const dataGet = () => {
  //   Storage.get('generateQRCode').then(generateQRCode => {
  //     console.log('------------qrvalue: ', generateQRCode);
  //   })
  //   // Storage.get('generateQRCode')
  // }

  const modalFunction = () => {
    return (
      // <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={{ alignItems: 'center', marginBottom: 30 }}>
              <QRCode
                value={qrvalue ? qrvalue : 'NA'}
                color={'#2C8DDB'}
                backgroundColor={'white'}
                size={80}
                logoMargin={2}
                logoSize={20}
                logoBorderRadius={10}
                logoBackgroundColor={'transparent'}
              />
            </View>
            {/* <TextInput
              style={{ borderWidth: 1, marginBottom: 30, borderRadius: 10, paddingHorizontal: 13 }}
              placeholder='Scan QR'
              // textAlign='center'
              keyboardType={'numeric'}
              value={inputText}
              onChangeText={(text) => { setInputText(text) }}
            /> */}
            <TouchableOpacity
              style={styles.submiteButton}
              onPress={() => { setValueQR() }}>
              <Text style={styles.textStyle}>SUBMITE</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      // </View>
    )
  }

  return (
    <View style={{ flex: 1, marginHorizontal: 20, justifyContent: 'center' }}>
      <TouchableOpacity
        onPress={() => setModalVisible(true)}

        activeOpacity={0.7} style={styles.qrButtonViewCss}>
        <Text style={styles.qrTextViewCss}>Generate QR Code</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} onPress={() => { navigation.navigate('Scanner') }} style={styles.qrButtonViewCss}>
        <Text style={styles.qrTextViewCss}>QR Code Scanner</Text>
      </TouchableOpacity>
      <TouchableOpacity activeOpacity={0.7} style={styles.qrButtonViewCss}>
        <Text style={styles.qrTextViewCss}>History</Text>
      </TouchableOpacity>

      {modalFunction()}
    </View>
  )
}

const styles = StyleSheet.create({
  qrButtonViewCss: {
    height: 50, justifyContent: 'center', alignItems: 'center', backgroundColor: '#4768E2',
    borderRadius: 6, marginVertical: 10
  },
  qrTextViewCss: {
    color: '#FFF', fontSize: 16
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: '#00000050',
  },
  modalView: {
    // margin: 20,
    marginHorizontal: 20,
    backgroundColor: "#FFF",
    borderRadius: 20,
    // padding: 35,
    paddingVertical: 30,
    paddingHorizontal: 30,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  submiteButton: {
    borderRadius: 14,
    paddingVertical: 12,
    elevation: 2,
    marginHorizontal: 90,
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontSize: 13,
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Home;