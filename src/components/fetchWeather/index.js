// export const Header = () => {

//     return (<h2></h2>)
// }

export function Header(weatherEmoji) {
  return (
    <>
      <h1>
        {weatherEmoji.weatherEmoji.temperature} degrees Celcius
        {weatherEmoji.weatherEmoji.condition}
      </h1>
    </>
  );
}
