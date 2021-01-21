import { Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { getEvents } from '../GraphService';
import EventItem from './EventItem';

export default function CalendarPage() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState();
  const [errorMessage, setErrorMessage] = useState();

  useEffect(() => {
    getEvents()
      .then(response => {
        setData(response);
        console.log(response);
      })
      .catch(error => setErrorMessage(error))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <ScrollView style={{ padding: 16 }}>
      {data && data.value.map(item => <EventItem key={item.id} item={item} />)}
    </ScrollView>
  );
}
