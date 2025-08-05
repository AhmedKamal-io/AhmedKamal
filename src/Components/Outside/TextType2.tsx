import TextType from "./TextType";

<TextType
  text={["Front End", "Back End ", "Full Stack"]}
  // textColors=
  typingSpeed={50}
  deletingSpeed={50}
  pauseDuration={1500}
  cursorBlinkDuration={0.7}
  showCursor={true}
  cursorCharacter="_"
  variableSpeed={{ min: 50, max: 100 }}
  startOnVisible={true}
/>;
