import { API_KEY } from '$env/static/private';

export const load = async () => {
	const fetchWeather = async () => {
		let cityName = 'Dubai';
		const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
		);
		const data = await res.json();
		return data;
	};

	return {
		weather: fetchWeather()
	};
};
