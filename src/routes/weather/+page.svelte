<script>
	export let data;
	// console.log(data.weather);
	let temp = data.weather.main.temp;
	let city = data.weather.name;
	let weather = data.weather.weather[0].main;
</script>

<div>
	<h1>{city}</h1>
	{#if temp > 20}
		<h1>๐</h1>
	{/if}
	<h2>Temp is {temp}ยบ celcius</h2>
	<h2>Weather is {weather}</h2>
</div>
