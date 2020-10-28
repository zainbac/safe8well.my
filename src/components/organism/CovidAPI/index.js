 
import React,{useState,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import axios from 'axios'
function Item({ item }) {
  const handlePress = () => {
    Linking.openURL('tel:' + item.nophone);
  };

   
  const handlePresss = () => {
    Linking.openURL(
      'whatsapp://send?text=hi ,I would like repair my hospital equipment &phone=06' +
        item.nophone
    );
  };
  return (
    <View>
      <ImageBackground
        source={require('./../../../../assets/login1.png')}
        style={{
          position: 'absolute',
          width: 20000,
          height: 1000,

          top: 0,

          left: 0,
        }}
      ></ImageBackground>

      <ScrollView style={styles.listItem}>
        <Image
          source={{ uri: item.photo }}
          style={{
            width: 90,
            height: 90,
            borderRadius: 40,
            alignItems: 'center',
            alignSelf: 'center',
            alignContent: 'center',
          }}
        />
        <View style={{}}>
          <View style={{ top: 22 }}>
            <AirbnbRating
              style={{ bottom: 40 }}
              count={item.rating}
              defaultRating={11}
              size={20}
            />
          </View>
          <View>
            <Text
              style={{
                fontWeight: 'bold',
              }}
            >
              Rating :
            </Text>
            <Text style={{ fontWeight: 'bold' }}>{item.name}</Text>
            <Text style={{}}>{item.position}</Text>

            <TouchableOpacity
              style={{
                height: 50,
                width: 200,
                marginTop: 10,
                marginBottom: 20,
                alignContent: 'center',
                alignSelf: 'center',
                flexWrap: 'wrap',
                alignItems: 'center',
              }}
              onPress={handlePress}
            >
              <View
                style={{
                  backgroundColor: 'green',
                  paddingVertical: 10,
                  paddingHorizontal: 0,
                  borderBottomLeftRadius: 10,
                  borderBottomRightRadius: 10,
                  borderTopLeftRadius: 10,
                  borderTopRightRadius: 10,
                  width: 150,
                  alignItems: 'center',

                  justifyContent: 'center',
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontWeight: 'bold',
                    justifyContent: 'center',
                    textAlign: 'center',
                    alignContent: 'center',
                    alignSelf: 'center',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                  }}
                >
                  Call
                </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                width: 150,
                fontWeight: 'bold',
                alignSelf: 'center',
                bottom: 20,
              }}
              onPress={handlePresss}
            >
              <View>
                <View
                  style={{
                    backgroundColor: '#4e70f6',
                    paddingVertical: 14,
                    fontWeight: 'bold',
                    paddingHorizontal: 0,
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                    borderTopLeftRadius: 10,
                    borderTopRightRadius: 10,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text style={styles.buttonText}>Send him text message</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
export default function App() {
  let [responseData, setResponseData] = React.useState('')
  const [Totaldata,setTotalData]=useState([])
  const [Notaldata,setNotalData]=useState([])
  const [Rotaldata,setRotalData]=useState([])
  const [Dotaldata,setDotalData]=useState([])
  const [currentDate, setCurrentDate] = useState('');
  const fetchApiCall = () => {
    
    const x=[]
    fetch("https://covid-193.p.rapidapi.com/statistics?country=Malaysia", {
      "method": "GET",
      "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"covid-193.p.rapidapi.com",
        "x-rapidapi-key":"deeb9c7843msh4b2a715828f6626p1e7183jsn6928765be199",
        "useQueryString":true
        },
        "params":{
        "country":"Malaysia",
         
        }
    })
    .then(res=>res.json())
    .then(response => {
        setTotalData(response.response[0].deaths)
        setNotalData(response.response[0].new)
        setTotalData(response.response[0].cases )
         
        console.log(Object.assign({},response.response[0],response.response[0].deaths,response.response[0].new,response.response[0].cases.recovered,response.response.time))
       
    }) 
      
      .catch(err => {
        console.log(err);
      });
  }
  useEffect(()=>{
    fetchApiCall()
    var date = new Date().getDate();
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    setCurrentDate(
      date + '/' + month + '/' + year 
      
    );
},[])

  // const axiosApiCall = () => {
  //   axios({
  //     "method":"GET",
  //       "url":"https://covid-193.p.rapidapi.com/statistics",
  //       "headers":{
  //       "content-type":"application/octet-stream",
  //       "x-rapidapi-host":"covid-193.p.rapidapi.com",
  //       "x-rapidapi-key":"deeb9c7843msh4b2a715828f6626p1e7183jsn6928765be199",
  //       "useQueryString":true
  //       },"params":{
  //       "country":"Malaysia",
         
  //       }
  //   })
  //     .then((response) => {
  //     console.log(response.data.response)
  //     })
      
  //     .catch((error) => {
  //       console.log(error)
  //     })
      
 
  // }

  return (
    <View   style={styles.container}>
      
      
      {/* <TouchableHighlight onPress={fetchApiCall}>
        <View style={styles.button}>
         
        </View>
      </TouchableHighlight> */}
      {/* <TouchableHighlight onPress={axiosApiCall}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Use Axios</Text>
        </View>
      </TouchableHighlight> */}
      <View elevation={5} style={styles.quoteContainer}>
      <Text style={styles.title}>Status Covid Terkini Di Malaysia</Text>
      <Text style={styles.textStyle}>
            {currentDate}
          </Text>
        {/* <Text style={styles.quote}>{quote}</Text>
        <Text style={styles.source}>{source}</Text> */}
         <Text style={styles.title1}>Confirmed Cases</Text>
         <Text style={styles.textcount}>{Totaldata.total}</Text>
         <Text style={styles.title2}>New Cases</Text>
         <Text style={styles.textcount}>{Totaldata.new}</Text>
         <Text style={styles.title3}>Recovered Cases</Text>
         <Text style={styles.textcount}>{Totaldata.recovered}</Text>
      </View>
   
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    alignItems: 'center',
    justifyContent: 'center',
    color: '#fff'
  },
  title: {
    fontSize: 16,
    color: 'black',
    textAlign:'center'
  },
  title1: {
    fontSize: 16,
    color: 'red',
    textAlign:'center',
    fontWeight:'bold'
  },
  textStyle: {
    fontSize: 16,
    color: 'black',
    textAlign:'center',
    fontWeight:'bold'
  },
  title2: {
    fontSize: 16,
    color: 'blue',
    textAlign:'center',
    fontWeight:'bold'
  },
  title3: {
    fontSize: 16,
    color: 'green',
    textAlign:'center',
    fontWeight:'bold'

  },
  button: {
    padding: 10,
    marginVertical: 15,
    backgroundColor: '#0645AD'
  },
  textcount: {
    padding: 10,
    textAlign:'center'
    
  },
  buttonText: {
    color: '#fff'
  },
  quote: {
    fontSize: 17,
    textAlign: 'center',
    fontStyle: 'italic'
  },
  source: {
    textAlign: 'right',
    marginTop: 15
  },
  quoteContainer: {
    marginHorizontal: 20,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5
  }
});