<script>
  import SnowIcon from "./components/SnowIcon.svelte";
  import CountDown from "./components/CountDown.svelte";
  import { onDestroy, onMount } from "svelte";
  let animationDuration = Math.floor(Math.random() * 15 + 5) + "s";
  import { generateId } from "./util/index";
  let snows = [
    {
      width: Math.floor(Math.random() * 50) + 10,
      opacity: 0.5,
      left: "1200px",
      animationDuration: "18s",
      id: generateId(),
    },
  ];

  console.log("snows", snows);

  const removeSnow = (id) => {
    // console.log("snows önceki", snows.length);
    snows = snows.filter((item) => item.id !== id);
  };

  let intervalId;
  onMount(() => {
    intervalId = setInterval(() => {
      const newSnow = {
        width: Math.floor(Math.random() * 50) + 10,
        opacity: Math.random(),
        left: Math.random() * window.innerWidth + "px",
        animationDuration: Math.floor(Math.random() * 15 + 3) + "s",
        id: generateId(),
      };
      snows = [...snows, newSnow];
    }, 100);
  });

  onDestroy(() => {
    clearInterval(intervalId);
  });
</script>

<main class="root">
  <div class="snowflake" style="--animationDuration: {animationDuration}">
    {#each snows as snow (snow.id)}
      <SnowIcon {snow} onDelete={removeSnow} />
    {/each}
  </div>
  <CountDown />
</main>
