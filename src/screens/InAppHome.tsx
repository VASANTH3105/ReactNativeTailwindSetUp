import { View, Text, TextInput, StyleSheet, Alert, Image, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import NetInfo from '@react-native-community/netinfo';


const InAppHome = () => {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        console.log("Fetching user data...");
        const apiResponse = await fetch("https://randomuser.me/api/?results=8");
        console.log("Retrived user data...");
        if (!apiResponse.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await apiResponse.json();
        console.log(data);
        setUser(data.results);
      } catch (err: any) {
        setError(err.message);
        Alert.alert("Error", `Something went wrong: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  if (loading) {
    return <Text>Loading...</Text>;
  }

  if (error) {
    return <Text>Error: {error}</Text>;
  }

  const renderItem = ({ item }) => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: item.picture.thumbnail }} style={styles.image} />
        <View style={styles.details}>
          <Text style={styles.name}>
            {item.name.first} {item.name.last}
          </Text>
          <Text style={styles.location}>
            {item.location.city}, {item.location.country}
          </Text>
          <Text style={styles.email}>
            {item.email} || {item.phone}
          </Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Text>Welcome user,</Text>
      <TextInput
        style={styles.searchBox}
        placeholder="Search here..."
      />
      <FlatList
        data={user}
        keyExtractor={(item) => item.login.uuid}
        renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  searchBox: {
    backgroundColor: '#ffffff',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ffffff',
    padding: 10,
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  email: {
    fontSize: 10,
    color: '#3388ff',
    marginTop: 2,
  },
  phone: {
    fontSize: 10,
    color: '#3388ff',
    marginTop: 2,
  },
  location: {
    fontSize: 8,
    color: '#00000080',
  },
});

export default InAppHome;
