import React, { useState } from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { AntDesign } from '@expo/vector-icons';
import { SimpleLineIcons } from '@expo/vector-icons';
import { openPopupWidget } from 'react-calendly';

import axios from 'axios';
import GLOBALS from '../globals';

export default function Body({route}) {
  const [checker, setChecker] = useState(true);
  const [profile, setProfile] = useState({
    name: "Alyssa Lane",
    occupation: "Product manager at Google",
    bio: "I currently work on the Google Maps team. I studied Computer Science at Carnegie Mellon University and I love hiking and baking in my free time!"
  });
  // useEffect(() => {
  //   axios.get(`${GLOBALS.backend_url}/interactions/${route.params.slug}`,
  //   ).then((res) => {
  //     setProfile({
  //       name: res.data.firstname + " " + res.data.lastname,
  //       bio: res.data.description,
  //       occupation: res.data.organization,
  //       interactions: res.data.interactions
  //     })
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // }, []);

  function Firstbody() {
    return (
      <View style={styles.bigbody}>
        <View style={styles.fundraisebody}>
          <View style={styles.paragraph}>
            <View style={styles.bigspacing}></View>
            <View style={styles.smallspacing}></View>
            <View style={styles.tinyspacing}></View>
            <Text style={styles.mentorfundraiser}>Fundraiser for Girls Who Code</Text>
            <View style={styles.bigspacing}></View>
            <View style={styles.bigspacing}></View>
            <View style={styles.charity}>
              <Image style={styles.charitypic} source={
                {uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSF_uiHfBHiK-ppxvdy7VFWYK-zSUMudGKF7w&usqp=CAU"}
              }></Image>
              <View style={styles.charityinfo}>
                <Text style={styles.charitydate}>Since July 24, 2020</Text>
                <View style={styles.tinyspacing}></View>
                <View style={styles.charitynumbers}>
                  <Text style={styles.charityamount}>$100</Text>
                  <View style={styles.vertspacing}></View>
                  <View style={styles.charityproceed1}>
                    <Text style={styles.charityproceed2}>raised for Girls</Text>
                    <Text style={styles.charityproceed2}>Who Code</Text>
                  </View>
                </View>
                <View style={styles.smallspacing}></View>
                <Text style={styles.charitygoal}>GOAL $100/$1000</Text>
                <View style={styles.tinyspacing}></View>
                <View style={styles.donationbar}>

                </View>
              </View>
            </View>
            <View style={styles.bigspacing}></View>
            <View style={styles.bigspacing}></View>
            <View style={styles.service}>
              <View style={styles.serviceamount}>
                <Text style={styles.servicedollar}>$10</Text>
                <Text style={styles.servicedonation}>DONATION</Text>
              </View>
              <View style={styles.serviceinfo}>
                <Text style={styles.servicetitle}>Industry Chat</Text>
                <View style={styles.tinyspacing}></View>
                <Text style={styles.servicedetail}>Chat with me about what I do as a PM at</Text>
                <Text style={styles.servicedetail}>Google and my past industry experience </Text>
              </View>
              <View style={styles.servicebook}>
                <Text style={styles.servicebooking}>Book</Text>
              </View>
            </View>
            <View style={styles.bigspacing}></View>
            <View style={styles.smallspacing}></View>
            <View style={styles.service}>
              <View style={styles.serviceamount}>
                <Text style={styles.servicedollar}>$15</Text>
                <Text style={styles.servicedonation}>DONATION</Text>
              </View>
              <View style={styles.serviceinfo}>
                <Text style={styles.servicetitle}>Resume Review</Text>
                <View style={styles.tinyspacing}></View>
                <Text style={styles.servicedetail}>Get detailed feedback and suggestions for</Text>
                <Text style={styles.servicedetail}>improvement on your resume</Text>
              </View>
              <View style={styles.servicebook}>
                <Text style={styles.servicebooking} onPress={() => setChecker(false)}>Book</Text>
              </View>
            </View>
            <View style={styles.bigspacing}></View>
            <View style={styles.bigspacing}></View>
            <View style={styles.sharing}>
              <Text style={styles.sharingtext}>Share this fundraiser!</Text>
              <View style={styles.sharingbutton}>
                <Text style={styles.sharingbuttontext}>SHARE</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.smallspacing}></View>
        <View style={styles.tinyspacing}></View>
        <View style={styles.charitybody}>
          <View style={styles.charitymoreinfo}>
            <Text style={styles.charitymoreinfotitle}>Girls Who Code</Text>
            <View style={styles.tinyspacing}></View>
            <Text style={styles.charitymoreinfodetail}>Girls Who Code provide girls with the opportunity to learn</Text>
            <Text style={styles.charitymoreinfodetail}>computer science skills through after-school clubs and immersion programs.</Text>
          </View>
          <View style={styles.charitybutton1}>
            <View style={styles.bigspacing}></View>
            <View style={styles.charitybutton2}>
              <Text style={styles.charitybuttontext}>LEARN MORE</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  function Secondbody() {
    const url = 'https://calendly.com/alyssa_lane/resume'

    return (
      <View style={altstyles.altbody}>
        <View style={altstyles.enclosure}>
          <AntDesign name="arrowleft" size={16} color="black" />
          <View style={styles.vertspacing}></View>
          <Text style={altstyles.back} onPress={() => setChecker(true)}>BACK</Text>
        </View>
        <View style={styles.bigspacing}></View>
        <View style={styles.tinyspacing}></View>
        <Text style={altstyles.title}>Resume Review</Text>
        <View style={styles.tinyspacing}></View>
        <Text style={altstyles.titleamount}>$15 Donation</Text>
        <View style={styles.bigspacing}></View>
        <View style={altstyles.enclosure}>
          <SimpleLineIcons name="clock" size={18} color="grey" />
          <View style={styles.vertspacing}></View>
          <Text style={altstyles.callinfo}>30m</Text>
          <View style={styles.vertspacing}></View>
          <AntDesign name="videocamera" size={18} color="grey" />
          <View style={styles.vertspacing}></View>
          <Text style={altstyles.callinfo}>Video Call</Text>
        </View>
        <View style={styles.tinyspacing}></View>
        <Text style={altstyles.description}>Chat with me about what I do as a PM at Google and my past industry experience</Text>
        <View style={styles.tinyspacing}></View>
        <Text style={altstyles.bookings}>5 people have booked this interaction</Text>
        <View style={styles.bigspacing}></View>
        <View style={altstyles.grayline}></View>
        <View style={styles.bigspacing}></View>
        <Text style={altstyles.paymenttitle}>HOW DOES PAYMENT WORK?</Text>
        <View style={styles.tinyspacing}></View>
        <Text style={altstyles.paymentinfo}>When your booking request is confirmed, you will receive a Google Calendar invite. Before your meeting, make the required donation and save a screenshot to show at the start of your meeting.</Text>
        <View style={styles.bigspacing}></View>
        <View style={altstyles.enclosure}>
          <Text style={altstyles.paymentlink}>DONATE TO GIRLS WHO CODE</Text>
          <View style={styles.vertspacing}></View>
          <AntDesign name="arrowright" size={16} color="#407bff" />
        </View>
        <View style={styles.bigspacing}></View>
        <View style={styles.tinyspacing}></View>
        <View style={altstyles.bookbutton}>
          <Text style={altstyles.bookbuttontext} onPress={() => openPopupWidget({url})}>BOOK</Text>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headercontent}>
          <View style={styles.leftheader}>
            <Text style={styles.name}>raise.social</Text>
            <Text style={styles.nameq}>WHAT IS RAISE.SOCIAL?</Text>
          </View>
          <View style={styles.rightheader}>
            <Text style={styles.login}>LOG IN</Text>
            <Text style={styles.signup}>SIGN UP</Text>
          </View>
        </View>
      </View>
      <View style={styles.body}>
        <View style={styles.profilebody}>
          <View style={styles.about}>
            <View style={styles.bigspacing}></View>
            <View style={styles.imageEnclosure}>
            <Image source={{
              uri: 'https://www.kokuaed.com/wp-content/uploads/2019/07/teacher-3.jpg',
            }}
            style={styles.image}></Image>
            </View>
            <View style={styles.bigspacing}></View>
            <Text style={styles.mentorname}>{profile.name}</Text>
            <Text style={styles.mentortitle}>{profile.occupation}</Text>
            <View style={styles.bigspacing}></View>
            <Text style={styles.aboutheading}>ABOUT</Text>
            <View style={styles.smallspacing}></View>
            <Text>{profile.bio}</Text>
            <View style={styles.bigspacing}></View>
            <Text style={styles.aboutheading}>EXPERIENCE</Text>
            <View style={styles.smallspacing}></View>
            <View style={styles.experience}>
              <Text style={styles.experiencetext}>Program Management</Text>
            </View>
            <View style={styles.smallspacing}></View>
            <View style={styles.experience}>
              <Text style={styles.experiencetext}>Software Engineering</Text>
            </View>
          </View>
        </View>
        {checker ? <Firstbody /> : <Secondbody /> }
      </View>
    </View>
  );
}

const altstyles = StyleSheet.create({
  altbody: {
    height: hp('53.56%'),
    width: wp('28.96%'),
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: hp('5.17%'),
    paddingVertical: hp('3.12%'),
    paddingHorizontal: wp('2.22%'),
    flexDirection: 'column'
  },
  enclosure: {
    flexDirection: 'row'
  },
  back: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: '0.05em',
    color: '#000000',
  },
  title: {
    fontWeight: 500,
    fontSize: 33,
    lineHeight: 43,
    color: '#000000',
  },
  titleamount: {
    fontWeight: 500,
    fontSize: 19,
    lineHeight: 25,
    color: '#407bff',
  },
  callinfo: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    color: '#848484',
  },
  description: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#000000',
  },
  bookings: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#848484',
  },
  grayline: {
    height: hp('0.1%'),
    width: wp('24%'),
    backgroundColor: '#DDDDDD',
    borderRadius: 1
  },
  paymenttitle: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: '0.05em',
    color: '#000000',
  },
  paymentinfo: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#000000',
  },
  paymentlink: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    color: '#407bff',
  },
  bookbutton: {
    width: wp('10.07%'),
    height: hp('4.1%'),
    backgroundColor: '#000000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  bookbuttontext: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: '0.05em',
    color: 'white'
  }
})

const styles = StyleSheet.create({
  vertspacing: {
    marginLeft: wp('0.41%')
  },
  bigspacing: {
    marginTop: hp('1.95%')
  },
  smallspacing: {
    marginTop: hp('1.17%')
  },
  tinyspacing: {
    marginTop: hp('0.59%')
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#f5f5f5'
  },
  bigbody: {
    flexDirection: 'column'
  },
  imageEnclosure: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    flex: 1,
    backgroundColor: '#ffffff',
    flexDirection: 'column',
    height: hp('8.09%'),
  },
  headercontent: {
    flex: 1,
    flexDirection: 'row',
    marginVertical: hp('2.93%'),
    marginHorizontal: wp('3.96%'),
  },
  leftheader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  name: {
    color: '#407bff',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 22,
    lineHeight: 25,
  },
  nameq: {
    color: '#407bff',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 25,
    marginHorizontal: wp('3.96%')
  },
  rightheader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  login: {
    color: '#333333',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 25,
    marginHorizontal: wp('3.96%'),
  },
  signup: {
    color: '#407bff',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 16,
    lineHeight: 25,
  },
  body: {
    flex: 11,
    flexDirection: 'row',
  },
  profilebody: {
    height: hp('60.35%'),
    width: wp('18.33%'),
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: hp('5.17%'),
    marginLeft: wp('15.63%'),
    marginRight: wp('1.66%')
  },
  about: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: wp('2.34%')
  },
  image: {
    width: 180, //wp('11.3%'),
    height: 180, //hp('15.9%'),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 3000,
    backgroundColor: 'yellow'
  },
  mentorname: {
    fontWeight: 500,
    fontSize: 19,
    lineHeight: 25,
  },
  mentortitle: {
    fontWeight: 'normal',
    fontSize: 16,
    lineHeight: 21,
  },
  aboutheading: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    letterSpacing: '0.05em',
    color: '#848484'
  },
  experience: {
    width: wp('11.38%'),
    height: hp('3.7%'),
    backgroundColor: '#F0F0F0',
    borderRadius: 300,
    alignItems: 'center',
    justifyContent: 'center'
  },
  experiencetext: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
  },
  fundraisebody: {
    height: hp('68.39%'),
    width: wp('48.68%'),
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: hp('5.17%'),
  },
  paragraph: {
    flex: 1,
    flexDirection: 'column',
    marginHorizontal: wp('2.78%')
  },
  mentorfundraiser: {
    color: '#333333',
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 33,
    lineHeight: 43,
  },
  charity: {
    flexDirection: 'row',
    height: hp('11.61%'),
  },
  charitypic: {
    width: hp('11.61%'),
    height: hp('11.61%'),
    borderRadius: 3000,
    backgroundColor: 'yellow',
    marginRight: wp('1.94%'),
  },
  charityinfo: {
    flex: 1,
    height: hp('11.61%'),
    flexDirection: 'column',
  },
  charitynumbers: {
    flex: 1,
    flexDirection: 'row'
  },
  charityamount: {
    fontWeight: 500,
    fontSize: 50,
    lineHeight: 50,
    color: '#407bff',
    flex: 1,
    justifyContent: 'center'
  },
  charityproceed1: {
    width: wp('11.3%'),
    flex: 4
  },
  charityproceed2: {
    fontWeight: 500,
    fontSize: 25,
    lineHeight: 25,
    color: '#407bff',
  },
  charitydate: {
    fontWeight: 500,
    fontSize: 12,
    lineHeight: 16,
    color: '#848484'
  },
  charitygoal: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    color: '#848484'
  },
  donationbar: {
    width: wp('21.1%'),
    height: hp('0.88%'),
    backgroundColor: 'rgba(64,123,255,0.1)',
    borderRadius: 10
  },
  service: {
    flexDirection: 'row',
    width: wp('42.78%'),
    height: hp('12%'),
    backgroundColor: 'rgba(64,123,255,0.1)',
    borderRadius: 10,
    paddingHorizontal: wp('3.125%'),
    paddingVertical: hp('2.44%'),
  },
  serviceamount: {
    flex: 1,
    flexDirection: 'column',
  },
  servicedollar: {
    fontWeight: 500,
    fontSize: 33,
    lineHeight: 43,
    color: '#000000'
  },
  servicedonation: {
    fontWeight: 500,
    fontSize: 10,
    lineHeight: 13,
    color: '#848484'
  },
  serviceinfo: {
    flex: 4,
    flexDirection: 'column',
  },
  servicetitle:{
    fontWeight: 500,
    fontSize: 19,
    lineHeight: 25,
    color: '#000000'
  },
  servicedetail: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#000000'
  },
  servicebook: {
    flex: 0.5,
    marginVertical: hp('2.44%')
  },
  servicebooking: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    color: '#407bff',
    letterSpacing: '0.05em',
  },
  sharing: {
    flexDirection: 'row'
  },
  sharingtext: {
    flex: 4,
    fontWeight: 500,
    fontSize: 25,
    lineHeight: 25,
    color: '#000000',
  },
  sharingbutton: {
    flex: 1,
    height: hp('4.10%'),
    backgroundColor: '#000000',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  sharingbuttontext: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
  },
  charitybody: {
    height: hp('14.15%'),
    width: wp('48.68%'),
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: wp('2.77%'),
    paddingVertical: hp('2.73%'),
    flexDirection: 'row'
  },
  charitymoreinfo: {
    flex: 4,
    flexDirection: 'column'
  },
  charitymoreinfotitle: {
    fontWeight: 500,
    fontSize: 23,
    lineHeight: 30,
    color: '#000000',
  },
  charitymoreinfodetail: {
    fontWeight: 'normal',
    fontSize: 14,
    lineHeight: 18,
    color: '#000000',
  },
  charitybutton1: {
    flex: 1,
  },
  charitybutton2: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderRadius: 10,
    height: hp('4.10%')
  },
  charitybuttontext: {
    fontWeight: 500,
    fontSize: 14,
    lineHeight: 18,
    color: '#FFFFFF',
  }
});
