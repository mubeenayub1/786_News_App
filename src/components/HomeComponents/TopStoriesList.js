// const TopStories = async => {
//   try {
//     var config = {
//       method: 'get',
//       url: 'http://786news.com.pk/wp-json/wp/v2/posts?categories=7318',
//       headers: {},
//     };

//     let response = await axios(config);
//     if (response) {
//       // console.log(response);
//       console.log('success');
//       // console.log(response.data[0]);
//       setStory(response.data);
//     }
//   } catch (error) {
//     console.log(error);
//   }
// };

// ListHeaderComponent={() => {
//   return (
//     <>
//       <View style={styles.midContainer}>
//         <View style={styles.midView}>
//           <Text style={styles.midText}>Top Stories</Text>
//           <Pressable
//             onPress={() => {
//               navigation.navigate('TopStories');
//             }}
//             style={styles.viewAllContainer}>
//             <Text style={styles.endText1}>View All</Text>
//           </Pressable>
//         </View>
//         <FlatList
//           data={trending}
//           horizontal
//           pagingEnabled
//           showsHorizontalScrollIndicator={false}
//           renderItem={({item}) => {
//             return (
//               <Pressable
//                 style={styles.horizontalScrollComponent}
//                 onPress={() => {
//                   navigation.navigate('DetailScreen'),
//                     {
//                       item: item,
//                     };
//                 }}>
//                 <Image
//                   source={{uri: item.jetpack_featured_media_url}}
//                   style={styles.horizontalImage}
//                 />
//               </Pressable>
//             );
//           }}
//         />
//       </View>
//       <View style={styles.endheader}>
//         <Text style={styles.endText}>Trending</Text>
//         <TouchableOpacity
//           onPress={() => {
//             navigation.navigate('Trending');
//           }}
//           style={styles.viewAllContainer}>
//           <Text style={styles.endText1}>View All</Text>
//         </TouchableOpacity>
//       </View>
//     </>
//   );
// }}
