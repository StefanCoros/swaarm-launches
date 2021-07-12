import React, {useState} from 'react';

import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery
} from "@apollo/client";

import { LaunchesTable } from './features/Launches';
import { launchesQuery } from './features/Launches/query';
import 'antd/dist/antd.css'; 

import styles from './App.module.scss';

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

function ExchangeRates(props:any) {
  const {setLaunches, setIsLoading} = props;
const { loading, error, data } = useQuery(launchesQuery);

if (loading) return <div />;
if (error) return <div />;
  setIsLoading(false);
  setLaunches(data.launchesPast);
  
  return <div />;
}

export default function App() {
  const [launches, setLaunches] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  return (
    <ApolloProvider client={client}>
      {!launches.length && <ExchangeRates setLaunches={setLaunches} setIsLoading={setIsLoading}/>}
      <div className={styles.app} >
        <LaunchesTable launches={launches} isLoadingLaunches={isLoading}/>
      </div>
    </ApolloProvider>
  );
}