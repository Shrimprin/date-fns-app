import { format } from "date-fns";

const currentFormattedDateTime = (): string => {
  const now: Date = new Date();
  return format(now, "yyyy-MM-dd HH:mm:ss");
};

const displayTextForEverySecond = (textCallback: () => string): void => {
  setInterval((): void => {
    const displayText: string = textCallback();
    console.clear();
    console.log(displayText);
  }, 1000);
};

displayTextForEverySecond(currentFormattedDateTime);
