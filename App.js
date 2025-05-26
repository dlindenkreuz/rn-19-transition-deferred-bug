import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Switch, Text, View } from "react-native";
import { Data } from "./Data";

function DebugSuspenseFallback() {
  return <View style={styles.fallback} />;
}

// neither deferred nor transition work as expected

export default function App() {
  const [counter, setCounter] = React.useState(0);
  const [, startTransition] = React.useTransition();
  // const deferredCounter = React.useDeferredValue(counter);
  return (
    <View style={styles.container}>
      <Text>Counter: {counter}</Text>
      <Button
        title="-1"
        onPress={() => {
          // setCounter((v) => --v)
          startTransition(() => setCounter((v) => --v));
        }}
      />
      <Button
        title="+1"
        onPress={() => {
          // setCounter((v) => ++v)
          startTransition(() => setCounter((v) => ++v));
        }}
      />
      <React.Suspense fallback={<DebugSuspenseFallback />}>
        {/* <Data counter={deferredCounter} /> */}
        <Data counter={counter} />
      </React.Suspense>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fallback: {
    backgroundColor: "red",
    height: 50,
    width: "100%",
  },
});
