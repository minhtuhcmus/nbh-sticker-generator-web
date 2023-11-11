import { useState } from "react";
import {Page, StyleSheet, Font, View, Text } from "@react-pdf/renderer";

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
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    fontFamily: 'Roboto',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  label: {
    width: '55mm',
    height: '33mm',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: "wrap",
    border: '1px solid black'
  },
  name_text: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'black',
    fontSize: '23px',
    letterSpacing: '-1px',
    flexWrap: "wrap"
  },
  name_text_small: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: 'black',
    fontSize: '16px',
    letterSpacing: '-1px',
    flexWrap: "wrap"
  }
})

// function findWordIndex(str : string) : number {
//   let words = str.split(" ")
//   console.log('words', words)
//   let sum = str.length
//   for (let i = words.length-1; i > 0; i--) {
//     console.log('sum', sum)
//     console.log('i', i)
//     console.log('word.length', words[i].length)
//     sum = sum - words[i].length - 1
//     if (sum <= 21) {
//       return i
//     }
//   }
//   return words.length-1
// }

function NamePageCustom({name, quantity}:{name:string, quantity: number}){
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

  // function toString(str : string) : string {
  //   if (str !== undefined && str !== '') {
  //     return str.toLocaleUpperCase()
  //   }
  //   return " "
  // }

  function genPageContent() {
    let pageContent : Array<any> = []
    for (let i = 0; i < quantity; i++) {
      pageContent.push(<View style={styles.label}>
        {
          isBreak 
          ? <Text 
            style={styles.name_text_small} 
            // debug={true}
          >{getName(name)}</Text>
          : <Text 
            style={styles.name_text} 
            // debug={true}
          >{getName(name)}</Text>
        }
      </View>)
    }
    return pageContent
  }

  return (
    <Page 
      size="A6" 
      orientation="portrait"
      style={styles.page}
      // debug={true}
    >
      {
        genPageContent()
      }
    </Page>
  )
}

export default NamePageCustom;