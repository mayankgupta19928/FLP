import ServerFetch from "./server-fetch";
import ClientFetch from "./client-fetch";
import SwrFetch from "./swr-fetch";
import ApiUserFetch from "./api-user-fetch";

export default function Assignment1Page() {
  return (
    <main>
      <h1>Assignment 1: Data Fetching Examples</h1>
      <ServerFetch />
      <ClientFetch />
      <SwrFetch />
      <ApiUserFetch />
    </main>
  );
}
