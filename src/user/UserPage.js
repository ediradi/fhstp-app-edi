import { View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { Paragraph } from 'react-native-paper';
import { getUserDetails } from '../GraphService';

export default function UserPage() {
  const [userData, setUserData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    getUserDetails()
      .then(response => setUserData(response))
      .catch(error => setErrorMessage(error))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      {userData && <Paragraph>{JSON.stringify(userData)}</Paragraph>}
    </View>
  );
}
