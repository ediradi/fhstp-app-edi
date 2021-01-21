import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { getMailFolders } from '../GraphService';

export default function MailPage() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    getMailFolders()
      .then(response => {
        setData(response);
        console.log(response);
      })
      .catch(error => setErrorMessage(error))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flex: 1 }}>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {data && <Text>{JSON.stringify(data)}</Text>}
      </View>
    </ScrollView>
  );
}
