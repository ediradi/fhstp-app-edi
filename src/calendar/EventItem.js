import { View } from 'react-native';
import React from 'react';
import { Card, Paragraph } from 'react-native-paper';

export default function EventItem({ item }) {
  return (
    <Card style={{marginVertical: 8}}>
      <Card.Title title={item.subject} />
      <Card.Content>
        <Paragraph>{item.bodyPreview}</Paragraph>
      </Card.Content>
    </Card>
  );
}
