import icons from "../../../icons.js";

export const returnWeatherIcon = (code) => {
  switch (code) {
    case 0:
      return <icons.WiDaySunny size={32} />;
    case 1:
    case 2:
    case 3:
      return <icons.WiDaySunnyOvercast size={32} />;
    case 45:
    case 48:
      return <icons.WiFog size={32} />;
    case 51:
    case 53:
    case 55:
      return <icons.WiDayRainMix size={32} />;
    case 56:
    case 57:
      return <icons.WiDaySnowWind size={32} />;
    case 61:
    case 63:
    case 65:
      return <icons.WiRain size={32} />;
    case 66:
    case 67:
      return <icons.WiDaySnowWind size={32} />;
    case 71:
    case 73:
    case 75:
      return <icons.WiNightSnowWind size={32} />;
    case 77:
      return <icons.WiNightSnowWind size={32} />;
    case 80:
    case 81:
    case 82:
      return <icons.WiRain size={32} />;
    case 85:
    case 86:
      return <icons.WiSprinkle size={32} />;
    case 95:
      return <icons.WiStormShowers size={32} />;
    case 96:
    case 99:
      return <icons.WiStormShowers size={32} />;
    default:
      return <icons.WiDaySunny size={32} />;
  }
};
