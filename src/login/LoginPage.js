import { View, Button } from 'react-native';
import React, { useEffect } from 'react';
import {
  makeRedirectUri,
  ResponseType,
  useAuthRequest,
} from 'expo-auth-session';
import * as WebBrowser from 'expo-web-browser';
import { Title } from 'react-native-paper';

WebBrowser.maybeCompleteAuthSession();

const appId = '0f70f16a-b902-4c2c-8b85-9ff5989761b4';

export default function LoginPage({ onLoginSuccess }) {
  // Request
  const [request, response, promptAsync] = useAuthRequest(
    {
      clientId: appId,
      responseType: ResponseType.Token,
      scopes: [
        'user.read',
        'People.Read',
        'mailboxsettings.read',
        'calendars.readwrite',
        'Contacts.Read',
        'Mail.Read',
        'Files.Read',
      ],
      // For usage in managed apps using the proxy
      redirectUri: makeRedirectUri({
        // For usage in bare and standalone
        native: 'your.app://redirect',
      }),
    },
    {
      authorizationEndpoint:
        'https://login.microsoftonline.com/08d72bfb-9c6e-4a87-8cb5-e86e9a2c4b86/oauth2/v2.0/authorize',
    },
  );

  useEffect(() => {
    if (response) {
      console.log(response);
      if (response.error) {
        console.log(response.error);
      } else if (response.authentication.accessToken) {
        onLoginSuccess(response.authentication.accessToken);
      } else {
        // cancel or error
      }
    }
  }, [response]);

  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button
        disabled={!request}
        title="Login"
        onPress={() => {
          promptAsync();
        }}
      />
    </View>
  );
}
