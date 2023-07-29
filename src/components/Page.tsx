import React, { useState } from "react";
import {Page, StyleSheet, Font, View, Text } from "@react-pdf/renderer";
import { IItemDetail } from "../interfaces/ItemRecord";

Font.register({
  family: "Roboto",
  fonts: [
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf",
      fontWeight: "bold"
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
      fontWeight: "light"
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-black-webfont.ttf",
      fontStyle: "black"
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-medium-webfont.woff",
      fontWeight: "medium"
    },
    {
      src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf",
      fontWeight: "normal"
    }
  ]
});

const styles = StyleSheet.create({
  page: {
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Roboto',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '100%'
  },
  name: {
    width: '100%',
    height: '30%',
    borderBottom: '1px black solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  },
  name_text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'black',
    fontSize: '46px',
    letterSpacing: '-1px'
  },
  name_text_small: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'black',
    fontSize: '32px',
    letterSpacing: '-1px'
  },
  info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '70%'
  },
  info_title: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '50%',
    height: '100%',
    textAlign: 'right',
  },
  info_detail: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    width: '50%',
    height: '100%',
    textAlign: 'left',
    paddingLeft: '10px'
  },
  text: {
    width: '100%',
    fontSize: '28px'
  }
})

function findWordIndex(str : string) : number {
  let words = str.split(" ")
  console.log('words', words)
  let sum = str.length
  for (let i = words.length-1; i > 0; i--) {
    console.log('sum', sum)
    console.log('i', i)
    console.log('word.length', words[i].length)
    sum = sum - words[i].length - 1
    if (sum <= 21) {
      return i
    }
  }
  return words.length-1
}

function PageCustom({itemDetail, date}:{itemDetail: IItemDetail, date: string}){
  const [isBreak, setIsBreak] = useState(false)
  
  function getName(name : string) : string {
    if (name.includes("_")) {
      name = name.replaceAll("_", "\n")
    }
    if (name.includes("\n") && !isBreak){
      setIsBreak(true)
    }
    console.log("name", name)
    return name.toLocaleUpperCase()
  }

  function toString(str : string) : string {
    if (str !== undefined && str !== '') {
      return str.toLocaleUpperCase()
    }
    return " "
  }

  return (
    <Page 
      size="A6" 
      orientation="landscape"
      style={styles.page}
      // debug={true}
    >
      <View style={styles.content}>
        <View style={styles.name}>
          {
            isBreak 
            ? <Text 
              style={styles.name_text_small} 
              // debug={true}
            >{getName(itemDetail.name)}</Text>
            : <Text 
              style={styles.name_text} 
              // debug={true}
            >{getName(itemDetail.name)}</Text>
          }
          
        </View>
        <View style={styles.info}>
          <View style={styles.info_title}>
            <Text style={styles.text}>Ngày về kho :</Text>
            <Text style={styles.text}>Xuất xứ :</Text>
            <Text style={styles.text}>Nhà cung cấp :</Text>
            <Text style={styles.text}>Quy cách : </Text>
            <Text style={styles.text}>Ngày thay nước : </Text>
          </View>
          <View style={styles.info_detail}>
            <Text style={styles.text}>{date !== '' ? date : " "}</Text>
            <Text style={styles.text}>{toString(itemDetail.origin)}</Text>
            <Text style={styles.text}>{toString(itemDetail.provider)}</Text>
            <Text style={styles.text}>{toString(itemDetail.packaging)}</Text>
            <Text style={styles.text}>{" "}</Text>
          </View>
        </View>
      </View>
    </Page>
  )
}

export default PageCustom;