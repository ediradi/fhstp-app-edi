import { Client } from '@microsoft/microsoft-graph-client';

let client;
function initClient(accessToken) {
  // Initialize Graph client
  // dangerous but simple
  client = Client.init({
    // Use the provided access token to authenticate
    // requests
    authProvider: done => {
      done(null, accessToken);
    },
  });
}

function getUserDetails() {
  return client
    .api('/me')
    .select('displayName,mail,mailboxSettings,userPrincipalName')
    .get();
}

function getPeople() {
  //   const client = getAuthenticatedClient(accessToken);

  return client.api('/me/people').get();
}

function getMailFolders() {
  return client.api('/me/mailFolders').get();
}

function getMailsByFolderId(folderId) {
  return client.api(`/me/mailFolders/${folderId}/messages`).get();
}

function getEvents() {
  return client.api('/me/calendar/events').get();
}

function getRootOneDrive() {
  return client.api('/me/drive/root/children/').get();
}

function getFolderById(folderId) {
  return client.api(`/me/drive/items/${folderId}/children`).get();
}

export {
  getUserDetails,
  getPeople,
  initClient,
  getMailFolders,
  getMailsByFolderId,
  getEvents,
  getRootOneDrive,
  getFolderById,
};
