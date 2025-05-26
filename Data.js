import React from "react";
import { View, Text } from "react-native";

const cache = new Map();

function getData(key) {
  if (cache.has(key)) {
    return cache.get(key);
  }

  const data = load(key);
  cache.set(key, data);
  return React.use(data);
}

async function load(key) {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return key;
}

export function Data({ counter }) {
  const data = getData(counter);

  return (
    <View>
      <Text>Data: {data}</Text>
    </View>
  );
}
