import { useState, useEffect } from "react";
import { Dimensions } from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const useGetHeight = () => {
  const [dimensions, setDimensions] = useState({ window, screen });
  const [ valueHeight, setValueHeight ] = useState(Dimensions.get('window').height);

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });
  useEffect(() => {
    setValueHeight(dimensions.window.height)
  },[dimensions])
  return valueHeight
}

export default useGetHeight;