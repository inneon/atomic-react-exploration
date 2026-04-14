const alpha20 = (original: string) => `${original}51`;

export const background = "#1C2333";
export const backgroundHighlight = "#3C4353";
export const foreground = "#FFFFFF";
export const foregroundMuted = "#FFFFFF80";
export const foregroundDisabled = "#AAAAAA";
export const highlight1 = "#00FFAA";
export const highlight2 = "#00AAFF";
export const highlight1Shadow = alpha20(highlight1);
export const highlight2Shadow = alpha20(highlight2);
export const highlight1Disabled = "#008833";
export const highlight2Disabled = "#003388";

export const palette = {
  background,
  backgroundHighlight,
  foreground,
  foregroundMuted,
  foregroundDisabled,
  highlight1,
  highlight2,
  highlight1Shadow,
  highlight2Shadow,
  highlight1Disabled,
  highlight2Disabled,
};
